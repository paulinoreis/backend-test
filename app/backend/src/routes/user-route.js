'use strict'

// **** imports ****
const express = require('express');
const controller = require('../controllers/user-controller'); // routers


// **** create router ****
const router = express.Router();

// **** routers setup ****
router.post('/', controller.post); // Create
router.post('/authenticate', controller.authenticate); // Authenticate

// **** exports ****
module.exports = router;