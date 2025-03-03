// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
const db = getFirestore(app);

import { doc, setDoc } from 'firebase/firestore';

const updateHomePage = async () => {
  try {
    await setDoc(doc(db, "users", "0vfITg1aU5J6KxXzuOgN"), {
      fullName: "Your Full Name",
      emailAddress: "youremail@example.com",
      additionalDetails: ""
    });
    console.log("Home Page document updated successfully!");
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

// Call updateHomePage to update the document
updateHomePage();

  


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC1UP21noNJOOTxDuYQLuNx755CyPn7pA",
  authDomain: "versahelp2025.firebaseapp.com",
  projectId: "versahelp2025",
  storageBucket: "versahelp2025.firebasestorage.app",
  messagingSenderId: "484581458623",
  appId: "1:484581458623:web:c7e1599bc5d3c56812fc0a",
  measurementId: "G-74W3DKSSCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);