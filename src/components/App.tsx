import React, { useEffect, useState } from 'react';
import { getLocationData, initMap, getNearbyEateries, createMarkers, createGoogleScript }  from '../helpers';

interface Props {
  googleApiKey: string;
}

export const App: React.FC <Props> = ({googleApiKey}) => {

  createGoogleScript(googleApiKey, document);

  useEffect(() => {

    // IIFE Invoke func on load
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
