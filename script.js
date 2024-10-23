"use strict";

const centerCoords = [38.2906, -0.00388395];
// const myIcon = L.icon({
//   iconUrl: "img/signpostNew.png",
//   iconSize: [100, 100],
//   iconAnchor: [22, 94],
//   popupAnchor: [-3, -76],
// });

const map = L.map("map", { attributionControl: false }).setView(
  centerCoords,
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
    updateWhenIdle: true, // Prevents aggressive tile fetching
    keepBuffer: 2, // Keeps tiles within 2 zoom levels in memory for smooth panning
  }
).addTo(map);

// Define the bounds (replace with your actual coordinates)
const bounds = L.latLngBounds(
  L.latLng(24.8816, -26.0), // Southwest corner
  L.latLng(51.6564, 26.0) // Northeast corner
);

const popup = L.popup();

const marker = L.marker();
// Functions //

const updateCoordinates = function (e) {
  const lat = e.latlng.lat.toFixed(4); // Limit to 4 decimal places
  const lng = e.latlng.lng.toFixed(4);
  document.getElementById(
    "coordinates"
  ).innerHTML = `Coordinates: ${lat}, ${lng}`;
};

map.on("click", function (mapEvent) {
  const { lat, lng } = mapEvent.latlng;
  // L.marker([lat, lng], { icon: myIcon })
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        maxHeight: 250,
        autoClose: false,
        className: "popup",
      }).setContent("")
    )
    .openPopup();
});

// Function calls //

// Add a mousemove event listener to the map
map.on("mousemove", updateCoordinates);

// Set the max bounds
map.setMaxBounds(bounds);
