// here we load the Quote model that we created on the server.js page
var mongoose = require('mongoose');
var Note = mongoose.model('Note');
var notes = require('../controllers/notes.js');
module.exports = function (app) {
    app.get('/api', notes.index);
    app.post("/api/note", notes.note);
}
