// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_JACKED_API_KEY,
  authDomain: import.meta.env.VITE_JACKED_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_JACKED_PROJECT_ID,
  storageBucket: import.meta.env.VITE_JACKED_STORAGE_BUCKED,
  messagingSenderId: import.meta.env.VITE_ACKED_MESSAGING__SENDERID,
  appId: import.meta.env.VITE_JACKED_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);