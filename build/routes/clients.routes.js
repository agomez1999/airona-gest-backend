"use strict";

var _require = require('express'),
    Router = _require.Router;

var _require2 = require('../controllers/clients.controller'),
    getAllClients = _require2.getAllClients,
    getClient = _require2.getClient,
    newClient = _require2.newClient,
    deleteClient = _require2.deleteClient,
    updateClient = _require2.updateClient,
    searchClient = _require2.searchClient;

var router = Router();
router.get('/clients', getAllClients);
router.get('/clients/:id', getClient);
router.post('/clients', newClient);
router["delete"]('/clients/:id', deleteClient);
router.put('/clients/:id', updateClient);
router.post('/clients/search', searchClient);
module.exports = router;