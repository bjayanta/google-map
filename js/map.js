$(document).ready(function() {
    // console.log(1);

    // map programm
    var map, marker, infoWindow;

    function InitializeMap(lat, lan, address) {
        var location = new google.maps.LatLng(lat, lan);
        var options = {
            zoom: 15,
            center: location,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true
        };

        map = new google.maps.Map(document.querySelector(".map-content"), options);

        // Add a marker
        marker = new google.maps.Marker({
            position: location,
            map: map
        });

        infoWindow = new google.maps.InfoWindow({
            content: address
        });

        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
    }

    // set the click event
    $('.map-nav').on('click', 'a', function() {
        var lat = $(this).data('lat'),
            lan = $(this).data('lan'),
            adr = $(this).data('address');

        InitializeMap(lat, lan, adr);
    });

    // set default parameters
    var defaultLat = $('.map-content').data('lat'),
        defaultLan = $('.map-content').data('lan'),
        defaultAdr = $('.map-content').data('address');

    window.onload = InitializeMap(defaultLat, defaultLan, defaultAdr);

});
