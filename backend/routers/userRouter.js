const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/user-info', userController.getUserInfo);

module.exports = router;
