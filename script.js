"use strict";

const map = L.map("map", { attributionControl: false }).setView(
  [38.2906, -0.00388395],
  6
);
L.control.attribution({ prefix: false }).addTo(map);
const tilesource_layer = L.tileLayer(
  "https://enes-barucija.github.io/dndTestMap/map/{z}/{x}/{y}.png",
  {
    minZoom: 5,
    maxZoom: 9,
    tms: false,
    attribution: "Created by QGIS",
  }
).addTo(map);

function updateCoordinates(e) {
  const lat = e.latlng.lat.toFixed(4); // Limit to 4 decimal places
  const lng = e.latlng.lng.toFixed(4);
  document.getElementById("coordinates").innerHTML =
    "Coordinates: " + lat + ", " + lng;
}

// Add a mousemove event listener to the map
map.on("mousemove", updateCoordinates);

// Define the bounds (replace with your actual coordinates)
const bounds = L.latLngBounds(
  L.latLng(24.8816, -26.0), // Southwest corner
  L.latLng(51.6564, 26.0) // Northeast corner
);

// Set the max bounds
map.setMaxBounds(bounds);
