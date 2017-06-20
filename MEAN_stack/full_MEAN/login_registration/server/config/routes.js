// here we load the Quote model that we created on the server.js page
var mongoose = require('mongoose');
var User = mongoose.model('User');
var users = require('../controllers/users.js');
module.exports = function (app) {
    app.get('/api', users.index);
    app.post("/api/register", users.register);
    app.post("/api/login", users.login);
}
