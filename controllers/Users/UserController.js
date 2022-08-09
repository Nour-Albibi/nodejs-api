var User = require('../../models/user');
var Ad = require('../../models/ad');
var FavAd = require('../../models/favoriteads');
var Cryptr = require('cryptr'),
    cryptr = new Cryptr('myTotalySecretKey');
module.exports = {
  GetByID:function(req,res){
    
  },
  list: function(req, res) {
    //console.log(User)l
    User.find({}, (err, result) => {
      if (!err) {
        res.status(200).json(result);
      } else {
        res.status(500).json({
          message: err.message
        });
      }
    });
  },
  show: function(req, res) {
    if (req.params.id) {
      User.findById(req.params.id, (err, result) => {
        if (!err) {
          if (result) {
            res.status(200).json(result);
          } else {
            res.status(404).json({
              message: 'Not found'
            });
          }
        } else {
          res.status(500).json({
            message: err.message
          });
        }
      });
    } else {
      res.status(400).json({
        message: 'Malicious request'
      });
    }
  },
  create: function(req, res) {
    if (req.body) {
      var user;
      var encryptedString = cryptr.encrypt(req.body.Password);
      user = new User({
        Email: req.body.Email || "", 
        UserName : req.body.UserName  || "" ,
        Password : encryptedString || "" ,
        ProfileImage :  req.body.ProfileImage  || "",
        IsContactEmail :  req.body.IsContactEmail  || false,
        IsContactPhone :  req.body.IsContactPhone  || false,
        PersonalInfo : req.body.PersonalInfo  || null,
        Role : req.body.Role  || "",
        ActivationCode : req.body.ActivationCode  || "",
        IsActivated : req.body.IsActivated  || false,
        Com : req.body.com || "0",
        Token :  req.body.Token  || "",
        ResetPassword : req.body.ResetPassword  || false,
        CountReview :  req.body.CountReview  || 0,
        ReviewResult :  req.body.ReviewResult  || 0,
        NotificationToken :  req.body.NotificationToken  || "",
        IsGoogleAccount : req.body.IsGoogleAccount  || false,
        IsFacebookAccount : req.body.IsFacebookAccount  || false,
        FacebookVerified : req.body.FacebookVerified  || false,
        GoogleVerified : req.body.GoogleVerified  || false,
        IsActive : req.body.IsActive  || false
    });
      user.save((err, ad) => {
        if (!err) {
          res.status(200).json(user);
        } else {
          res.status(500).json({
            message: err.message
          });
        }
      });
    } else {
      res.status(400).json({
        message: 'Malicious request'
      });
    }
  },
  delete: function(req, res) {
    if (req.params.id) {
        User.findById(req.params.id, (err, result) => {
        if (!err) {
          if (result) {
            User.findByIdAndRemove(result._id, (err, result) => {
              res.status(204).json();
            });
          } else {
            res.status(404).json({
              message: 'Not found'
            });
          }
        } else {
          res.status(500).json({
            message: err.message
          });
        }
      });
    } else {
      res.status(400).json({
        message: 'Malicious request'
      });
    }
  },
  update: function(req, res) {
    if (req.params.id) {
        User.findById(req.params.id, (err, result) => {
        if (!err) {
        
//result.name = req.body.name || result.name;
       //   result.sponsor = req.body.sponsor || result.sponsor;
       result.Email= req.body.Email || result.Email, 
       result.UserName =req.body.UserName  || result.UserName ,
       result.ProfileImage= req.body.ProfileImage  || result.ProfileImage,
       result.IsContactEmail= req.body.IsContactEmail  || result.IsContactEmail,
       result.IsContactPhone=  req.body.IsContactPhone  || result.IsContactPhone,
       result.PersonalInfo = req.body.PersonalInfo  ||  result.PersonalInfo,
       result.Com = req.body.com ||   result.Com,
       result.IsGoogleAccount = req.body.IsGoogleAccount  ||  result.IsGoogleAccount,
       result.IsFacebookAccount = req.body.IsFacebookAccount  ||  result.IsGoogleAccount,
       result.FacebookVerified = req.body.FacebookVerified  ||  result.IsGoogleAccount,
       result.GoogleVerified = req.body.GoogleVerified  ||  result.IsGoogleAccount,
      
          result.save((err, result) => {
            if (!err) {
              console.log(result);
              res.status(200).json(result);
            } else {
              res.status(500).json({
                message: err.message
              });
            }
          });
        } else {
          res.status(500).json({
            message: err.message
          });
        }
      });
    } else {
      res.status(400).json({
        message: 'Malicious request'
      });
    }
  },
  login: (req, res) => {
  // res.send('test').end();
 // res.send(req.body.UserName).end();
 // res
    if(req.body.UserName  && req.body.Password){ 
        var encryptedString = cryptr.encrypt(req.body.Password);
      //  decryptedString = cryptr.decrypt(encryptedString);
      //  res.send(encryptedString).end();
    User.login(req.body.UserName,encryptedString, (err,user) => {
      if (!err) { 
       res.status(200).json(user);
      } else {
           throw err;
      }
    });
    } else {
        res.status(500).render('login', {
          error: new Error('Malicious request')
        });
    }
  },
  getAds:function(req,res){
      Ad.find({"UserId":req.params.id},function(err,result){
        if(!err){
          res.status(200).json(result);
        }
      });
  },
  getFavAds:function(req,res){
   var MyFavAds=new Array();
    FavAd.find({"UserId":req.params.id},function(err,result){
        if(!err){
        result.forEach(function(ad){
        // console.log( ad.AdId);
          Ad.find({"_id": ad.AdId}, function(err, ads){
          // console.log(ads);
            
          });
         
        });
       
        res.status(200).json(MyFavAds);
        }
    });
  },
  ReviewUser:function(req,res){
    //req.params...
    //req.body....
    if(req.params.reviewedUserId && req.params.num && req.params.user_id){
        User.findById(req.params.reviewedUserId, (err, result) => {
        if (!err) {
          /*
          5 star - 252
          4 star - 124
          3 star - 40
          2 star - 29
          1 star - 33
*/
            //(5*252 + 4*124 + 3*40 + 2*29 + 1*33) / (252+124+40+29+33) = 4.11 and change
          result.CountReview = result.CountReview+1;
          ReviewAlgorithm=(req.params.num)/result.CountReview;
      //    ReviewAlgorithm
          result.ReviewResult = ReviewAlgorithm;
          result.save((err, result) => {
            if (!err) {
              res.status(200).json(result);
            } else {
              res.status(500).json({
                message: err.message
              });
            }
          });
        } else {
          res.status(500).json({
            message: err.message
          });
        }
      });
    } else {
      res.status(400).json({
        message: 'Malicious request'
      });
    }
  },
  GetByUserName:function(req,res){
    if (req.params.username) {
      User.find({"UserName":req.params.username}, (err, result) => {
        if (!err) {
          if (result) {
            res.status(200).json(result);
          } else {
            res.status(404).json({
              message: 'Not found'
            });
          }
        } else {
          res.status(500).json({
            message: err.message
          });
        }
      });
    } else {
      res.status(400).json({
        message: 'Malicious request'
      });
    }
  }
}