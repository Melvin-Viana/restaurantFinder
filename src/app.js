const { getLocationData, initMap } = require('./helpers');

// IIFE Invoke func on load
(async () => {
  try {
    const { lat, lng } = await getLocationData();
    // Add map
    const map = initMap(lat, lng);
    console.log(map);
  } catch (err) {
    console.error(err);
  }
})();
