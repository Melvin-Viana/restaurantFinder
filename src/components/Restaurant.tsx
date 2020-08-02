import React, {useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
interface Props {
  businessData: {name:string};
  restaurantIndex: number;
  restaruantClickHandler: (index: number) => void;
}
const Restaurant: React.FC<Props> = ({ businessData, restaurantIndex, restaruantClickHandler }) => {

  return (   <CSSTransition appear={true} in={true} timeout={1000} classNames="my-node">
  <ListItem button onClick={()=>restaruantClickHandler(restaurantIndex)}>
    <ListItemText>
    {businessData.name}
    </ListItemText>
    <button onClick={(e)=>{  e.stopPropagation(); console.log('hey')}}>Add to list</button>
  </ListItem></CSSTransition>);
};

export default Restaurant;