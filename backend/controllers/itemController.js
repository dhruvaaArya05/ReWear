const Item = require('../models/Item');

exports.addItem = async (req, res) => {
  try {
    const item = new Item({
      ...req.body,
      uploader: req.userId,
      userId: req.userId, // <-- Add this line
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

exports.getFeaturedItems = async (req, res) => {
  try {
    const items = await Item.find({ status: 'approved' }).lean();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserItems = async (req, res) => {
  try {
    const items = await Item.find({ userId: req.userId }); // FIX: use req.userId
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// exports.getItemById = async (req, res) => {
//   try {
//     const item = await Item.findById(req.params.id).populate('userId', 'email');
//     if (!item) return res.status(404).json({ message: 'Item not found' });
//     res.json(item);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id).populate('userId', 'email');
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};





