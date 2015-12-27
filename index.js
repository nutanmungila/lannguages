var fs = require('fs');
var express = require('express');

var cors = require('cors');
var app = express();
var path = require('path');
var list = [];
app.use(cors());

//create end point  GET /translation/{language}
//read {language} json file content and send that value

app.get('/translation/:language', function (req, res) {

  var language = req.params.language;
  var file = fs.createReadStream("json/"+language+".json");
  file.pipe(res);
});

/////
app.post('/translation/:language', function (req, res) {

  var language = req.params.language;
  var file = fs.createReadStream("json/"+language+".json");
  file.pipe(res);
  console.log(req.data);
});
////
app.get('/languages/list', function (req, res) {

  fs.readdir("json/", function (err, files) {

  var langlist =  files.map( function (file) {
      return path.basename(file,'.json');
    });


    res.send(langlist);
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
