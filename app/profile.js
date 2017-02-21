var fs = require('fs');
var form = fs.readFileSync(__dirname+'/../views/profile.html','utf8');

module.exports = function(req,res,cookies) {

  username = cookies.get( "username" )


  if(username){
    res.end(form);
  }else{
    res.end("not login");
  }

};
