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
// This is how we connect to the mongodb database using mongoose -- "quoting_dojo" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/quoting_dojo');
// Use native promises
mongoose.Promise = global.Promise;
var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String
})
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'User'
var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'User'
// Routes
// Root Request
// The root route 
app.get('/', function (req, res) {
    res.render('index');
})
app.get('/show_quotes', function (req, res) {
    Quote.find({}, function (err, quotes) {
        if (err) {
            return handleError(err);
        }
        // console.log(quotes)
        var quotes = quotes;
        // console.log(quotes)
        res.render('quotes', { "quotes": quotes });

    })
})
// Add User Request 
app.post('/quotes', function (req, res) {
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.body
    var quote = new Quote({ name: req.body.name, quote: req.body.quote });
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    quote.save(function (err) {
        // if there is an error console.log that something went wrong!
        if (err) {
            console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a quote!');
            res.redirect('/show_quotes');
        }
    })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})