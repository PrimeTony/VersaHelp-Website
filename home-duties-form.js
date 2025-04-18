import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDC1UP21noNJOOTxDuYQLuNx755CyPn7pA",
  authDomain: "versahelp2025.firebaseapp.com",
  projectId: "versahelp2025",
  storageBucket: "versahelp2025.appspot.com",
  messagingSenderId: "484581458623",
  appId: "1:484581458623:web:c7e1599bc5d3c56812fc0a",
  measurementId: "G-74W3DKSSCX"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Show form on load (or call this from a nav if needed)
showForm("home-duties");

function showForm(serviceType) {
  const formContainer = document.getElementById('form-content');
  formContainer.innerHTML = `
    <form id="homeDutiesForm">
      <h2>Book ${serviceType.replace('-', ' ')}</h2>

      <label for="name">Full Name</label>
      <input type="text" id="name" required placeholder="John Doe">

      <label for="email">Email Address</label>
      <input type="email" id="email" required placeholder="john@example.com">

      <label for="date">Booking Date</label>
      <input type="date" id="date" required>

      <label for="time">Preferred Time</label>
      <input type="time" id="time" required>

      <label for="details">Additional Details</label>
      <textarea id="details" rows="4" placeholder="Describe your request..."></textarea>

      <input type="hidden" id="serviceType" value="${serviceType}">
      <button type="submit"><i class="fas fa-calendar-check"></i> Book Service</button>
    </form>
  `;

  document.getElementById('homeDutiesForm').addEventListener('submit', submitHomeDutiesForm);
}

async function submitHomeDutiesForm(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const details = document.getElementById('details').value.trim();
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
    document.getElementById('form-content').innerHTML = `<p>Thank you for booking <strong>${serviceType.replace('-', ' ')}</strong>!</p>`;
  } catch (err) {
    console.error("Booking error:", err);
    alert("Error submitting booking. Please try again.");
  }
}

// Optional: expose globally if used with nav clicks
window.showForm = showForm;

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