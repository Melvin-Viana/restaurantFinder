import React from 'react';
import {Component, useState} from 'react';
import {FormControl, FormHelperText, Button, Paper, Tabs, Tab, TextField} from '@material-ui/core';
import axios from 'axios';

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
    </Paper>
  </React.Fragment>);
  };
 

