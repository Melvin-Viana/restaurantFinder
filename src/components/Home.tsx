import React, { useEffect, useState } from 'react';
import { getLocationData, initMap, getNearbyEateries, createMarkers }  from '../helpers';
import {RestaurantList} from './RestaurantList';


export const Home: React.FC = () => {


  const [restaurauntList, setRestaurantList] = useState([]);
  const [markerArray, setMarkers] = useState([]);
  const [mapObject, setMap] = useState(null);
  const [selectedIndex, setIndex] = useState(-1);

  const displayInfo = (index: number, map: Object) => {
    if(selectedIndex !== -1) {
      markerArray[selectedIndex].infowindow.close();
    }
    const {marker, infowindow} = markerArray[index];
    infowindow.open(map, marker);
    setIndex(index);
  };

  useEffect(() => {

    // Fetch data
    const fetchData = async (queryData: string) => {
      try {
        //TODO: If queryData is not empty
        const { lat, lng } = await getLocationData();
        // Get google map object
        const map = initMap(lat, lng);
        setMap(map);
        // Get restaurant list
        const localBusinesses = await getNearbyEateries(lat, lng);
        // Get marker objects
        const markers = await createMarkers(localBusinesses, map);
        setMarkers(markers);
        setRestaurantList(localBusinesses);
      } catch (err) {
        console.error(err);
      }
    };
    // Fetch Data
    fetchData('');
  },[])

  return (
    <React.Fragment>
      <div id="map" className={'Map'}></div>
      <RestaurantList  businesses={restaurauntList} restaruantClickHandler={(index)=>displayInfo(index,mapObject)}/>
    </React.Fragment>
  );
};
