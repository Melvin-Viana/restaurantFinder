import React from 'react';
import {Component, useState} from 'react';
import {FormControl, FormHelperText, Button, Paper, Tabs, Tab, TextField} from '@material-ui/core';
import axios from 'axios';
import loginHelpers from '../helpers/loginHelpers';

console.log(loginHelpers['login'])
console.log(loginHelpers['signup'])

export const Login = () => {
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [currentForm, setForm] = useState('login')
  const handleChange = (event: any, value: 'string') =>{setForm(value)}
  
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
      <FormHelperText id="user-text">Enter User Name</FormHelperText>
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
            />    <FormHelperText id="password">Enter Password</FormHelperText>
        <Button onClick={()=> loginHelpers[currentForm](username,password)}>{`${currentForm}`}</Button>
      </FormControl>
    </Paper>
  </React.Fragment>);
  };
 

