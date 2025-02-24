const express = require("express");
const Booking = require("../models/Booking");

const router = express.Router();

// Book a bus
router.post("/", async (req, res) => {
  try {
    const { user, bus, seatsBooked } = req.body;
    const booking = new Booking({ user, bus, seatsBooked });
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Cancel booking
router.delete("/:id", async (req, res) => {
  await Booking.findByIdAndDelete(req.params.id);
  res.json({ message: "Booking cancelled" });
});

module.exports = router;
