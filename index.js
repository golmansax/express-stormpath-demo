'use strict';

var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', function (req, res) {
  res.render('foo.bar'); // This throws "cannot find module 'bar'"
  // res.render('foo.bar.ejs'); // This works
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server listening on http://localhost:' + port);
});
