import { doc, getDoc } from 'firebase/firestore';
import { User } from 'firebase/auth';
import { db } from '../firebase';
import { UserRole } from './types';

export const getUserRole = async (user: User | null): Promise<UserRole> => {
  if (!user) {
    return 'user';
  }

  try {
    const docRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) {
      console.error('User document not found');
      return 'user';
    }
    
    const userData = docSnap.data();
    if (!userData?.role) {
      console.error('Role not found in user data');
      return 'user';
    }
    
    return userData.role as UserRole;
  } catch (error) {
    console.error('Error fetching user role:', error);
    return 'user';
  }
};