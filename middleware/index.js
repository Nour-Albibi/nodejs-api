var User = require('../models/user');

module.exports = {
processUserLogin: (req, res) => {
      var username = req.body.username;
      var password = req.body.password;
      var myarr=new Array();
      if (username && password) {
        myarr=User.findOne({username:"Nour",password:"123"},(err, result) => {
            if (!err) {
            //res.status(200).json(result);
            res.send('<script type="text/javascript">alert("'+myarr[0]+'");</script>').end();
              res.redirect('/home');
            } else {
              res.status(500).json({
                message: err.message
              });
            }
          });
     /*   User.findOne({ "id" :id }, function(err, doc) {
          if (err){
              // error
              throw err;
          } else if (doc) {
              // film exists
              console.log("Film is "+doc);
          } else {
              // film doesn't exist
              var user = new User({"id" : id});
              User.save();
          }
      });*/
      } else {
        res.status(500).render('login', {
          error: new Error('Malicious request')
        });
      }
    
  }
}