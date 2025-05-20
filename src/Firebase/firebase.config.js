// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEoPuCucMuOo7Piwgph8AGU8oYHiJzTsU",
  authDomain: "roommate-app-auth.firebaseapp.com",
  projectId: "roommate-app-auth",
  storageBucket: "roommate-app-auth.firebasestorage.app",
  messagingSenderId: "764659087333",
  appId: "1:764659087333:web:ce92b43111605c5e32210c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);