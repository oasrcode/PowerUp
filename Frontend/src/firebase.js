// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBs7krnjDAlw4IaWqv1if3qDmhVHtQ7UDI",
  authDomain: "jacked-oasrcode.firebaseapp.com",
  projectId: "jacked-oasrcode",
  storageBucket: "jacked-oasrcode.appspot.com",
  messagingSenderId: "635109621053",
  appId: "1:635109621053:web:c348c455f6e270960f1954"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);