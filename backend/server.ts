const express = require('express');
const cors = require('cors');
const path = require('path')
const app = express();

app.use(cors());

app.use(express.static('dist/client'));

// Handles any requests that don't match the ones above
app.get('*', (req:any, res:any) => {
  res.sendFile(path.resolve('./dist/client/index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000');
});
