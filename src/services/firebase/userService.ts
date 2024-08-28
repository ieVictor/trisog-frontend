import { FirebaseError } from 'firebase/app';
import { auth, facebookProvider, googleProvider } from './firebaseConfig';
import { createUserWithEmailAndPassword, getAdditionalUserInfo, signInWithEmailAndPassword, signInWithPopup, User } from 'firebase/auth';
import userService from '../api/userService';

type AuthResponse = {
  user: User | null,
  error: string | null
}


const errorMessages: { [key: string]: string } = {
  'auth/wrong-password': 'The password is incorrect. Please try again',
  'auth/weak-password': 'The password must be at least 6 characters long',
  'auth/invalid-email': 'The email address is invalid',
  'auth/email-already-in-use': 'This email address is already in use by another account.',
  'auth/credential-already-in-use': 'These credentials are already associated with another account.',
  'auth/invalid-credential': 'The provided credentials are incorrect or expired.',
  'auth/invalid-user-token': 'Your session has expired. Please sign in again.',
  'auth/invalid-oauth-provider': 'This sign-in method is not supported for this operation.',
  'auth/unauthorized-domain': 'This domain is not authorized for sign-in operations. Please check the list of authorized domains in the Firebase Console.',
  'auth/user-token-expired': 'Your session has expired. Please sign in again.',
  'auth/user-not-found': 'No user found with this identifier. The account may have been deleted.'
};

export const signUpWithEmail = async (email: string, password: string, username: string): Promise<AuthResponse> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await userService.registerUser({
      user_id: userCredential.user.uid,
      user_email: userCredential.user.email,
      user_name: username,
      user_image: null
    });
    return { user: userCredential.user, error: null };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return { user: null, error: errorMessages[firebaseError.code] || 'Invalid user credentials'};
  }
} 

export const logInWithEmail = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return { user: null, error: errorMessages[firebaseError.code] || 'Invalid user credentials' }
  }
}

export const logInWithGoogle = async (): Promise<AuthResponse> => {
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    const additionalUserInfo = getAdditionalUserInfo(userCredential);

    if(additionalUserInfo?.isNewUser) {
      await userService.registerUser({
        user_id: userCredential.user.uid,
        user_email: userCredential.user.email,
        user_name: userCredential.user.displayName,
        user_image: userCredential.user.photoURL
      });
    }
    return { user: userCredential.user, error: null };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return { user: null, error: errorMessages[firebaseError.code] || 'Invalid user credentials' };
  }
}

export const logInWithFacebook = async (): Promise<AuthResponse> => {
  try {
    const userCredential = await signInWithPopup(auth, facebookProvider);
    const additionalUserInfo = getAdditionalUserInfo(userCredential);

    if(additionalUserInfo?.isNewUser) {
      await userService.registerUser({
        user_id: userCredential.user.uid,
        user_email: userCredential.user.email,
        user_name: userCredential.user.displayName,
        user_image: userCredential.user.photoURL
      });
    }
    return { user: userCredential.user, error: null };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return { user: null, error: errorMessages[firebaseError.code] || 'Invalid user credentials' };
  }
}