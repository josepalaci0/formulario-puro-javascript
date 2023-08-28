const express = require('express');
const {login,register,getusers} = require('../controllers/user.controllers');

const router = express.Router()


router.post('/',login);
router.post('/login', register);
router.get('/',getusers)

module.exports = { usersRouter: router };