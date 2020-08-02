import React from 'react';
import Restaurant from './Restaurant';
import List from '@material-ui/core/List';

interface Props {
  businesses: Array<{name:string}>;
  restaruantClickHandler: (index : number ) => void;
}

export const RestaurantList: React.FC<Props> = ({businesses, restaruantClickHandler}) => {
  return (<List>
    {businesses.map((business, index)=><Restaurant restaurantIndex={index} businessData={business} restaruantClickHandler={()=> restaruantClickHandler(index)}/>)}
  </List>);
};
