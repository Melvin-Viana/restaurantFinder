import React, { useEffect, useState } from 'react';
import Restaurant from './Restaurant';
import List from '@material-ui/core/List';
import jwt_decode from 'jwt-decode';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
interface Props {
  businesses: Array<{name:string}>;
  restaruantClickHandler: (index : number ) => void;
  showButtons: boolean;
}
interface decoded {
  restaurants: any
}
export const RestaurantList: React.FC<Props> = ({businesses, restaruantClickHandler, showButtons}) => {
  const [restaurantWishList, setWishlist] = useState([new Set()]);
  useEffect(()=>{
    const JWT = cookies.get('JWT');
    const decoded: decoded = jwt_decode(JWT);
    setWishlist([new Set(decoded.restaurants)]);
  },[''])
  return (<List dense={true} className={'.Restaurant-List'}>
    {businesses.map((business, index)=><Restaurant restaurantIndex={index} businessData={business} showButton={restaurantWishList[0].has(business.name) === false && showButtons} restaruantClickHandler={()=> restaruantClickHandler(index)}/>)}
  </List>);
};
