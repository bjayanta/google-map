$(document).ready(function() {
    // console.log(1);

    // map programm
    var map, marker, infoWindow;

    function InitializeMap(lat, lan, type, address) {
        var location = new google.maps.LatLng(lat, lan);
        var options = {
            zoom: 10,
            center: location,
            mapTypeId: type, // google.maps.MapTypeId.ROADMAP
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
            typ = $('.map-content').data('type'),
            adr = $(this).data('address');

        InitializeMap(lat, lan, typ, adr);
    });

    // set default parameters
    var defaultLat = $('.map-content').data('lat'),
        defaultLan = $('.map-content').data('lan'),
        defaultTyp = $('.map-content').data('type'),
        defaultAdr = $('.map-content').data('address');

    window.onload = InitializeMap(defaultLat, defaultLan, defaultTyp, defaultAdr);

});
