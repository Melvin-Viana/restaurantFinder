import 'babel-polyfill';

const axios = require('axios');
const { YELP_API_KEY, GEO_API_KEY } = require('../../config');

module.exports = {
  getLocationData: async () => {
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
    return { lat, lng };
  }
};
