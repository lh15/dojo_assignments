// here we load the Quote model that we created on the server.js page
var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');
var messages = require('../controllers/messages.js');
module.exports = function (app) {
    app.get('/api', messages.index);
    app.post("/api/message", messages.message);
    app.post("/api/comment/:id", messages.comment);
    app.delete("/api/delete_message/:id", messages.delete_message);
    app.delete("/api/delete_comment/:id", messages.delete_comment);
}
