const express = require('express');
const itemRouter = express.Router();
const itemController = require('../controllers/itemController');
const { authenticateUser } = require('../middlewares/authUser');

// Public routes
itemRouter.get('/featured', itemController.getFeaturedItems);
itemRouter.get('/item/:id', itemController.getItemById);

// Protected routes
itemRouter.use(authenticateUser); // Apply auth to all routes below
itemRouter.post('/add/item', itemController.addItem);
itemRouter.get('/my-items', itemController.getUserItems);
itemRouter.get('/pending', itemController.getPendingItems);
itemRouter.patch('/item/:id/status', itemController.updateItemStatus);

module.exports = itemRouter;