// here we load the Quote model that we created on the server.js page
var mongoose = require('mongoose');
var User = mongoose.model('User');
var users = require('../controllers/users.js');
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');
var messages = require('../controllers/messages.js');
module.exports = function (app) {
    app.get('/api', users.index);
    app.post("/api/register", users.register);
    app.post("/api/login", users.login);
    app.get('/api/messages', messages.index);
    app.post("/api/message", messages.message);
    app.post("/api/comment/:id", messages.comment);
    app.delete("/api/delete_message/:id", messages.delete_message);
    app.delete("/api/delete_comment/:id", messages.delete_comment);
}
