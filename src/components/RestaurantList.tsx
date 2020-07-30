import React from 'react';
import Restaurant from './Restaurant';
interface Props {
  businesses: Array<{name:string}>;
}

export const RestaurantList: React.FC<Props> = ({businesses}) => {
  return (<div>{businesses.map(business=><Restaurant businessData={business}/>)}</div>);
};
