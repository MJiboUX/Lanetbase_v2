import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDP8_B28UrYGi3Xkjbmjp2udyYhS2daZPE",
  authDomain: "lanetbase-5099d.firebaseapp.com",
  projectId: "lanetbase-5099d",
  storageBucket: "lanetbase-5099d.firebasestorage.app",
  messagingSenderId: "253524843087",
  appId: "1:253524843087:web:af67333ba744b6de29a83a",
  measurementId: "G-N6MRGF79F8"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };