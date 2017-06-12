// require mongoose
var mongoose = require('mongoose');
// // define Schema variable
var Schema = mongoose.Schema;

var TigerSchema = new mongoose.Schema({
    name: String,
    weight: String,
    color: String
})
mongoose.model('Tiger', TigerSchema); // We are setting this Schema in our Models as 'Tiger'
var Tiger = mongoose.model('Tiger') // We are retrieving this Schema from our Models, named 'Tiger'