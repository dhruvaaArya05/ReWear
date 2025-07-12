const express = require('express');
const itemRouter = express.Router();

const itemController = require('../controllers/itemController');
const { authenticateUser } = require('../middlewares/authUser');

// Only protect routes that need authentication
itemRouter.post('/add/item', authenticateUser, itemController.addItem);
itemRouter.get('/pending', authenticateUser, itemController.getPendingItems);
itemRouter.patch('/:id/status', authenticateUser, itemController.updateItemStatus);
itemRouter.get('/my-items', authenticateUser, itemController.getUserItems);
// itemRouter.get('/:id', authenticateUser, itemController.getItemById);

// Public route for featured items
itemRouter.get('/featured', itemController.getFeaturedItems);
// router.get('/:id', getItemById); // ✅ No authentication middleware
itemRouter.get('/:id', itemController.getItemById); // ✅ No authentication middleware

module.exports = itemRouter;