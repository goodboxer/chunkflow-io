/**
 * Firebase Services Index
 *
 * Central export point for all Firebase services
 */

// Configuration
export { app, auth, db, storage } from './config';

// Authentication
export {
  signUpWithEmail,
  signInWithEmail,
  signInWithGoogle,
  signOutUser,
  resetPassword,
  getCurrentUser,
  onAuthChange,
  isAuthenticated,
} from './auth';

// Firestore Database
export {
  saveUserProfile,
  getUserProfile,
  createAudiobookProject,
  getAudiobookProject,
  getUserAudiobookProjects,
  updateAudiobookProject,
  deleteAudiobookProject,
  updateUserUsage,
} from './firestore';

// Type exports
export type {
  UserProfile,
  AudiobookProject,
  CharacterAssignment,
  Scene,
  AudioFile,
} from './firestore';
