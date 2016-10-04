// app/models/projectdata.js

// grab the mongoose module
var mongoose = require('mongoose');

// define our model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Cheese', {
    name : {type : String, default: ''}
});