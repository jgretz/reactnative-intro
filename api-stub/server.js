require("use-strict");

var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');

// allow cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// configure to use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// load routes
var glob = require('glob');
glob('./server/routes/*.js', function(er, files) {
  if (er) {
    console.log(er);
    return;
  }

  for (var i = 0; i < files.length; i++) {
    require(files[i])(router);
  }
});
app.use('/api', router);

// launch server
app.listen(process.env.PORT || 3003);
