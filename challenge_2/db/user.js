const db = require ('./db.jsx');
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({

  account: {
    name: String,
    email: String,
    password: String,
  },
  address: {
    streetOne: String,
    streetTwo: String,
    phone: String
  },
  billingInfo: {
    number: Number,
    expiration: Number,
    cvv: Number,
    zipcode: Number
  }

})