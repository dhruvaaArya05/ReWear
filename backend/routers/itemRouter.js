const express = require('express');
const itemRouter = express.Router();

const itemController = require('../controllers/itemController');
const { authenticateUser } = require('../middlewares/authUser');

itemRouter.use(authenticateUser);
itemRouter.post('/add/item', itemController.addItem);

module.exports = itemRouter;