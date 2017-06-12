// here we load the Quote model that we created on the server.js page
var mongoose = require('mongoose');
var Person = mongoose.model('Person');
var persons = require('../controllers/persons.js');
module.exports = function (app) {
    app.get('/', persons.index);
    app.get('/new/:name', persons.new);
    app.get('/remove/:name/', persons.remove);
    app.get('/:name', persons.show);
}
