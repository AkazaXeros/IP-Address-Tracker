'use strict';

import { apiKey } from './data.js';
import { getData } from './assets.js';

const requestedIP = '127.0.0.1'; // Example IP

let urlIP = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${requestedIP}`;

// DOM elements

const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
