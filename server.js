var port = 1337;
var express = require('./config/express');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost', ['restaurants']);
var app = express();
app.listen(port);
module.exports = app;
console.log('Server running at http://localhost:' + port);

app.get('/restaurants', function (req, res) {
  db.restaurants.find(function (err, docs) {
    res.json(docs);
  });
});