const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateUser } = require('../middlewares/authUser');

router.use(authenticateUser);

router.get('/user-info', userController.getUserInfo);

module.exports = router;
