module.exports = function(app) {


    var index = require('../controllers/index.server.controller');
	var ProjectDataModel = require('../models/projectdata');

    app.get('/', index.render);
    app.get('/api/data', function(req, res) {
        ProjectDataModel.find(function(err, data) {
            if (err)
                res.send(err);
            res.json(data); // return all data in JSON format
        });
    });

};