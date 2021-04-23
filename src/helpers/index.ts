require('regenerator-runtime/runtime');
import axios from 'axios';
import { NumberLiteralType } from 'typescript';
import { GEO_API_KEY, YELP_API_KEY, HEROKU_PROXY_SERVER } from '../../config';

interface Coordinates {
  lat: number;
  lng: number;
};


interface Business {
  coordinates: {latitude:number, longitude:number}, 
  name: string, 
  image_url: string, 
  categories: {cat: {title:string}}, 
  rating: number, 
  review_count: number
}

interface Marker {
  marker: object,
  infowindow: object
}

export const getLocationData = async () : Promise<Coordinates> => {
  const {
    data: {
      location: { lat, lng }
    }
  } = await axios.get(`https://geo.ipify.org/api/v1?apiKey=${GEO_API_KEY}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log(lat,lng)
  return { lat, lng };
};

export const initMap = (lat: number , lng: number): any => {
  return new google.maps.Map(document.getElementById('map'), {
    center: { lat, lng },
    zoom: 13
  });
};

export const getNearbyEateries = async (lat: number, lng: number) : Promise<Business[]> => {
  const {data: {
    businesses
  }} =  await axios.get(
    `${HEROKU_PROXY_SERVER}https://api.yelp.com/v3/businesses/search?term=food&latitude=${lat}&longitude=${lng}`,
    {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }
  );

  return businesses;
};

export const createGoogleScript = (googleApiKey: string, element: any) : void => {
  var script = element.createElement('script'),
  scripts = element.getElementsByTagName('script')[0];
  script.src = 'https://maps.googleapis.com/maps/api/js?key='+googleApiKey;
  scripts.parentNode.insertBefore(script, scripts);
};

//After 2100 seconds add markers to output array
export const createMarkers = async (businesses: Array<Business>, map: any): Promise<Marker[]> => {
  const output: Marker[] | PromiseLike<Marker[]> = []
  businesses.forEach((business: Business, index: number): any => {
    const { coordinates: {latitude, longitude}, name, image_url, categories, rating, review_count } = business;
    const latLng = new google.maps.LatLng(latitude, longitude);

    setTimeout(function() {
      var contentString =
    '<div id="content" style="width:95%; margin: auto">' +
    '<div id="siteNotice">' +
    "</div>" +
    `<img style='height:120px;width:100%; overflow:hidden; display:block; border-radius:10%; margin:auto' src='${image_url}'/>`+
    `<h2 id="firstHeading" class="firstHeading">${name}</h2>` +
    `<span>${categories.map(cat=>cat.title).join(', ')}</span>` +
    "</div>";
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 175,
        disableAutoPan: true
      });
      var marker = new google.maps.Marker({
          position: latLng,
          label: {
            text:''+(index+1),
            color: "#FFF",
            fontSize: "10px",
            fontWeight: "bold"
          },
          title: name,
      });
      marker.addListener('mouseover' , () => {
        infowindow.open(map, marker);
      })
      marker.addListener('mouseout' , () => {
        infowindow.close();
      })
      const markerInfo = {
        marker,
        infowindow
      };
      output.push(markerInfo);
      marker.setMap(map);

    }, index * 50);

  });
  await new Promise(r => setTimeout(r, 2000));
  return output;
};