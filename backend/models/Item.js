const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  type: String,
  size: String,
  condition: String,
  tags: [String],
  image: String, // base64 string or Cloudinary URL
  uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, default: 'pending' }, // pending, approved, rejected
  availability: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
