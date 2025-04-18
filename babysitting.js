// Multi-step form functionality
document.querySelectorAll('.next-btn').forEach(button => {
    button.addEventListener('click', () => {
        const currentStep = button.closest('.form-step');
        const nextStep = currentStep.nextElementSibling;

        currentStep.classList.remove('active');
        nextStep.classList.add('active');
    });
});

document.getElementById('bookingForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert("Booking Confirmed!");
});

// Scroll animations for caregiver profiles
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fadeInUp');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});

// Search functionality for caregiver profiles
document.getElementById('searchProfiles').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const profiles = document.querySelectorAll('.profile-card');

    profiles.forEach(profile => {
        const name = profile.querySelector('h3').textContent.toLowerCase();
        if (name.includes(query)) {
            profile.style.display = 'block';
        } else {
            profile.style.display = 'none';
        }
    });
});


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