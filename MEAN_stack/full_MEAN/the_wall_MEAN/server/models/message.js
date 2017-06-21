// require mongoose
var mongoose = require('mongoose');
// // define Schema variable
var Schema = mongoose.Schema;
// define Message Schema
var MessageSchema = new mongoose.Schema({
     _author: {
        type: String,
        ref: 'User',
        required: true
    },
    message: { 
        type: String, 
        required: true 
    },
    _comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });
// define Comment Schema
var CommentSchema = new mongoose.Schema({
	_author: {
        type: String,
        ref: 'User',
        required: true
    },
	text: String,
	_message: {type: Schema.Types.ObjectId, ref: 'Message'}
}, { timestamps: true });
// register the schemas as models
// set our models by passing them their respective Schemas
mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);
// store our models in variables
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');