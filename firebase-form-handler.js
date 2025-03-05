// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDC1UP21noNJOOTxDuYQLuNx755CyPn7pA",
    authDomain: "versahelp2025.firebaseapp.com",
    projectId: "versahelp2025",
    storageBucket: "versahelp2025.appspot.com",
    messagingSenderId: "484581458623",
    appId: "1:484581458623:web:c7e1599bc5d3c56812fc0a",
    measurementId: "G-74W3DKSSCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form submit event listener
document.getElementById('requestQuoteForm').addEventListener('submit', async function (e) {
    e.preventDefault();  // Prevent page refresh

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const details = document.getElementById('details').value;

    try {
        // Store data in Firestore collection
        await addDoc(collection(db, "serviceFeedback"), {
            fullName: name,
            emailAddress: email,
            service: service,
            additionalDetails: details,
            timestamp: new Date()
        });

        alert('Thank you for your feedback!');
        document.getElementById('requestQuoteForm').reset();
    } catch (error) {
        console.error('Error saving feedback:', error);
        alert('Failed to submit feedback. Please try again later.');
    }
});
