import React, { useEffect, useState } from 'react';
import { getLocationData, initMap, getNearbyEateries, createMarkers }  from '../helpers';

// IIFE Invoke func on load


interface Props {
  googleApiKey: string;
}

export const App: React.FC <Props> = ({googleApiKey}) => {
  var script = document.createElement('script'),
  scripts = document.getElementsByTagName('script')[0];
  script.src = 'https://maps.googleapis.com/maps/api/js?key='+googleApiKey;
  scripts.parentNode.insertBefore(script, scripts);

  useEffect(() => {
    (async () => {
      try {
        const { lat, lng } = await getLocationData();
        // Add map
        const map = initMap(lat, lng);
        const localBusinesses = await getNearbyEateries(lat, lng);
        createMarkers(localBusinesses, map);
      } catch (err) {
        console.error(err);
      }
    })();
  },[])

  return (
    <React.Fragment>
      <div id="map"></div>
    </React.Fragment>
  );
};
