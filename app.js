var express = require('express')

var app = express();

app.net('/',function (req.res){
  res.send("test")
});

app.listen(3000,function(){
  console.log('server on!');
});

//app.use(express.static(__dirname + '/public'));

//app.listen(3000,function(){
//  console.log('Server On!');
//});
