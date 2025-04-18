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

document.addEventListener('DOMContentLoaded', function () {
    const logo = document.querySelector('.logo-container');
    const nav = document.querySelector('.navigation');
    const footer = document.querySelector('.footer');
    let lastScrollTop = 0;

    // Smooth anchor scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Scroll-based fading and footer visibility
    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;

        if (currentScroll > lastScrollTop) {
            // Scrolling down - fade
            logo.style.opacity = '0.4';
            nav.style.opacity = '0.4';
        } else {
            // Scrolling up - slightly visible
            logo.style.opacity = '0.8';
            nav.style.opacity = '0.8';
        }

        // Show footer only when scrolled to the bottom
        if (currentScroll + winHeight >= docHeight - 10) {
            footer.style.display = 'block';
        } else {
            footer.style.display = 'none';
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    // Track clicks on service images
    document.querySelectorAll('.image-container a').forEach(link => {
        link.addEventListener('click', (event) => {
            const serviceName = event.target.alt || 'Unknown Service';
            console.log(`${serviceName} page was clicked!`);
        });
    });
});
