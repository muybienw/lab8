function initMap() {
    // Create center marker at UCSD
    var ucsd_ltlng = {lat:32.8849941, lng:-117.2413618};

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: ucsd_ltlng,
        zoom: 18
    });

    var marker = new google.maps.Marker({
        position: ucsd_ltlng,
        map: map,
        title: 'UCSD'
    });

    map.addListener('click', function(event){
        console.log(event.latLng);
        console.log("a click at google map!");

        var new_marker = new google.maps.Marker({
            position: event.latLng,
            map: map,
            title: 'Click'
        });
    });
}