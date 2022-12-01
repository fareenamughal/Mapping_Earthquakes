//<!--
//add some boilerplate code to the logic.js file. Most of this code can be reused for many of the maps we'll create later on in this module.
//-->
// Add console.log to check to see if our code is working.

//The onEachFeature Function
//Map Multiple GeoJSON Points

console.log("working");

// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);               

//Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/fareenamughal/Mapping_Earthquakes/Mapping_GeoJSON_Points/Mapping_GeoJSON_Points/static/data/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);  
  L.geoJson(data, {
    onEachFeature: function(features, layer){
      layer.bindPopup("<h2>Airport code: "  + features.properties.faa + "</h2> <hr> <h2>Airport name: " + features.properties.name + "</h2>")
    }
  }).addTo(map);
});
