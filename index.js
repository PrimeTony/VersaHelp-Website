
function initMap() {
    const westviewSecurityEstate = { lat: -25.747, lng: 28.229 }; // Replace with the correct coordinates

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: westviewSecurityEstate,
    });

    new google.maps.Marker({
        position: westviewSecurityEstate,
        map: map,
    });
}

//logo code

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll detection for logo visibility
    let lastScrollTop = 0;
    const logo = document.querySelector('.logo-container');

    window.addEventListener('scroll', function() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop) {
            // Scrolling down
            logo.style.opacity = '0';
            logo.style.transition = 'opacity 0.3s';
        } else {
            // Scrolling up
            logo.style.opacity = '1';
            logo.style.transition = 'opacity 0.3s';
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For mobile or negative scrolling
    });
});

function initMap() {
    const westviewSecurityEstate = { lat: -25.747, lng: 28.229 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: westviewSecurityEstate,
    });

    new google.maps.Marker({
        position: westviewSecurityEstate,
        map: map,
    });
}
