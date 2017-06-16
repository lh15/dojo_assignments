// require mongoose
var mongoose = require('mongoose');
// // define Schema variable
var Schema = mongoose.Schema;
// define Note Schema
var NoteSchema = new mongoose.Schema({
    note: { type: String, required: true, minlength: 4 }
}, { timestamps: true });
// register the schemas as models
// set our models by passing them their respective Schemas
mongoose.model('Note', NoteSchema);
// store our models in variables
var Note = mongoose.model('Note');