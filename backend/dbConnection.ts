// @ts-nocheck
const db = require('mongoose');
const mongoURI = process.env.DB_URI ||'mongodb://localhost:27017/restaurantFinder';
const dbConnection = db.connect(mongoURI, {useNewUrlParser: true});

dbConnection
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`Ther
    e was a problem connecting to mongo at: ${mongoURI}`);
    console.log(err);
});

module.exports = dbConnection;