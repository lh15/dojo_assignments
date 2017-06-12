// here we load the Quote model that we created on the server.js page
var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');
var messages = require('../controllers/messages.js');
module.exports = function (app) {
    app.get('/', messages.index);
    app.post("/message", messages.message);
    app.post("/comment/:id", messages.comment);
}
