// Load the express module (Where do you think this comes from?)
var express = require("express");
var http = require('http');
// invoke var express and store the resulting application in var app
var app = express();

// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');


app.get("/", function (request, response) {
    console.log("root route");
    response.render('index');
})


// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
// Tell the express app to listen on port 8000
app.listen(7000, function () {
    console.log("listening on port 7000");
})
// this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)