function initMap() {
    var location = { lat: 33.868939, lng: -118.081878 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// async defer src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyADj-4KNQayogFWS47oBdBi6Ym_lxRRtbs&callback=initMap"