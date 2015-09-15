var PORT = process.env.PORT || 3000;

var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
var router = express.Router();

process.env.APP_SECRET = process.env.APP_SECRET || 'stefanredfield.com'

app.use([
  express.static(path.join(__dirname, '/public')),
  bodyParser.json()
]);

app.listen(PORT, function() {
  console.log('SERVER IS WERKIN HARD ON PORT ' + PORT )
});



