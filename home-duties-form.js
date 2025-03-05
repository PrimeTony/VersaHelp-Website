// Import Firebase SDK (Make sure your HTML includes this as a module)
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

// Function to dynamically show a form based on service type
function showForm(serviceType) {
    const formContainer = document.getElementById('form-content');
    formContainer.innerHTML = `
        <h2>Book ${serviceType.replace('-', ' ')}</h2>
        <form id="homeDutiesForm">
            <label for="name">Your Name:</label>
            <input type="text" id="name" required>
            
            <label for="email">Your Email:</label>
            <input type="email" id="email" required>
            
            <label for="date">Date:</label>
            <input type="date" id="date" required>
            
            <label for="time">Preferred Time:</label>
            <input type="time" id="time" required>
            
            <label for="details">Details:</label>
            <textarea id="details" rows="4"></textarea>

            <input type="hidden" id="serviceType" value="${serviceType}">

            <button type="submit">Book Service</button>
        </form>
    `;

    // Attach form submit handler
    document.getElementById('homeDutiesForm').addEventListener('submit', submitHomeDutiesForm);
}

// Function to handle form submission and save to Firestore
async function submitHomeDutiesForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const details = document.getElementById('details').value;
    const serviceType = document.getElementById('serviceType').value;

    try {
        await addDoc(collection(db, "homeDutiesBookings"), {
            name,
            email,
            date,
            time,
            details,
            serviceType,
            timestamp: new Date().toISOString()
        });

        alert("Booking successfully submitted!");
        document.getElementById('homeDutiesForm').reset();
        document.getElementById('form-content').innerHTML = `<p>Thank you for booking ${serviceType.replace('-', ' ')}!</p>`;
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("There was an error submitting your booking. Please try again.");
    }
}

// Expose showForm to global window so it works with your nav links
window.showForm = showForm;
