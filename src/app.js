const axios = require('axios');
const { YELP_API_KEY, GEO_API_KEY } = require('../config');

let map;
const initMap = (lat, lng) => {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat, lng },
    zoom: 8
  });
};

// IIFE Invoke func on load
(async () => {
  try {

    console.log(yelpData);

    const {
      data: {
        location: { lat, lng }
      }
    } = await axios.get(
      `https://geo.ipify.org/api/v1?apiKey=at_${GEO_API_KEY}`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const yelpData = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=food&latitude=${lat}&longitude=${lng}`,
      {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(lat, lng);
    // Add map
    initMap(lat, lng);
  } catch (err) {
    console.error(err);
  }
})();
