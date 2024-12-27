import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  User
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { UserData, UserRole } from './types';
import { initializeUserWallet } from '../wallet/initialize';
import { sendWelcomeEmail } from '../email/service';
import { getSkillRecommendations } from './utils';

export const createUser = async (
  email: string, 
  password: string, 
  role: UserRole = 'user',
  additionalData: Partial<UserData> = {}
): Promise<UserData> => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  
  const userData: UserData = {
    uid: user.uid,
    email: user.email!,
    role,
    createdAt: Date.now(),
    ...additionalData,
  };

  await setDoc(doc(db, 'users', user.uid), userData);
  await initializeUserWallet(user.uid);
  
  await sendWelcomeEmail({
    email: user.email!,
    fullName: additionalData.fullName || '',
    currentSkill: additionalData.currentSkill || '',
    recommendations: getSkillRecommendations(additionalData.currentSkill || '')
  });
  
  return userData;
};

export const signIn = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

export const resetPassword = async (email: string) => {
  return sendPasswordResetEmail(auth, email);
};