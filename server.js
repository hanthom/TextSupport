var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var firebase = require('firebase');


var firebaseRef = new Firebase('https://textsupport101.firebaseIO.com/numbers');
// var fireRef = $firebaseAuth(fireRef);

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.listen(port, function() {
	console.log('Listening on port: ' + port);
});

app.post('/numbers', function(req, res) {



});