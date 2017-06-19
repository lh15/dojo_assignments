// here we load the Quote model that we created on the server.js page
var mongoose = require('mongoose');
var Player = mongoose.model('Player');
var players = require('../controllers/players.js');
module.exports = function (app) {
    // app.get('/api', messages.index);
    // app.post("/api/message", messages.message);
}
