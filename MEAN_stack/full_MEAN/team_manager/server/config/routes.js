// here we load the Quote model that we created on the server.js page
var mongoose = require('mongoose');
var Player = mongoose.model('Player');
var players = require('../controllers/players.js');
module.exports = function (app) {
    app.get('/api', players.index);
    app.post("/api/player", players.player);
    app.post("/api/update_player/:id", players.update_player);
    app.delete("/api/delete_player/:id", players.delete_player);
}
