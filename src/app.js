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
          Authorization: `Bearer HHSt-XwlL1oDAhDMxVgFoZRutXcelL20hLoVfUaxh9Xua7rpg8nsUbzZHDVuTaGI8YG9IpKr1lSl9FPFZvM-Ac-Z4rajvEzyQf_cU8RefBmm0BoRDwGs2o2FHerrXnYx`,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(yelpData);

    const {
      data: {
        location: { lat, lng }
      }
    } = await axios.get(
      'https://geo.ipify.org/api/v1?apiKey=at_j72HRdDtYTOcojOLd6p1j1vK1KDUn',
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
