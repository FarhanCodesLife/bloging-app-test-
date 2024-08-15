import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";





const firebaseConfig = {
  apiKey: "AIzaSyC_9apK83zu1X6dhVsKozMjPrJj8_6YmGE",
  authDomain: "bloging-app-by-farhan.firebaseapp.com",
  projectId: "bloging-app-by-farhan",
  storageBucket: "bloging-app-by-farhan.appspot.com",
  messagingSenderId: "615288019917",
  appId: "1:615288019917:web:7dd9da3f4ea875ca170284",
  measurementId: "G-LCKVD9RTM9"
};




const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
  