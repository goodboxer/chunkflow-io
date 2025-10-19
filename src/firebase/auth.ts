/**
 * Firebase Authentication Service
 *
 * Handles user authentication for ChunkFlow-IO:
 * - Email/password signup and login
 * - Google OAuth login
 * - Password reset
 * - Auth state management
 */

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  User,
  UserCredential,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from './config';

/**
 * Sign up a new user with email and password
 */
export async function signUpWithEmail(
  email: string,
  password: string,
  displayName?: string
): Promise<UserCredential> {
  if (!auth) {
    throw new Error('Firebase Auth is not initialized');
  }

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  // Update display name if provided
  if (displayName && userCredential.user) {
    await updateProfile(userCredential.user, { displayName });
  }

  return userCredential;
}

/**
 * Sign in an existing user with email and password
 */
export async function signInWithEmail(
  email: string,
  password: string
): Promise<UserCredential> {
  if (!auth) {
    throw new Error('Firebase Auth is not initialized');
  }

  return await signInWithEmailAndPassword(auth, email, password);
}

/**
 * Sign in with Google OAuth
 */
export async function signInWithGoogle(): Promise<UserCredential> {
  if (!auth) {
    throw new Error('Firebase Auth is not initialized');
  }

  const provider = new GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');

  return await signInWithPopup(auth, provider);
}

/**
 * Sign out the current user
 */
export async function signOutUser(): Promise<void> {
  if (!auth) {
    throw new Error('Firebase Auth is not initialized');
  }

  await signOut(auth);
}

/**
 * Send a password reset email
 */
export async function resetPassword(email: string): Promise<void> {
  if (!auth) {
    throw new Error('Firebase Auth is not initialized');
  }

  await sendPasswordResetEmail(auth, email);
}

/**
 * Get the current authenticated user
 */
export function getCurrentUser(): User | null {
  return auth?.currentUser || null;
}

/**
 * Listen to authentication state changes
 */
export function onAuthChange(callback: (user: User | null) => void): () => void {
  if (!auth) {
    console.warn('Firebase Auth is not initialized');
    return () => {};
  }

  return onAuthStateChanged(auth, callback);
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  return !!auth?.currentUser;
}
