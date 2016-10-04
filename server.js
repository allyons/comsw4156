var port = 1337;
var express = require('./config/express');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost', ['restaurants']);
var app = express();
app.listen(port);
module.exports = app;
console.log('Server running at http://localhost:' + port);

app.get('/restaurants', function (req, res) {
  // db.restaurants.find(function (err, docs) {
  //   res.json(docs);
  // });

	db.restaurants.findOne({
	    _id: mongojs.ObjectId('57f34afd83c63d3867f9c437')
	}, function(err, doc) {
		res.json(doc);
	    doc._id.toString() === '57f34afd83c63d3867f9c437' 
	})

});