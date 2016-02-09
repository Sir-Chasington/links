var mongoose = require('mongoose');

var linkSchema = mongoose.Schema({

    name: String,
    age: Number,
    type: String

});

module.exports = mongoose.model('Link', linkSchema);