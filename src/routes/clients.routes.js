const { Router } = require('express');
const { getAllClients, getClient, newClient, deleteClient, updateClient, searchClient } = require('../controllers/clients.controller')

const router = Router();

router.get('/clients', getAllClients)

router.get('/clients/:id', getClient)

router.post('/clients', newClient)

router.delete('/clients/:id', deleteClient)

router.put('/clients/:id', updateClient)

router.post('/clients/search', searchClient)

module.exports = router;