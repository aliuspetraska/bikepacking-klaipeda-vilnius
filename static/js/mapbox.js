var FeatureCollection = [];

FeatureCollection.push({
    type: 'Feature',
    geometry: {
        type: 'LineString',
        coordinates: mtb1,
    }
});

for (var i = 0; i < lietuvon.length; i++) {
    FeatureCollection.push({
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [lietuvon[i]['lon'], lietuvon[i]['lat']],
        },
        properties: {
            title: lietuvon[i]['name'],
            description: lietuvon[i]['description']
        }
    });
}


mapboxgl.accessToken = 'pk.eyJ1IjoiYWxpdXNwZXRyYXNrYSIsImEiOiJjajlxd3pmbjg2OGR6MnFxdDk5M205dmI1In0.6zIodwQbHVLbPfbhBEdRhg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [23.054192, 55.221502],
    zoom: 9,
});

map.on('load', function() {
    map.addSource('lietuvon', {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: FeatureCollection,
        }
    });

    map.addLayer({
        id: 'waypoints',
        type: 'circle',
        source: 'lietuvon',
        paint: {
            'circle-radius': 6,
            'circle-color': '#0000FF'
        },
        filter: ['==', '$type', 'Point'],
    });

    map.addLayer({
        id: 'track',
        type: 'line',
        source: 'lietuvon',
        layout: {
            'line-join': 'round',
            'line-cap': 'round'
        },
        paint: {
            'line-color': '#FF0000',
            'line-width': 5
        },
        filter: ['==', '$type', 'LineString'],
    });

    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'waypoints', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var title = e.features[0].properties.title;

        var description = e.features[0].properties.description;
        var content = description.replace(/<img[^>]*>/g, '');

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML('<h5>'+ title +'</h5>' + content)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'waypoints', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'waypoints', function () {
        map.getCanvas().style.cursor = '';
    });
});
