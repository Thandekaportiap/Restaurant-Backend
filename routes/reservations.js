const express = require('express');
const Reservation = require('../models/Reservation');
const auth = require('../middleware/auth');
const router = express.Router();

// Create a reservation
router.post('/', auth, async (req, res) => {
  const { restaurantId, date, time } = req.body;
  try {
    const reservation = new Reservation({ userId: req.user.id, restaurantId, date, time });
    await reservation.save();
    res.status(201).json(reservation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;