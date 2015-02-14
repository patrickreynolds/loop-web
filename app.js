var express       = require('express'),     // Express Framework
    mongoose      = require('mongoose'),    // MongoDB Mapping
    bodyParser    = require('body-parser'), // Request body parser
    config        = require('./config'),    // Config options
    errorhandler  = require('errorhandler'),// Stack trace printing on error
    app           = express();              // Creating the express app

// Creating MongoDB connection via Mongoose
mongoose.connect(config.database.mongo_uri);

// Conditional module loading if in development environment
if ('development' == app.get('env')) {
  app.use(errorhandler());
};

// Setting bodyParser as express' parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// Setting application port number
app.set("port", config.server.port);

// Set as public root directory for static content
app.use("/public", express.static(__dirname + '/public'))

// TODO: remove and only allow development server and hosted server routes
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Require HTTP route endpoints
var routes = require('./routes')(app);

// Set the application to listen on a specified port
app.listen(app.get("port"), function() {
  var status = "Loop API is listening on port " + app.get("port") +
               " in " + app.settings.env + " mode"
  console.log(status);
});