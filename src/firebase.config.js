import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDOQHYg2CdbQR5_F0yHaLa2xrRWYHxbb7g',
  authDomain: 'elite-store-a147d.firebaseapp.com',
  projectId: 'elite-store-a147d',
  storageBucket: 'elite-store-a147d.appspot.com',
  messagingSenderId: '427621601031',
  appId: '1:427621601031:web:ff4b8403e42bcff083bfa2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
