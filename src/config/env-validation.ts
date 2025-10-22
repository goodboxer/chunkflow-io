/**
 * Environment Variables Validation
 *
 * Validates all required environment variables at application startup
 * and provides user-friendly error messages for missing configurations.
 */

interface ValidationResult {
  isValid: boolean;
  missingVars: string[];
  warnings: string[];
}

/**
 * Validates Gemini API Key configuration
 */
export function validateGeminiConfig(): ValidationResult {
  const result: ValidationResult = {
    isValid: true,
    missingVars: [],
    warnings: []
  };

  const geminiApiKey = import.meta.env.GEMINI_API_KEY ||
                       (typeof process !== 'undefined' ? process.env.GEMINI_API_KEY : null);

  if (!geminiApiKey) {
    result.isValid = false;
    result.missingVars.push('GEMINI_API_KEY');
    result.warnings.push(
      'Gemini API key is missing. Audio conversations and image generation will not work.\n' +
      'Get your API key at: https://aistudio.google.com/apikey'
    );
  }

  return result;
}

/**
 * Validates Firebase configuration
 */
export function validateFirebaseConfig(): ValidationResult {
  const result: ValidationResult = {
    isValid: true,
    missingVars: [],
    warnings: []
  };

  const requiredVars = {
    'VITE_FIREBASE_API_KEY': 'Firebase API Key',
    'VITE_FIREBASE_AUTH_DOMAIN': 'Firebase Auth Domain',
    'VITE_FIREBASE_PROJECT_ID': 'Firebase Project ID',
    'VITE_FIREBASE_STORAGE_BUCKET': 'Firebase Storage Bucket',
    'VITE_FIREBASE_MESSAGING_SENDER_ID': 'Firebase Messaging Sender ID',
    'VITE_FIREBASE_APP_ID': 'Firebase App ID'
  };

  for (const [varName, displayName] of Object.entries(requiredVars)) {
    if (!import.meta.env[varName]) {
      result.isValid = false;
      result.missingVars.push(varName);
    }
  }

  if (!result.isValid) {
    result.warnings.push(
      'Firebase configuration is incomplete. User authentication and data persistence will not work.\n' +
      'Set up Firebase at: https://console.firebase.google.com/\n' +
      'See SETUP.md for detailed instructions.'
    );
  }

  return result;
}

/**
 * Validates all environment variables
 * Returns true if all critical variables are present
 */
export function validateEnvironment(): boolean {
  const geminiResult = validateGeminiConfig();
  const firebaseResult = validateFirebaseConfig();

  const allMissingVars = [...geminiResult.missingVars, ...firebaseResult.missingVars];
  const allWarnings = [...geminiResult.warnings, ...firebaseResult.warnings];

  if (allMissingVars.length > 0) {
    console.error('❌ Environment Configuration Error');
    console.error('━'.repeat(50));
    console.error('\nMissing environment variables:');
    allMissingVars.forEach(varName => {
      console.error(`  ✗ ${varName}`);
    });

    console.error('\nWarnings:');
    allWarnings.forEach(warning => {
      console.error(`\n${warning}`);
    });

    console.error('\n━'.repeat(50));
    console.error('📝 Setup Instructions:');
    console.error('  1. Copy .env.example to .env.local');
    console.error('  2. Fill in your API keys and configuration');
    console.error('  3. Restart the development server');
    console.error('  4. See SETUP.md for detailed instructions');
    console.error('━'.repeat(50));

    // In production, show user-friendly error
    if (import.meta.env.PROD) {
      displayProductionConfigError(allMissingVars);
    }

    return false;
  }

  // All validations passed
  console.log('✅ Environment configuration validated successfully');
  return true;
}

/**
 * Displays user-friendly configuration error in production
 */
function displayProductionConfigError(missingVars: string[]): void {
  // Create error overlay
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  `;

  overlay.innerHTML = `
    <div style="max-width: 600px; padding: 40px; text-align: center;">
      <div style="font-size: 72px; margin-bottom: 20px;">⚙️</div>
      <h1 style="font-size: 32px; margin-bottom: 16px; font-weight: 700;">
        Configuration Required
      </h1>
      <p style="font-size: 18px; margin-bottom: 32px; opacity: 0.9;">
        ChunkFlow-IO requires additional configuration to function properly.
      </p>
      <div style="background: rgba(0,0,0,0.2); border-radius: 12px; padding: 24px; margin-bottom: 32px; text-align: left;">
        <p style="font-size: 14px; font-weight: 600; margin-bottom: 12px;">Missing Configuration:</p>
        <ul style="font-size: 14px; opacity: 0.9; list-style: none; padding: 0;">
          ${missingVars.map(v => `<li style="margin-bottom: 8px;">✗ ${v}</li>`).join('')}
        </ul>
      </div>
      <p style="font-size: 14px; opacity: 0.8;">
        Please contact the administrator or check the deployment documentation.
      </p>
    </div>
  `;

  document.body.appendChild(overlay);
}

/**
 * Get the Gemini API key (with fallback for different environments)
 */
export function getGeminiApiKey(): string | null {
  return import.meta.env.GEMINI_API_KEY ||
         (typeof process !== 'undefined' ? process.env.GEMINI_API_KEY : null) ||
         null;
}
