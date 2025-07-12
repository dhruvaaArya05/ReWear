const Item = require('../models/Item');

exports.addItem = async (req, res) => {
  try {
    const item = new Item({
      ...req.body,
      uploader: req.userId,
    });
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all pending items
exports.getPendingItems = async (req, res) => {
  try {
    const items = await Item.find({ status: 'pending' }).populate('uploader', 'email');
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Approve or reject item
exports.updateItemStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // 'approved' or 'rejected'
    if (!['approved', 'rejected'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }
    const updated = await Item.findByIdAndUpdate(id, { status }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

