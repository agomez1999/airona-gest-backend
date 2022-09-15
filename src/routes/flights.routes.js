const { Router } = require('express');
const { getAllFlights } = require('../controllers/flights.controller')

const router = Router();

router.get('/flights', getAllFlights)

module.exports = router;