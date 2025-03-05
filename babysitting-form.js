// Import Firebase SDK (You need to include this file in your HTML as a module)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// Your Firebase configuration
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

// Function to handle form submission
async function submitBookingForm(event) {
    event.preventDefault(); // Prevent page reload

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const details = document.getElementById('details').value;
    const babysitter = document.getElementById('babysitter').value;

    // Save data to Firestore
    try {
        const docRef = await addDoc(collection(db, "babysittingBookings"), {
            name: name,
            email: email,
            date: date,
            time: time,
            details: details,
            babysitter: babysitter,
            timestamp: new Date().toISOString()
        });

        alert("Booking successfully submitted!");
        document.querySelector('form').reset();
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("There was an error submitting your booking. Please try again.");
    }
}

// Attach form event listener once page loads
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', submitBookingForm);
    }
});
