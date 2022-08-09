
var express = require('express');
var router = express.Router();
var auth = require('../middleware/auth');
// Check If username and password are exsited in the session--- In future we'll do expritation time
//If authentcated redirect to home
router.get('/',function(req,res){
  res.redirect('/login');
});

//redirect user to login page in order to sign in 
router.get('/login', function(req, res, next) {
    //titile below is a prameter that is passed to login page 
    res.render('login', { title: 'لوحة تحكم UltraFi' });
  });
  // Check if his submitted data are corrected and exsited in Mongodb and then set his data to session variable or(glopal variable)
  router.post('/login',auth.processUserLogin);
// kick him out ---- unset session variable or add null to glopal vars then redirect him to login page
  router.get('/out',auth.out);
// if auth in the first time redirect user to home page
function requireLogin (req, res, next) {
  if (!req.user) {
    res.redirect('/login');
  } else {
    next();
  }
};
  router.get('/home',requireLogin,function(req, res, next) {
  //  res.send('<script type="text/javascript">alert("'+req.user.username+'");</script>');
  // if (!req.user) {
   //   res.redirect('/login');
  //  }
   // else{
      res.render('index', { title: 'لوحة تحكم UltraFi' });
 //}
   
  });

  module.exports = router;