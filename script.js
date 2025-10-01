console.log(data)

let map;
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
        center: { lat: 22.279909, lng: 114.10 },
        zoom: 11,
        mapId: '4504f8b37365c3d0'
    });

    data.forEach(function(d){
        
        d.lat = +d.Location.split(", ")[0].trim()
        d.lng = +d.Location.split(", ")[1].trim()

        let contentString = '<div id="bodyContent"><p><b>' + d.Lyrics + '</b></p><p>' + d['Song Name'] + '(' + d['Release Year'] + ')</p><p>Artist: ' + d.Performer + '</p><p>Lyricist: ' + d.Lyricist + '</p></div>'; 
        console.log(contentString)
        let marker = new AdvancedMarkerElement({
            map,
            position: { lat: +d.lat, lng: +d.lng },
            title: contentString
        });

        google.maps.event.addListener(marker , 'click', function(){
            var infowindow = new google.maps.InfoWindow({
                content: contentString,
                position: {lat: d.lat, lng: d.lng},
            });
            infowindow.open(map);
        });

    })

    

}
initMap();