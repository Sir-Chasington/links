var http = require('http');
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

var httpserv = http.createServer(app);
var io = require('socket.io')(httpserv);


var links = require('./routes/link.routes.js')(app);
var hub = require('./routes/hub.routes.js')(io);

var ASQ = require('asynquence');


require('asynquence-contrib');

var port = 3000;
var	host = "127.0.0.1";

httpserv.listen(port, host);
