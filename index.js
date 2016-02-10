var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/links');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

var server = require('http').Server(app);
var io = require('socket.io')(server);

var links = require('./routes/link.routes.js')(app);
var hub = require('./routes/hub.routes.js')(io);

var server = app.listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000/');
});