'use strict';

import { apiKey } from './data.js';
import { getData } from './assets.js';

const requestedIP = '192.168.1.178'; // Example IP

let urlIP = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;

// DOM elements
const accordionElement = document.querySelector('.accordionBubble');

// DOM elements from leafletjs source
const map = L.map('map').setView([51.505, -0.09], 13);
const marker = L.marker([40.4165, -3.70256], { alt: 'marker' }).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Event Listeners

accordionElement.addEventListener('click', () => {
  event.stopPropagation();
  accordionElement.classList.toggle('is-opened');
});

const start = async () => {
  try {
    const data = await getData(urlIP);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

// start();
