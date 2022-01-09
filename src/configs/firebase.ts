import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDbNw4maw6xbxCoJb0tmroOLWkDeJoEVlE",
  authDomain: "fakmanage.firebaseapp.com",
  projectId: "fakmanage",
  storageBucket: "fakmanage.appspot.com",
  messagingSenderId: "354672172189",
  appId: "1:354672172189:web:b89ea9f57d9410e7ea0874",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
