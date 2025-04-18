// Firebase Import
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// Firebase Config
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

// Submit Form to Firestore
async function submitForm() {
    const pickupAddress = document.getElementById('pickup-address').value;
    const dropoffAddress = document.getElementById('dropoff-address').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobile-number').value;
    const details = document.getElementById('details').value;
    const collectionDate = document.getElementById('collection-date').value;
    const time = document.getElementById('time').value;

    const vehicleOptions = [];
    if (document.getElementById('trailer').checked) vehicleOptions.push('Trailer');
    if (document.getElementById('canopy').checked) vehicleOptions.push('Canopy');

    const bookingData = {
        pickupAddress,
        dropoffAddress,
        email,
        mobileNumber,
        details,
        collectionDate,
        time,
        vehicleOptions,
        timestamp: new Date().toISOString()
    };

    try {
        await addDoc(collection(db, "transportationBookings"), bookingData);
        document.getElementById('quote-message').innerText = "Booking successfully submitted! We'll contact you soon.";
        document.getElementById('quote-message').style.display = 'block';
        clearForm();
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Error submitting booking. Please try again.");
    }
}

// Clear Form Fields
function clearForm() {
    document.getElementById('pickup-address').value = '';
    document.getElementById('dropoff-address').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mobile-number').value = '';
    document.getElementById('details').value = '';
    document.getElementById('collection-date').value = '';
    document.getElementById('time').value = '';
    document.getElementById('trailer').checked = false;
    document.getElementById('canopy').checked = false;
}

window.submitForm = submitForm;


// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change slide every 4 seconds
}


// footer scroll function
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector('.footer-section');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        if (scrollY >= docHeight - 150) {
            footer.classList.add('show');
        } else {
            footer.classList.remove('show');
        }
    });
});




