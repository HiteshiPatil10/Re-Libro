
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase configuration - Replace with your actual config
const firebaseConfig = {
  apiKey: "AIzaSyB0UMiPJzPWOVe0Mt6mL5l1SfgINb9go9w",
  authDomain: "relibro-8a1bb.firebaseapp.com",
  projectId: "relibro-8a1bb",
  storageBucket: "relibro-8a1bb.firebasestorage.app",
  messagingSenderId: "1039243310547",
  appId: "1:1039243310547:web:1713eee85f2d05577e6b26"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
