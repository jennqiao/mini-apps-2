const mongoose = require('mongoose');

const url = 'mongodb://localhost/checkout';
mongoose.connect(url);

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log('we are connected!');
});


module.exports = db;