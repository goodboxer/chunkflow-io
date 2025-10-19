/**
 * Firestore Database Service
 *
 * Handles data persistence for ChunkFlow-IO:
 * - User profiles
 * - Audiobook projects
 * - Generated audio and images
 * - Subscription data
 */

import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
  DocumentData,
  QueryConstraint,
} from 'firebase/firestore';
import { db } from './config';

// Type definitions for Firestore documents

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  subscription: {
    plan: 'free' | 'basic' | 'pro' | 'enterprise';
    status: 'active' | 'canceled' | 'expired';
    startDate: Timestamp | null;
    endDate: Timestamp | null;
  };
  usage: {
    audioBooksCreated: number;
    audioMinutesGenerated: number;
    imagesGenerated: number;
    storageUsedMB: number;
  };
}

export interface AudiobookProject {
  id: string;
  userId: string;
  title: string;
  author: string;
  description?: string;
  status: 'draft' | 'processing' | 'completed' | 'failed';
  createdAt: Timestamp;
  updatedAt: Timestamp;
  manuscriptUrl?: string; // Firebase Storage URL
  manuscriptFormat?: 'epub' | 'pdf' | 'docx' | 'txt' | 'rtf';
  characters: CharacterAssignment[];
  scenes: Scene[];
  audioFiles: AudioFile[];
  coverImageUrl?: string;
  metadata: {
    wordCount?: number;
    estimatedDuration?: number; // in minutes
    genre?: string;
    language?: string;
  };
}

export interface CharacterAssignment {
  characterName: string;
  personaType: string; // e.g., 'dog', 'cat', etc.
  mood: string;
  role: string;
  style: string;
  voiceSettings?: {
    pitch?: number;
    speed?: number;
    emphasis?: number;
  };
}

export interface Scene {
  id: string;
  sceneNumber: number;
  title?: string;
  text: string;
  characterSpeaking?: string;
  imagePrompt?: string;
  imageUrl?: string;
  audioUrl?: string;
  startPosition?: number; // character position in manuscript
  endPosition?: number;
  duration?: number; // in seconds
}

export interface AudioFile {
  id: string;
  sceneId: string;
  url: string; // Firebase Storage URL
  format: 'm4b' | 'mp3' | 'aax';
  duration: number; // in seconds
  fileSize: number; // in bytes
  createdAt: Timestamp;
}

/**
 * Create or update user profile
 */
export async function saveUserProfile(
  uid: string,
  data: Partial<UserProfile>
): Promise<void> {
  if (!db) {
    throw new Error('Firestore is not initialized');
  }

  const userRef = doc(db, 'users', uid);
  const now = Timestamp.now();

  await setDoc(
    userRef,
    {
      ...data,
      uid,
      updatedAt: now,
      createdAt: data.createdAt || now,
    },
    { merge: true }
  );
}

/**
 * Get user profile
 */
export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  if (!db) {
    throw new Error('Firestore is not initialized');
  }

  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    return userSnap.data() as UserProfile;
  }

  return null;
}

/**
 * Create a new audiobook project
 */
export async function createAudiobookProject(
  userId: string,
  projectData: Partial<AudiobookProject>
): Promise<string> {
  if (!db) {
    throw new Error('Firestore is not initialized');
  }

  const projectsRef = collection(db, 'audiobooks');
  const projectId = doc(projectsRef).id;
  const now = Timestamp.now();

  const newProject: AudiobookProject = {
    id: projectId,
    userId,
    title: projectData.title || 'Untitled Audiobook',
    author: projectData.author || 'Unknown Author',
    description: projectData.description || '',
    status: 'draft',
    createdAt: now,
    updatedAt: now,
    characters: [],
    scenes: [],
    audioFiles: [],
    metadata: {},
    ...projectData,
  };

  await setDoc(doc(db, 'audiobooks', projectId), newProject);

  return projectId;
}

/**
 * Get audiobook project by ID
 */
export async function getAudiobookProject(
  projectId: string
): Promise<AudiobookProject | null> {
  if (!db) {
    throw new Error('Firestore is not initialized');
  }

  const projectRef = doc(db, 'audiobooks', projectId);
  const projectSnap = await getDoc(projectRef);

  if (projectSnap.exists()) {
    return projectSnap.data() as AudiobookProject;
  }

  return null;
}

/**
 * Get all audiobook projects for a user
 */
export async function getUserAudiobookProjects(
  userId: string,
  maxResults: number = 50
): Promise<AudiobookProject[]> {
  if (!db) {
    throw new Error('Firestore is not initialized');
  }

  const projectsRef = collection(db, 'audiobooks');
  const q = query(
    projectsRef,
    where('userId', '==', userId),
    orderBy('updatedAt', 'desc'),
    limit(maxResults)
  );

  const querySnapshot = await getDocs(q);
  const projects: AudiobookProject[] = [];

  querySnapshot.forEach((doc) => {
    projects.push(doc.data() as AudiobookProject);
  });

  return projects;
}

/**
 * Update audiobook project
 */
export async function updateAudiobookProject(
  projectId: string,
  updates: Partial<AudiobookProject>
): Promise<void> {
  if (!db) {
    throw new Error('Firestore is not initialized');
  }

  const projectRef = doc(db, 'audiobooks', projectId);
  const now = Timestamp.now();

  await updateDoc(projectRef, {
    ...updates,
    updatedAt: now,
  });
}

/**
 * Delete audiobook project
 */
export async function deleteAudiobookProject(projectId: string): Promise<void> {
  if (!db) {
    throw new Error('Firestore is not initialized');
  }

  const projectRef = doc(db, 'audiobooks', projectId);
  await deleteDoc(projectRef);
}

/**
 * Update user usage statistics
 */
export async function updateUserUsage(
  uid: string,
  usage: Partial<UserProfile['usage']>
): Promise<void> {
  if (!db) {
    throw new Error('Firestore is not initialized');
  }

  const userRef = doc(db, 'users', uid);

  await updateDoc(userRef, {
    usage,
    updatedAt: Timestamp.now(),
  });
}
