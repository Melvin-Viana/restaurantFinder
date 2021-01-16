import React, {useState} from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import {Home} from './Home';
import {Login} from './Login';
export const App: React.FC  = () => {
  const [jwtToken, setJWT] = useState({});

  return (
  <BrowserRouter> 
    <Switch>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home}/>
    </Switch>
  </BrowserRouter>
  );
}