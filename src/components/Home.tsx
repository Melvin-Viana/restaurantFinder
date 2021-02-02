import React, { useEffect, useState } from 'react';
import LoadingOverlay from 'react-loading-overlay';
import {ThreeDots} from '@agney/react-loading'
import { getLocationData, initMap, getNearbyEateries, createMarkers }  from '../helpers';
import {RestaurantList} from './RestaurantList';


export const Home: React.FC = () => {
  interface Marker {
    marker: object,
    infowindow: object
  }
  
  const anyType : any[] = [] 
  const [restaurauntList, setRestaurantList] = useState(anyType);
  const [markerArray, setMarkers] = useState(anyType)
  const [mapObject, setMap] = useState({});
  const [selectedIndex, setIndex] = useState(-1);
  const [mapIsLoading, setLoading] = useState(true);

  const displayInfo = (index: number, map: Object) => {
    if(selectedIndex !== -1) {
      const {infowindow} = markerArray[selectedIndex];
      infowindow.close();
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
        console.log(map)
        // Get restaurant list
        const localBusinesses = await getNearbyEateries(lat, lng);
        // Get marker objects
        const markers = await createMarkers(localBusinesses, map);
        setMap(map);
        setMarkers(markers);
        setLoading(false);
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
      <LoadingOverlay
        active={mapIsLoading}
        spinner={<ThreeDots width="100" />}
      >      
        <div id="map" className={'Map'}></div>
      </LoadingOverlay>
      <RestaurantList  businesses={restaurauntList} restaruantClickHandler={(index)=>displayInfo(index,mapObject)}/>
    </React.Fragment>
  );
};
