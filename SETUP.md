# ChunkFlow-IO Setup Guide

## Environment Configuration

### Required API Keys

This project requires Google Gemini and Firebase credentials to function.

**Setup Steps:**

1. Copy the environment template:
   ```bash
   cp .env.example .env.local
   ```

2. **Get your Gemini API key:**
   - Visit: https://aistudio.google.com/apikey
   - Create or copy your API key
   - Add to `.env.local` as `GEMINI_API_KEY`

3. **Set up Firebase project:**
   - Visit: https://console.firebase.google.com/
   - Create a new project (or use existing)
   - Go to Project Settings > General
   - Scroll to "Your apps" and click "Web app" (</>)
   - Copy the configuration values
   - Enable Authentication:
     - Go to Authentication > Sign-in method
     - Enable "Email/Password" and "Google"
   - Enable Firestore Database:
     - Go to Firestore Database
     - Create database in production mode
   - Enable Storage:
     - Go to Storage
     - Get started with default rules

4. Edit `.env.local` and add all Firebase configuration values:
   ```
   GEMINI_API_KEY=your_actual_key_here

   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
   VITE_FIREBASE_APP_ID=1:123456789:web:abcdef
   ```

### Security Notice

**IMPORTANT:** Never commit `.env.local` or any file containing API keys to version control!

The `.gitignore` file is configured to exclude:
- `.env.local`
- All `.env.*.local` files
- Any `*.env` files

### Local Development

Once your `.env.local` is configured:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app will be available at http://localhost:3000

## Troubleshooting

**"API key missing" error:**
- Verify `.env.local` exists in the project root
- Check that `GEMINI_API_KEY` is set correctly
- Restart the dev server after changing environment variables

**API quota exceeded:**
- Check your Gemini API usage at https://aistudio.google.com
- You may need to upgrade your API plan or wait for quota reset

**Firebase not initializing:**
- Verify all Firebase environment variables are set in `.env.local`
- Check Firebase Console for correct configuration values
- Ensure Firebase services (Auth, Firestore, Storage) are enabled in console
