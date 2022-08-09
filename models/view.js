//favorite_ads

'use strict';
var mongoose = require('mongoose');

var viewsSchema = new mongoose.Schema({
    AdID : String,
    UserID:{
        type:String,
        default:"none"
  
  }
});
module.exports = mongoose.model('View', viewsSchema)