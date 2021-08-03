// @ts-nocheck
var db = require('mongoose');
var mongoURI = process.env.DB_URI;
var dbConnection = db.connect(mongoURI, { useNewUrlParser: true });
dbConnection
    .then(function (db) { return console.log("Connected to: " + mongoURI); })["catch"](function (err) {
    console.log("Ther\n    e was a problem connecting to mongo at: " + mongoURI);
    console.log(err);
});
module.exports = dbConnection;
