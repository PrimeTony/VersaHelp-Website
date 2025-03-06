// Import necessary Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

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

// Function to submit the form data to Firestore
export async function submitBooking() {
    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const notes = document.getElementById('notes').value;

    if (!name || !service || !date) {
        alert('Please fill in all required fields.');
        return;
    }

    try {
        await addDoc(collection(db, 'gardeningBookings'), {
            name: name,
            service: service,
            date: date,
            notes: notes,
            timestamp: new Date()
        });
        alert('Booking successfully submitted!');
        document.getElementById('gardeningForm').reset();
    } catch (error) {
        console.error('Error submitting booking:', error);
        alert('Failed to submit booking.');
    }
}
