const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const User = require('./models/User');
const dotenv = require('dotenv');
dotenv.config();
const apiRoutes = require('./routes/apiRoutes')(express, User);
require('./dbConnection');
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// API routes here
app.use('/api', apiRoutes);

// Handles any requests that don't match the ones above
app.get('*', (req:any, res:any) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000');
});
