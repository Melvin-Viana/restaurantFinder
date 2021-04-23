import React, { useEffect, useState } from 'react';
// @ts-ignore
import LoadingOverlay from 'react-loading-overlay'; 
// @ts-ignore
import Cookies from 'js-cookie';
import {ThreeDots} from '@agney/react-loading'
import { getLocationData, initMap, getNearbyEateries, createMarkers }  from '../helpers';
import {RestaurantList} from './RestaurantList';

export const Home: React.FC = () => {
  
  const anyType : any[] = [] 
  const [restaurauntList, setRestaurantList] = useState(anyType);
  const [markerArray, setMarkers] = useState(anyType)
  const [mapObject, setMap] = useState({});
  const [selectedIndex, setIndex] = useState(-1);
  const [mapIsLoading, setLoading] = useState(true);
  const [JWT, setJWT] = useState('');
  const displayInfo = (index: number, map: Object) => {
    if(selectedIndex !== -1) {
      const {infowindow} = markerArray[selectedIndex];
      infowindow.close();
    }
    const {marker, infowindow} = markerArray[index];
    infowindow.open(map, marker);
    setIndex(index);
  };
  const fetchData = async (queryData: string) => {
    try {
      //TODO: If queryData is not empty
      const { lat, lng } = await getLocationData();
      // Get google map object
      const map = initMap(lat, lng);
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
  //
  useEffect(() => {
    // Get cookie
    setJWT(Cookies.get('JWT'));
    // Fetch map/restaurant data
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
      <RestaurantList  businesses={restaurauntList} restaruantClickHandler={(index)=>displayInfo(index,mapObject)} hideButtons={JWT !== '' || JWT === undefined}/>
    </React.Fragment>
  );
};
