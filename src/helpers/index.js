require('regenerator-runtime/runtime');
const axios = require('axios');
const { GEO_API_KEY } = require('../../config');

/**
 * @description Get longitude and latitude w/ IP addres from ipify API
 * @returns {obj} - Latitude and longitude in an object
 */
const getLocationData = async () => {
  const {
    data: {
      location: { lat, lng }
    }
  } = await axios.get(`https://geo.ipify.org/api/v1?apiKey=at_${GEO_API_KEY}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return { lat, lng };
};

/**
 * Create a new google map
 * @param {number} lat - latitude
 * @param {number} lng - longitude
 * @returns
 */
const initMap = (lat, lng) => {
  return new google.maps.Map(document.getElementById('map'), {
    center: { lat, lng },
    zoom: 8
  });
};

module.exports = {
  getLocationData,
  initMap
};
