
var express = require('express');
var router = express.Router();
var index = require('../middleware/index');
var bodyParser = require('body-parser');
var LogInController=require('../controller/AuthController/loginController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'لوحة تحكم UltraFi' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'لوحة تحكم UltraFi' });
});

/*router.post('/', function(req,res,next){
  res.send('Hi we are here ');
});*/
/*router.post('/',function(req,res,next){
  res.redirect('/home');
})*/
router.post('/',index.processUserLogin);
//router.post('/',function(req,res,next){

  //Note AJAX doesn't work here $ is not defined we have to ref to jquery.min.js --- usually we add the script src 
  //in header file, what web apps read from  index & start files in web routine apps 
  /*$.ajax({
    type: 'POST',
    url:'/checkUser',
    data:todo,
    success: function(data){
      //do somthing with the data via front-end
      if(data) {res.send('<script type="text/javascript">alert("Fine!");</script>').end();}
    //  location.reload();
    }
  })*/
//});
/*var urlencodedParser=bodyParser.urlencoded({ extended: false });
router.post('/checkUser',urlencodedParser,function(req,res,next){
  var username = req.body.username;
  var password = req.body.password;
  LogInController(username,password);
});*/
module.exports = router;
