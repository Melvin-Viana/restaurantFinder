import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import {Home} from './Home';
import {Login} from './Login';
export const App: React.FC  = () => {
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home}/>
    </Switch>
  </BrowserRouter>
  );
}