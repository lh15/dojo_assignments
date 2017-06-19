// require mongoose
var mongoose = require('mongoose');
// // define Schema variable
var Schema = mongoose.Schema;
// define Player Schema
var PlayerSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    position: { type: String},
    status: { type: String, required: true, default: "Undecided" },
    game_1:{
        status: { type: String, required: true, default: "Undecided" }
    },
    game_2:{
        status: { type: String, required: true, default: "Undecided" }
    },
    game_3:{
        status: { type: String, required: true, default: "Undecided" }
    },
}, { timestamps: true });

// register the schemas as models
// set our models by passing them their respective Schemas
mongoose.model('Player', PlayerSchema);

// store our models in variables
var Player = mongoose.model('Player');
