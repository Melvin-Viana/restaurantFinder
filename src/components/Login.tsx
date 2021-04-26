import React, { useEffect } from 'react';
import { useState} from 'react';
import {FormControl, FormHelperText, Button, Paper, Tabs, Tab, TextField} from '@material-ui/core';
import {login, signup} from '../helpers/loginHelpers';

interface Props {
  setJWT : (str: string) => void,
}

export const Login: React.FC<Props> = ({setJWT}) => {
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [currentForm, setForm] = useState('login');
  const [loginError, setError] = useState('');

  const handleChange = (e:any, val:string) =>{setForm(val)}
  const handleLogin = async (loginHandler: Function) => {
    // @ts-ignore: Unreachable code error
    const data = await loginHandler(username, password, envKeys.REACT_APP_URL) 
    
    if(data.includes('User') || data.includes('Password')) {
      setError(data)
    } else {
      setError('')
      setJWT(data)
    }
  };
  return (<React.Fragment>
    <Paper square>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        aria-label="disabled tabs example"
        variant="fullWidth"
        onChange={handleChange}
        value={currentForm}
      >
         <Tab label="Login" value="login"/>
         <Tab label="SignUp" value="signup" />
      </Tabs>
      <FormControl style={{width:"100%"}}>
        <TextField
            id="user-text"
            label="UserName"
            type="text"
            placeholder="UserName"
            variant="outlined"
            fullWidth
            aria-describedby="user-text"
            onChange={(e)=>setUser(e.target.value)}
            value={username}
            />
      <TextField
            id="password"
            label="Password"
            type="password"
            placeholder="Password"
            variant="outlined"
            fullWidth
            aria-describedby="password"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            />
        <Button onClick={()=> handleLogin(currentForm === 'login' ? login : signup) }>{`${currentForm}`}</Button>
      </FormControl>
      {loginError !== '' ? <p>`{loginError}`</p> : null}
    </Paper>
    
  </React.Fragment>);
  };
 

