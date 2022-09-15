"use strict";

var _require = require('express'),
    Router = _require.Router;

var _require2 = require('../controllers/flights.controller'),
    getAllFlights = _require2.getAllFlights;

var router = Router();
router.get('/flights', getAllFlights);
module.exports = router;