
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
