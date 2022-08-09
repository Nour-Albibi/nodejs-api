//Require session module
var User = require('../models/user');
var Cryptr = require('cryptr'),
    cryptr = new Cryptr('myTotalySecretKey');

module.exports = {
    out:(req,res)=>{
        // var username = req.body.username;
        // var password = req.body.password;
        req.session.destroy();
        res.redirect('/');
     },
    checkAuth:(req,res)=>{
       // var username = req.body.username;
       // var password = req.body.password;
       res.redirect('/login');
    },
    processUserLogin: (req, res) => {
        var SuperAdmin="SuperUltra";
        var SPassword="P@ss123456";
    /*    if(req.body.username==SuperAdmin && req.body.password==SPassword){
             // sets a cookie with the user's info
             var user={username:SuperAdmin, password:SPassword};
             req.session.user = user;
             // res.send('<script type="text/javascript">alert("Yeahhhhhhh");</script>');
              res.redirect('/home');
        }
        else{
            res.render('login', { error: 'Invalid email or password.' });
        }*/
        //if username and password are correct then set them to session data
        if(req.body.username && req.body.password){ 
            var encryptedString = cryptr.encrypt(req.body.password),
            decryptedString = cryptr.decrypt(encryptedString);
         //   res.send('<script type="text/javascript">alert("'+encryptedString+'");</script>');
        User.findOne({ username: req.body.username ,password:encryptedString },function(err, user) {
            if (!user) {
                res.render('login', { error: 'Invalid email or password.' });
               
            } else {
             
              if (encryptedString == user.password) {
               
                // sets a cookie with the user's info
                req.session.user = user;
               //res.send('<script type="text/javascript">alert("Yeahhhhhhh");</script>');
                res.redirect('/home');
              } else {
             //   res.send('<script type="text/javascript">alert("'+user.username+'");</script>');
           
                res.render('login', { error: 'Invalid email or password.' });
              }
            }
          });
        } else {
            res.status(500).render('login', {
              error: new Error('Malicious request')
            });
          }
    },
   
}