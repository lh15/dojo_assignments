// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, '/views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/message_board');
// Use native promises
mongoose.Promise = global.Promise;
// // define Schema variable
var Schema = mongoose.Schema;
// define Message Schema
var MessageSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4 },
    message: { type: String, required: true },
    _comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });
// define Comment Schema
var CommentSchema = new mongoose.Schema({
	name: String,
	text: String,
	_message: {type: Schema.Types.ObjectId, ref: 'Message'}
}, { timestamps: true });
// set our models by passing them their respective Schemas
mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);
// store our models in variables
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

// *************Routes**************
// route for getting a particular Message and comments
app.get('/', function (req, res) {
    Message.find({}, false, true).populate('_comments').exec(function (err, messages) {
        res.render('index', { messages: messages });
    });
});
// route for creating one comment with the parent Message id
app.post("/message", function(req, res){
	var newMessage = new Message({name: req.body.name, message: req.body.message});
	newMessage.save(function(err){
		if(err){
			console.log(err);
			res.render('index.ejs', {errors: newMessage.errors});
		} else {
			console.log("success");
			res.redirect('/');
		}
	})
});
app.post("/comment/:id", function(req, res){
	var message_id = req.params.id;
	Message.findOne({_id: message_id}, function(err, message){
		var newComment = new Comment({name: req.body.name, text: req.body.comment});
		newComment._message = message._id;
		Message.update({_id: message._id}, {$push: {"_comments": newComment}}, function(err){

		});
		newComment.save(function(err){
			if(err){
				console.log(err);
				res.render('index', {errors: newComment.errors});
			} else {
				console.log("comment added");
				res.redirect("/");
			}
		});
	});
});
// *************End Routes**************

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})