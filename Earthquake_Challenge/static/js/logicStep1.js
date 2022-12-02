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
    "Satellite Streets": satelliteStreets
  };



//Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


//Grabbing our GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
//console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
      color: "#ffffa1",
      weight: 2,
      onEachFeature: function(feature, layer) {
        layer.bindPopup("<h3> Magnitude: " + feature.properties.mag + "</h3> <hr><h3> Location: " + feature.properties.place + "</h3><hr><p> Time: " + new Date(feature.properties.time) + "</p>");
      }
  })
  .addTo(map);
});

      
  


// Use forEach to loop through the cities array and create one marker for each city object
// cities.forEach(store =>   L.marker(city.location) 
//for (var i = 0; i < cities.length; i++) {
//  L.circle(cities[i].location, {
//    fillOpacity: 0.75,
//    color: "white",
//    fillColor: "purple",
//    // Setting our circle's radius equal to the output of our markerSize function
//    // This will make our marker's size proportionate to its population
//    radius: markerSize(cities[i].population)
//  }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Population: " + cities[i].population + "</h3>").addTo(myMap);
//}</hr>


// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
 //pointToLayer: function(feature, latlng) {
   // console.log(feature);
   // return L.marker(latlng)
    //.bindPopup("<h2>" + feature.properties.city + "</h2>");
  //}
//
//}).addTo(map);

// Function to determine marker size based on population
//function markerSize(population) {
//  return population / 40;
//}

//var cityMarkers = [];
//var stateMarkers = [];

// Loop through locations and create city and state markers
//for (var i = 0; i < locations.length; i++) {
//  // Setting the marker radius for the state by passing population into the markerSize function
//  stateMarkers.push(
//    L.circle(locations[i].coordinates, {
//      stroke: false,
//      fillOpacity: 0.75,
//      color: "white",
//      fillColor: "white",
//      radius: markerSize(locations[i].state.population)
//    })
//  );

//  // Setting the marker radius for the city by passing population into the markerSize function
//  cityMarkers.push(
//    L.circle(locations[i].coordinates, {
//      stroke: false,
//      fillOpacity: 0.75,
//      color: "#green",
//      fillColor: "green",
//      radius: markerSize(locations[i].city.population)
//    })
//  );
//}
