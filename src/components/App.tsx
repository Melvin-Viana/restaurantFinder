import React, {useState, useEffect} from 'react';
import Cookies from 'js-cookie';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import {Home} from './Home';
import {Login} from './Login';
export const App: React.FC  = () => {
  const [jwToken, setJWT] = useState('');
  useEffect(() =>{
    Cookies.set('JWT', jwToken);
  },[jwToken])
  return (
  <BrowserRouter> 
    <Switch>
      <Route path="/login">
      {(jwToken === '')  ? <Login setJWT={setJWT} />: <Redirect to ="/" />} 
        </Route>
      <Route exact path="/" component={() => <Home/>}/>
    </Switch>
  </BrowserRouter>
  );
}