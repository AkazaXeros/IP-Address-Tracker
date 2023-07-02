import { apiKey } from './data.js';

const requestedIP = '127.0.0.1'; // Example IP

let fetchRequest = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${requestedIP}`;
