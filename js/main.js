"use strict";

import { apiKey } from "./data.js";
import { getData } from "./assets.js";

// let requestedIP; // Example IP

let urlIP = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;

// DOM elements
const accordionElement = document.querySelector(".accordionBubble");
const searchInputElement = document.querySelector("#searchInput");
const btnInputElement = document.querySelector("#searchBtn");
const ipElement = document.querySelector(".ip");
const locationElement = document.querySelector(".location");
const timezoneElement = document.querySelector(".timezone");

// Variables for leafletjs map
let ipUser;
let lat = 42.23282; // Default latitude
let long = -8.72264; // Default longitude

// DOM elements from leafletjs source
let map = L.map("map").setView([lat, long], 13); // setView(lat,long)
let marker = L.marker([lat, long], { alt: "marker" }).addTo(map);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Event Listeners

accordionElement.addEventListener("click", () => {
	event.stopPropagation();
	accordionElement.classList.toggle("is-opened");
});

const start = async () => {
	try {
		const data = await getData(urlIP);
		ipUser = data.ip;
		// console.log(data);
		lat = data.location.lat;
		// console.log(lat);
		long = data.location.lng;
		// console.log(long);
		map.flyTo([lat, long], 13); // changing the view to the lat and long from the IP

		// marker = L.marker([lat, long], { alt: "marker" }).close(map);
		marker = L.marker([lat, long], { alt: "marker" }).addTo(map); // changing the marker
		ipElement.textContent = ipUser;
		locationElement.textContent = `${data.location.city}, ${data.location.region}, ${data.location.country} ${data.location.postalCode}`;
		timezoneElement.textContent = `UTC ${data.location.timezone}`;
	} catch (error) {
		console.error(error);
	}
};

start();

// Create event for button
// Get the info in the input field
btnInputElement.addEventListener("click", (e) => {
	try {
		e.preventDefault();
		urlIP += `&ipAddress=${searchInputElement.value}`;
		start();
		console.log(urlIP);
	} catch (error) {
		console.log(error);
	}
});
