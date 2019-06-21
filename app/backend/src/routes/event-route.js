'use strict'

// **** imports ****
const express = require('express');
const controller = require('../controllers/event-controller'); // routers
const authService = require('../services/auth-service'); // authentication service

// **** create router ****
const router = express.Router();

// **** routers setup ****
router.get('/', controller.get); // List all
router.get('/select/:id', controller.getById); // List by id
router.get('/featured', controller.getByFeatured); // List by Featured

router.post('/', authService.authorize, controller.post); // Create

// **** exports ****
module.exports = router;