var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var firebase = require('firebase');


var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.listen(port, function() {
	console.log('Listening on port: ' + port);
});