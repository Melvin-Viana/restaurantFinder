const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const User = require('./models/User');
const apiRoutes = require('./routes/apiRoutes')(express, User);
require('./dbConnection');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.static('dist/client'));
const REACT_APP_URL = process.env.REACT_APP_URL;
console.log(REACT_APP_URL)
// API routes here
app.use('/api', apiRoutes,);

// Handles any requests that don't match the ones above
app.get('*', (req:any, res:any) => {
  res.sendFile(path.resolve('./dist/client/index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000');
});
