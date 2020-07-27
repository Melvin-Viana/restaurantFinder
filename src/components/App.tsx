import React, { useEffect, useState } from 'react';
import { getLocationData, initMap, getNearbyEateries, createMarkers }  from '../helpers';
import {RestaurantList} from './RestaurantList';
interface Props {
  googleApiKey: string;
}

export const App: React.FC <Props> = () => {


  const [restaurauntList, setRestaurantList] = useState([]);
  let delay = ms => new Promise(r => setTimeout(r, ms));

  useEffect(() => {

    // Fetch data
    const fetchData = async (queryData: string) => {
      try {
        //TODO: If queryData is not empty
        const { lat, lng } = await getLocationData();
        // Add map
        const map = initMap(lat, lng);
        const localBusinesses = await getNearbyEateries(lat, lng);
        const vals = await createMarkers(localBusinesses, map);
        delay(4100).then(()=>setRestaurantList(localBusinesses))
      } catch (err) {
        console.error(err);
      }
    };
    // Fetch Data
    fetchData('');
  },[])

  return (
    <React.Fragment>
      <div id="map"></div>
      <RestaurantList businesses={restaurauntList}/>
    </React.Fragment>
  );
};
