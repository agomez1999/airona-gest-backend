const { Router } = require('express');
const { getAllUsers, getUsers, newUser, deleteUser, updateUser, searchUser, loginUser } = require('../controllers/users.controller')

const router = Router();

router.get('/users', getAllUsers)

router.get('/users/:id', getUsers)

router.post('/users', newUser)

router.delete('/users/:id', deleteUser)

router.put('/users/:id', updateUser)

router.post('/users/search', searchUser)

router.post('/users/login', loginUser)


module.exports = router;