var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.status(200).send('Welcome to Optum!!');
});

var server = app.listen(8080, function () {
  var port = server.address().port;
  console.log('Example app listening at port %s', port);
});

module.exports = server;
