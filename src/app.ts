import { getLocationData, initMap }  from './helpers';

// IIFE Invoke func on load
(async () => {
  try {
    const { lat, lng } = await getLocationData();
    // Add map
    const map = initMap(lat, lng);
  } catch (err) {
    console.error(err);
  }
})();
