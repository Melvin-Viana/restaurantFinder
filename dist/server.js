var express = require('express');
var cors = require('cors');
var path = require('path');
var app = express();
var User = require('./models/User');
var dotenv = require('dotenv');
dotenv.config();
var apiRoutes = require('./routes/apiRoutes')(express, User);
require('./dbConnection');
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
// API routes here
app.use('/api', apiRoutes);
// Handles any requests that don't match the ones above
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on port 3000');
});
