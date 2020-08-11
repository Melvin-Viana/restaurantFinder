const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
mongoose.connect();

app.use(cors());

app.use(express.static('client'));

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000');
});
