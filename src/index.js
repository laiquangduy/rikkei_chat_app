// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { setActiveScreen } from "./view/index";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxduaJ0-zPed7mcNTGiXPYcN349p9tfnw",
  authDomain: "chat-project-1-ba4b2.firebaseapp.com",
  projectId: "chat-project-1-ba4b2",
  storageBucket: "chat-project-1-ba4b2.appspot.com",
  messagingSenderId: "738823993003",
  appId: "1:738823993003:web:a36261d63f199884ba69ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// setActiveScreen("chatPage");
// setActiveScreen("registerPage");
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
setActiveScreen("loginPage");
