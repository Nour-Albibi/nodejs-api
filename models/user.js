'use strict';
var mongoose = require('mongoose');
var jwt=require('jsonwebtoken');
var userSchema = new mongoose.Schema({
  Email : String,
  UserName : String,
  Password : String,
  ProfileImage : String,
  IsContactEmail : Boolean,
  IsContactPhone : Boolean,
  PersonalInfo : {
      Fname : String,
      Lname : String,
      Gender : String,
      MobNum : String,
      NationalId : String,
      PassportId : String,
      BuildingNum : String,
      StName : String,
      Longtitude : {
        type: String,
        defualt: null
      },
      Latitude :  {
        type: String,
        defualt: null
      }
  },
  Role : String,
  ActivationCode : String,
  IsActivated : Boolean,
  Com: String,
  Token : String,
  ResetPassword : Boolean,
  CountReview : Number,
  ReviewResult : Number,
  NotificationToken : String,
  IsGoogleAccount : Boolean,
  IsFacebookAccount : Boolean,
  FacebookVerified : Boolean,
  GoogleVerified : Boolean,
  IsActive : Boolean
  });
 userSchema.statics.login = function(name, pwd, callback) {
  var self = this;
  self.findOne({UserName:name,Password:pwd},function(err,user){
    if(err) callback(err,null);
    if(user!=null && user.length>0)
    {
      var token=jwt.sign({user:user} ,'nneneehabnour');
      user.token=token;
      user.save(); 
    }
    
      callback(null,user);
  });
 }
 /*userSchema.statics.signup = function(name, pwd, callback) {
  var self = this;
  self.findOne({UserName:name,Password:pwd} ,{
    UserName: true,
    Password: true
  },function(err,user){
    if(err) callback(err,null);
   // res.send(user).end();
    /*  var token=jwt.sign({user:user} ,'nneneehabnour');
      user.token=token;
      user.save();
      callback(null,user);
  });
 }*/
 //var userModel = mongoose.model('user', userSchema, 'user');
  module.exports = mongoose.model('User', userSchema);