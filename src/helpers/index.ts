require('regenerator-runtime/runtime');
import axios from 'axios';
import { GEO_API_KEY } from '../../config';

export const getLocationData = async () => {
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

export const initMap = (lat: number , lng: number) => {
  return new google.maps.Map(document.getElementById('map'), {
    center: { lat, lng },
    zoom: 8
  });
};
