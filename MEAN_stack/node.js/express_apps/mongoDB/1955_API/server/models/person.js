// require mongoose
var mongoose = require('mongoose');
// // define Schema variable
var Schema = mongoose.Schema;

var PersonSchema = new mongoose.Schema({
    name: String,
})
mongoose.model('Person', PersonSchema); // We are setting this Schema in our Models as 'Tiger'
var Person = mongoose.model('Person') // We are retrieving this Schema from our Models, named 'Tiger'