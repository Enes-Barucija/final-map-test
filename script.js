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
