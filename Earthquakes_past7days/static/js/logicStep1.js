//<!--
//add some boilerplate code to the logic.js file. Most of this code can be reused for many of the maps we'll create later on in this module.
//-->
// Add console.log to check to see if our code is working.

//The onEachFeature Function
//Map Multiple GeoJSON Points
//Add Multiple Maps
//Map GeoJSON Polygons
//Add Earthquake Data to a Map

console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets
  };

//Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


//Accessing the airport GeoJSON URL
//let torontoHoods = "https://raw.githubusercontent.com/fareenamughal/Mapping_Earthquakes/Earthquakes_past7days/Earthquakes_past7days/static/Data/torontoNeighborhoods.json";

//Grabbing our GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
//console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});





// Creating a GeoJSON layer with the retrieved data.
//  L.geoJSON(data, {
//    weight: 1,
//    fillColor: "yellow",
//    onEachFeature: function(feature, layer) {
//      layer.bindPopup("<h3> Neighbourhood: " + feature.properties.AREA_NAME + "</h3>");
//    }
//    })
//  .addTo(map);
//});
  

