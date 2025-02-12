const express = require('express');
const Review = require('../models/Review');
const auth = require('../middleware/auth');
const router = express.Router();

// Add a review
router.post('/', auth, async (req, res) => {
  const { restaurantId, rating, comment } = req.body;
  try {
    const review = new Review({ userId: req.user.id, restaurantId, rating, comment });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;