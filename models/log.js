'use strict';
const mongoose = require('mongoose');

var logSchema = new mongoose.Schema({
    user_id: String,
    date: {
        type: Date,
        // `Date.now()` returns the current unix timestamp as a number
        default: Date.now
      }
    
  });

  module.exports = mongoose.model('Log', userSchema);