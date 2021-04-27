import React, { useEffect } from 'react';
import Restaurant from './Restaurant';
import List from '@material-ui/core/List';

interface Props {
  businesses: Array<{name:string}>;
  restaruantClickHandler: (index : number ) => void;
  hideButtons: boolean;
}

export const RestaurantList: React.FC<Props> = ({businesses, restaruantClickHandler, hideButtons}) => {
  useEffect(()=>{
  },[hideButtons])
  return (<List dense={true} className={'.Restaurant-List'}>
    {businesses.map((business, index)=><Restaurant restaurantIndex={index} businessData={business} hideButton={hideButtons} restaruantClickHandler={()=> restaruantClickHandler(index)}/>)}
  </List>);
};
