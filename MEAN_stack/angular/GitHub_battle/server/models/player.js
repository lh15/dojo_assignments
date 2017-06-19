// require mongoose
var mongoose = require('mongoose');
// // define Schema variable
var Schema = mongoose.Schema;
// define Note Schema
var PlayerSchema = new mongoose.Schema({
    username: { type: String, required: true},
    score: { type: Number, required: true},
}, { timestamps: true });
// register the schemas as models
// set our models by passing them their respective Schemas
mongoose.model('Player', PlayerSchema);
// store our models in variables
var Player = mongoose.model('Player');