//<!--
//add some boilerplate code to the logic.js file. Most of this code can be reused for many of the maps we'll create later on in this module.
//-->
// Add console.log to check to see if our code is working.

<<<<<<< HEAD
=======
//Map GeoJSON Point Type
>>>>>>> Mapping_GeoJSON_Points
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

<<<<<<< HEAD

// Add GeoJSON data.

=======
// Add GeoJSON data.
>>>>>>> Mapping_GeoJSON_Points
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"14",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
<<<<<<< HEAD
L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(feature);
    return L.marker(latlng)
    .bindPopup("<h2>" + feature.properties.city + "</h2>");
  }

}).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
=======
L.geoJSON(sanFranAirport).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
>>>>>>> Mapping_GeoJSON_Points
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
<<<<<<< HEAD
streets.addTo(map);     

//he pointToLayer callback function adds markers to a map, whereas the onEachFeature callback function allows you to add styling and bind data to a popup marker.
//L.geoJson(data, {
//  pointToLayer: function(feature, latlng) {
//    return L.marker(latlng);
//   }
//});

//L.geoJson(sanFranAirport, {
//  onEachFeature: function(feature, latlng) {
//    return L.marker(latlng);
//   }
//});     

=======
streets.addTo(map);  
>>>>>>> Mapping_GeoJSON_Points

