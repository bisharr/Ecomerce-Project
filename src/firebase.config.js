import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDYlqURQvaSWZRQ8i1taPEl3wcTzYgNcIA',
  authDomain: 'e-commerce-8e715.firebaseapp.com',
  projectId: 'e-commerce-8e715',
  storageBucket: 'e-commerce-8e715.appspot.com',
  messagingSenderId: '639423501089',
  appId: '1:639423501089:web:890f594db07f7aa0b6a460',
};

//Initialize firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
