import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAr9fLQrVgKbK3cnGIP2ezBU9WOSPOgF1s",
  authDomain: "work-mate-e9348.firebaseapp.com",
  projectId: "work-mate-e9348",
  storageBucket: "work-mate-e9348.firebasestorage.app",
  messagingSenderId: "400161828755",
  appId: "1:400161828755:web:7ad4c2cea925483bd98266",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
