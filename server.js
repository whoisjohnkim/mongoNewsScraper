// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
// var mongojs = require("mongojs");

// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");
var bodyParser = require("body-parser");

// Setting up Mongoose
var mongoose = require('mongoose');
// If deployed, use the deployed database. Otherwise use the local articles database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/articles";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));



// Initialize Express
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Handlebars
app.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main"
    })
  );
  app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

db.once('open', function() {
    // we're connected to the database
    // Starting the server
    app.listen(PORT, function() {
        console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
        );
    });
});

module.exports = app;