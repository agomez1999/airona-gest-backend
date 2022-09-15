"use strict";

var express = require('express');

var morgan = require('morgan');

var cors = require('cors');

var userRoutes = require('./routes/users.routes');

var clientsRoutes = require('./routes/clients.routes');

var flightRoutes = require('./routes/flights.routes');

var app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(userRoutes);
app.use(clientsRoutes);
app.use(flightRoutes);
app.use(function (err, req, res, next) {
  return res.json({
    message: err.message
  });
});
var PORT = process.env.PORT || 4000;
app.listen(PORT);
console.log('Server on port ' + PORT);