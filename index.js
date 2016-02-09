var app = require('express')();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/links');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var links = require('./routes/link.routes.js')(app);

var server = app.listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000/');
});