// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds for a slower transition
}

function plusSlides(n) {
    showSlidesManual(slideIndex += n);
}

function showSlidesManual(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

// Form Validation and Dynamic Quotes
function submitForm() {
    const pickupAddress = document.getElementById('pickup-address').value;
    const dropoffAddress = document.getElementById('dropoff-address').value;
    const vehicleOptions = Array.from(document.querySelectorAll('input[name="vehicle-options"]:checked')).map(checkbox => checkbox.value);
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobile-number').value;
    const details = document.getElementById('details').value;
    const collectionDate = document.getElementById('collection-date').value;
    const time = document.getElementById('time').value;

    if (pickupAddress && dropoffAddress && vehicleOptions.length > 0 && email && mobileNumber && details && collectionDate && time) {
        document.getElementById('quote-message').innerText = `Quotation request received for: ${vehicleOptions.join(', ')}. We will contact you shortly!`;
        document.getElementById('quote-message').style.display = 'block';
    } else {
        alert('Please fill in all required fields.');
    }
}
