import { firebaseConfig } from '$lib/config/firebase.config';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error('Error signing in:', error);
    alert('Please allow pop-ups for this site');
  }
}

export async function logout() {
  try {
    await signOut(auth);
    console.info('User logged out successfully');
  } catch (error) {
    console.error('Error logging out:', error);
  }
}