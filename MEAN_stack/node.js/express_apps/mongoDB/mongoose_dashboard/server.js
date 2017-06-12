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
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "mongoose_dashboard" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/mongoose_dashboard');
// Use native promises
mongoose.Promise = global.Promise;
var TigerSchema = new mongoose.Schema({
    name: String,
    weight: String,
    color: String
})
mongoose.model('Tiger', TigerSchema); // We are setting this Schema in our Models as 'Tiger'
var Tiger = mongoose.model('Tiger') // We are retrieving this Schema from our Models, named 'Tiger'
// Routes
// GET '/' Displays all of the tigers.
app.get('/', function (req, res) {
    Tiger.find({}, function (err, tigers) {
        if (err) {
            return handleError(err);
        }
        // console.log(tigers)
        var tigers = tigers;
        // console.log(tigers)
        res.render('index', { "tigers": tigers });
    })
})
// GET '/tigers/new' Displays a form for making a new tiger.
app.get('/tigers/new', function (req, res) {
    res.render('new');
})
// POST '/tigers' Should be the action attribute for the form in the above route (GET '/tigers/new').
app.post('/tigers', function (req, res) {
    console.log("POST DATA", req.body);
    var tiger = new Tiger({ name: req.body.name, weight: req.body.weight, color: req.body.color });
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    tiger.save(function (err) {
        // if there is an error console.log that something went wrong!
        if (err) {
            console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a tiger!');
            res.redirect('/');
        }
    })
})
// GET '/tigers/:id' Displays information about one tiger.
app.get('/tigers/:id', function (req, res) {
    Tiger.find({ _id: req.params.id }, function(err, response) {
    if (err) { console.log(err); }
    res.render('show', { tiger: response[0] });
  });
})

// GET '/tigers/:id/edit' Should show a form to edit an existing tiger.
app.get('/tigers/:id/edit/', function(req, res){
  Tiger.find({ _id: req.params.id }, function(err, response) {
    if (err) { console.log(err); }
    res.render('edit', { tiger: response[0] });
  })
});
// POST '/tigers/:id' Should be the action attribute for the form in the above route (GET '/tigers/:id/edit').
app.post('/tigers/:id', function (req, res) {
    Tiger.update({ _id: req.params.id }, req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
})
// POST '/tigers/:id/delete' Should delete the tiger from the database by ID.
app.post('/tigers/:id/delete', function(req, res){
  Tiger.remove({ _id: req.params.id }, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})