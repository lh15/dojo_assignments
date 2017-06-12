// here we load the Quote model that we created on the server.js page
var mongoose = require('mongoose');
var Tiger = mongoose.model('Tiger');
var tigers = require('../controllers/tigers.js');
module.exports = function (app) {
    app.get('/', tigers.index),
    app.get('/tigers/new', tigers.new),
    app.post('/tigers', tigers.process_tiger),
    app.get('/tigers/:id', tigers.show_tiger),
    app.get('/tigers/:id/edit/', tigers.edit),
    app.post('/tigers/:id', tigers.update),
    app.post('/tigers/:id/delete', tigers.delete)

}
