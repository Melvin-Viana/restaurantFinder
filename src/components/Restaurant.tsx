import React, {useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { useEffect } from 'react';
interface Props {
  businessData: {name:string};
  restaurantIndex: number;
  restaruantClickHandler: (index: number) => void;
  token: string;
  showButton: boolean;
}

import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Restaurant: React.FC<Props> = ({ businessData:{name: restaurantName}, restaurantIndex, showButton, restaruantClickHandler }) => {
  const [buttonIsVisible,setVisibility] = useState(showButton);
  const addToList = async (e : any) => {
    e.stopPropagation();
    const token = cookies.get('JWT')
    axios.post(`/api/addRestaurant`, 
      {token, restaurant: restaurantName });
    setVisibility(false);
  }
  return (   <CSSTransition appear={true} in={true} timeout={1000} classNames="my-node">
  <ListItem button onMouseEnter={()=>restaruantClickHandler(restaurantIndex)} onMouseLeave={()=>restaruantClickHandler(-1)}>
    <ListItemText>
    {restaurantName}
    </ListItemText>
    {buttonIsVisible ? <button onClick={(e)=>addToList(e)}>Add to list</button> : null}
  </ListItem></CSSTransition>);
};

export default Restaurant;