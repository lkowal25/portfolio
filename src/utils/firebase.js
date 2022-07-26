// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCIEAnzeoDIB64isVU4J1emj-3tGSwUDjE',
  authDomain: 'portfolio-2-be3fb.firebaseapp.com',
  projectId: 'portfolio-2-be3fb',
  storageBucket: 'portfolio-2-be3fb.appspot.com',
  messagingSenderId: '305350334856',
  appId: '1:305350334856:web:a183253e18f0d920f8823d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
