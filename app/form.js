var https = require('https');
var utils = require('../utils.js');


  module.exports = function(req,res,cookies) {
  utils.parseBody(req,function(err,body){
  var postData = JSON.stringify(body);
  if(body.user == "nizar" && body.pass == "1"){

    cookies.set( "username", body.user, { httpOnly: false } )
      console.log("Success");
      res.writeHeader(302,{
      Location : "/profile"
    })
        res.end();
  }else {
    res.end("Sorrrry");
  }

  });
};
