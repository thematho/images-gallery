// This web.js file is used to deploy the application throught ExpressJS
require('newrelic');
var gzippo = require('gzippo');
var express = require('express');

var app = express();

app.use(gzippo.staticGzip('' + __dirname + '/dist'));
app.listen(process.env.PORT || 5000);
