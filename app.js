var express = require('express'),
app = express(),
port = process.env.PORT || 1337;

app.get("/test", function(req, res) {
  res.end("hello from express");
});

app.listen(port, function(err) {
  console.log("Listening on port "+port);
  window.document.body.innerHTML = '<a href="http://localhost:'+port+'/test">request /test from internal expressjs server</a>'
});

