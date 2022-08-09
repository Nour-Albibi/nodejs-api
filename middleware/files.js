var fs = require('fs');

module.exports = {
  handleUpload: function (req,res) {
 //  console.log(req.file);
  if (req.file) {
     // res.send('<script type="text/javascript">alert("'+req+'");</script>');
     console.log(req.file);
      res.status(201).json({
        name: req.file.filename
      });
    } else {
      res.status(500).send();
    }
    return;
  },
  NewUpload:function(req,res){
    Console.log(req.body.data);
 
  }
};