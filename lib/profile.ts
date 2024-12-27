import { db } from './firebase';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { UserData } from './auth';

export const getUserProfile = async (uid: string): Promise<UserData | null> => {
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return docSnap.data() as UserData;
  }
  return null;
};

export const updateUserProfile = async (uid: string, data: Partial<UserData>): Promise<void> => {
  const docRef = doc(db, 'users', uid);
  await updateDoc(docRef, data);
};

export const deleteUserProfile = async (uid: string): Promise<void> => {
  const docRef = doc(db, 'users', uid);
  await deleteDoc(docRef);
};