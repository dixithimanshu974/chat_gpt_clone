import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// require('firebase/auth')
const firebaseConfig = {
  apiKey: "AIzaSyCLWfJ-zRHXc6JtWqsRKTG9_TgXB0Dpd88",
  authDomain: "chatgpt-c172e.firebaseapp.com",
  projectId: "chatgpt-c172e",
  storageBucket: "chatgpt-c172e.appspot.com",
  messagingSenderId: "1090392501057",
  appId: "1:1090392501057:web:bf6f1adb4315ac1e924fc0",
};
const firebaseapp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseapp);
