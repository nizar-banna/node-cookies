var http = require('http');
var router = require('./router.js');
var Cookies = require( "cookies" );
http.createServer(function(req,res) {

  var cookies = new Cookies( req, res), username

  var path = req.method + ' ' + req.url;
  try {
    router[path](req,res,cookies);
  } catch(err) {
    console.log('path',path);
    console.log('err',err);
    res.end('Not found');
  }
}).listen(process.env.PORT || 8080,function() {
  console.log('Listening on 8080');
});
