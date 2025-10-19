/**
 * Authentication Composable
 *
 * Provides reactive authentication state and methods for Vue components
 */

import { ref, onMounted, onUnmounted } from 'vue';
import { User } from 'firebase/auth';
import { onAuthChange, getCurrentUser } from '../firebase';

export function useAuth() {
  const currentUser = ref<User | null>(null);
  const isAuthenticated = ref(false);
  const loading = ref(true);

  let unsubscribe: (() => void) | null = null;

  function initAuth() {
    // Set initial user if already signed in
    currentUser.value = getCurrentUser();
    isAuthenticated.value = !!currentUser.value;

    // Listen for auth state changes
    unsubscribe = onAuthChange((user) => {
      currentUser.value = user;
      isAuthenticated.value = !!user;
      loading.value = false;

      // Create or update user profile in Firestore when user signs in
      if (user) {
        import('../firebase').then(({ saveUserProfile, getUserProfile }) => {
          getUserProfile(user.uid).then(existingProfile => {
            if (!existingProfile) {
              // Create new profile for first-time users
              saveUserProfile(user.uid, {
                email: user.email || '',
                displayName: user.displayName || 'User',
                subscription: {
                  plan: 'free',
                  status: 'active',
                  startDate: null,
                  endDate: null,
                },
                usage: {
                  audioBooksCreated: 0,
                  audioMinutesGenerated: 0,
                  imagesGenerated: 0,
                  storageUsedMB: 0,
                },
              }).catch(err => {
                console.error('Failed to create user profile:', err);
              });
            }
          });
        });
      }
    });

    // Set loading to false after a short delay if no auth state change
    setTimeout(() => {
      loading.value = false;
    }, 1000);
  }

  function cleanup() {
    if (unsubscribe) {
      unsubscribe();
    }
  }

  onMounted(() => {
    initAuth();
  });

  onUnmounted(() => {
    cleanup();
  });

  return {
    currentUser,
    isAuthenticated,
    loading,
  };
}
