import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyBXUSfzYA2ZYgEpCgrx_R4ooYiQUkuzy6s",
  authDomain: "jamesesilholder.firebaseapp.com",
  projectId: "jamesesilholder",
  storageBucket: "jamesesilholder.appspot.com",
  messagingSenderId: "649341593918",
  appId: "1:649341593918:web:b2efcc4dde9811b6ffe46f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);




