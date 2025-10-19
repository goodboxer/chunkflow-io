/**
 * Authentication Modal Component
 *
 * Provides login/signup UI with email/password and Google OAuth
 */

import { defineComponent, ref, computed } from 'vue';
import {
  signUpWithEmail,
  signInWithEmail,
  signInWithGoogle,
  resetPassword,
} from '../firebase';

export const AuthModal = defineComponent({
  name: 'AuthModal',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    initialMode: {
      type: String as () => 'login' | 'signup' | 'reset',
      default: 'login',
    },
  },
  emits: ['close', 'authenticated'],
  setup(props, { emit }) {
    const mode = ref<'login' | 'signup' | 'reset'>(props.initialMode);
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const displayName = ref('');
    const error = ref('');
    const loading = ref(false);
    const success = ref('');

    const title = computed(() => {
      switch (mode.value) {
        case 'signup':
          return 'Create Account';
        case 'reset':
          return 'Reset Password';
        default:
          return 'Sign In';
      }
    });

    const buttonText = computed(() => {
      if (loading.value) return 'Processing...';
      switch (mode.value) {
        case 'signup':
          return 'Sign Up';
        case 'reset':
          return 'Send Reset Email';
        default:
          return 'Sign In';
      }
    });

    function resetForm() {
      email.value = '';
      password.value = '';
      confirmPassword.value = '';
      displayName.value = '';
      error.value = '';
      success.value = '';
    }

    function switchMode(newMode: 'login' | 'signup' | 'reset') {
      mode.value = newMode;
      resetForm();
    }

    async function handleEmailAuth() {
      error.value = '';
      success.value = '';

      // Validation
      if (!email.value || !email.value.includes('@')) {
        error.value = 'Please enter a valid email address';
        return;
      }

      if (mode.value === 'reset') {
        try {
          loading.value = true;
          await resetPassword(email.value);
          success.value = 'Password reset email sent! Check your inbox.';
          setTimeout(() => switchMode('login'), 3000);
        } catch (err: any) {
          error.value = err.message || 'Failed to send reset email';
        } finally {
          loading.value = false;
        }
        return;
      }

      if (!password.value || password.value.length < 6) {
        error.value = 'Password must be at least 6 characters';
        return;
      }

      if (mode.value === 'signup') {
        if (password.value !== confirmPassword.value) {
          error.value = 'Passwords do not match';
          return;
        }
        if (!displayName.value) {
          error.value = 'Please enter your name';
          return;
        }
      }

      try {
        loading.value = true;

        if (mode.value === 'signup') {
          await signUpWithEmail(email.value, password.value, displayName.value);
        } else {
          await signInWithEmail(email.value, password.value);
        }

        emit('authenticated');
        emit('close');
        resetForm();
      } catch (err: any) {
        if (err.code === 'auth/email-already-in-use') {
          error.value = 'Email already in use. Try signing in instead.';
        } else if (err.code === 'auth/invalid-credential') {
          error.value = 'Invalid email or password';
        } else if (err.code === 'auth/user-not-found') {
          error.value = 'No account found with this email';
        } else if (err.code === 'auth/wrong-password') {
          error.value = 'Incorrect password';
        } else {
          error.value = err.message || 'Authentication failed';
        }
      } finally {
        loading.value = false;
      }
    }

    async function handleGoogleAuth() {
      error.value = '';

      try {
        loading.value = true;
        await signInWithGoogle();
        emit('authenticated');
        emit('close');
        resetForm();
      } catch (err: any) {
        if (err.code === 'auth/popup-closed-by-user') {
          error.value = 'Sign-in cancelled';
        } else {
          error.value = err.message || 'Google sign-in failed';
        }
      } finally {
        loading.value = false;
      }
    }

    function close() {
      emit('close');
      resetForm();
    }

    return {
      mode,
      email,
      password,
      confirmPassword,
      displayName,
      error,
      success,
      loading,
      title,
      buttonText,
      switchMode,
      handleEmailAuth,
      handleGoogleAuth,
      close,
    };
  },
  template: `
    <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" @click.self="close">
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
        <!-- Header -->
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-gray-800">{{ title }}</h2>
          <button @click="close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
        </div>

        <!-- Error Message -->
        <div v-if="error" class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {{ error }}
        </div>

        <!-- Success Message -->
        <div v-if="success" class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          {{ success }}
        </div>

        <!-- Email/Password Form -->
        <form @submit.prevent="handleEmailAuth" class="space-y-4">
          <!-- Name (signup only) -->
          <div v-if="mode === 'signup'">
            <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              v-model="displayName"
              type="text"
              placeholder="Enter your name"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :disabled="loading"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              v-model="email"
              type="email"
              placeholder="you@example.com"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :disabled="loading"
            />
          </div>

          <!-- Password (not for reset) -->
          <div v-if="mode !== 'reset'">
            <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              v-model="password"
              type="password"
              placeholder="Enter password (6+ characters)"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :disabled="loading"
            />
          </div>

          <!-- Confirm Password (signup only) -->
          <div v-if="mode === 'signup'">
            <label class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              v-model="confirmPassword"
              type="password"
              placeholder="Re-enter password"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :disabled="loading"
            />
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            :disabled="loading"
          >
            {{ buttonText }}
          </button>
        </form>

        <!-- Divider -->
        <div class="my-6 flex items-center">
          <div class="flex-1 border-t border-gray-300"></div>
          <span class="px-4 text-sm text-gray-500">or</span>
          <div class="flex-1 border-t border-gray-300"></div>
        </div>

        <!-- Google Sign In -->
        <button
          @click="handleGoogleAuth"
          class="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2 font-medium"
          :disabled="loading"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>

        <!-- Mode Switchers -->
        <div class="mt-6 text-center text-sm">
          <div v-if="mode === 'login'">
            <p class="text-gray-600">
              Don't have an account?
              <button @click="switchMode('signup')" class="text-blue-600 hover:underline font-medium">Sign up</button>
            </p>
            <button @click="switchMode('reset')" class="text-blue-600 hover:underline font-medium mt-2">
              Forgot password?
            </button>
          </div>
          <div v-else-if="mode === 'signup'">
            <p class="text-gray-600">
              Already have an account?
              <button @click="switchMode('login')" class="text-blue-600 hover:underline font-medium">Sign in</button>
            </p>
          </div>
          <div v-else>
            <button @click="switchMode('login')" class="text-blue-600 hover:underline font-medium">
              Back to sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
});
