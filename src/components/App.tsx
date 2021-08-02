import React, {useState, useEffect} from 'react';
// @ts-ignore:
import Cookies from 'universal-cookie';
// @ts-ignore:
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import {Home} from './Home';
import {Login} from './Login';
import axios from 'axios';
const cookies = new Cookies(); 
const {REACT_APP_URL} = envKeys;
export class App extends React.Component {

  constructor (props: any) {
    super(props);
    this.state = {
      jwToken: cookies.get('JWT')
    }
  }
  componentDidMount() {
    if (this.state.jwToken !== undefined) {
      // Verify Token - Token is removed from browser when cookie is expired or user doesn't exist
      axios.get(`${REACT_APP_URL}/api/verifyUser`, {token: this.state.jwToken}).catch((err)=>{
        console.error(err);
        cookies.remove('JWT');
        this.setState({jwtToken: undefined})
      })
    }
  }

  componentDidUpdate() {
    cookies.set('JWT', this.state.jwToken, {maxAge: 7200});
  }
  render(){
    return (
    <BrowserRouter> 
      <h1 className='home-heading'>🍽️ Restaurant Finder 🔍</h1>
      <Switch>
        <Route path="/login">
        {(this.state.jwToken === undefined) ? <Login setJWT={(val)=> this.setState({jwToken: val})} />: <Redirect to ="/" />} 
          </Route>
        <Route exact path="/" component={() => <Home cookies={cookies}/>}/>
      </Switch>
    </BrowserRouter>
    );
  }
}