"use strict";

var _require = require('express'),
    Router = _require.Router;

var _require2 = require('../controllers/users.controller'),
    getAllUsers = _require2.getAllUsers,
    getUsers = _require2.getUsers,
    newUser = _require2.newUser,
    deleteUser = _require2.deleteUser,
    updateUser = _require2.updateUser,
    searchUser = _require2.searchUser,
    loginUser = _require2.loginUser;

var router = Router();
router.get('/users', getAllUsers);
router.get('/users/:id', getUsers);
router.post('/users', newUser);
router["delete"]('/users/:id', deleteUser);
router.put('/users/:id', updateUser);
router.post('/users/search', searchUser);
router.post('/users/login', loginUser);
module.exports = router;