const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  cuisine: { type: String, required: true },
  slots: [{ date: String, time: String, available: Boolean }],
});

module.exports = mongoose.model('Restaurant', restaurantSchema);