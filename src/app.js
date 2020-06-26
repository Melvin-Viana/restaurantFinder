const axios = require('axios');

const initMap = (lat, lng) => {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat, lng },
    zoom: 8
  });
};


// IIFE Invoke func on load
(async () => {
  try {
    const yelpData = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=food&latitude=33.8065&longitude=-118.191&',
      {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      }
    );

    const {
      data: {
        location: { lat, lng }
      }
    } = await axios.get(
      `https://geo.ipify.org/api/v1?apiKey=${GEO_API_KEY}`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    // Add map
    initMap(lat, lng);
  } catch (err) {
    console.error(err);
  }
})();
