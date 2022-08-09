'use strict';
var User = require('../../models/user');
module.exports=function(username,password){
    User.login(username, password, (err,user) => {
        if (!err) { 
         // res.redirect('/home');
         res.json(user);
         // res.send('<script type="text/javascript">alert("WELCONE DUDE");</script>').end();
        } else {
             throw err;
        }
      });
}

