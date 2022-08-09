var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/AppDB');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  console.info('connected to database successfully ');

});

module.exports = db;