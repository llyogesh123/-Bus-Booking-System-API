const express = require("express");
const Booking = require("../models/Booking");
const User = require("../models/User");
const Bus = require("../models/Bus");

const router = express.Router();

router.post("/book", async (req, res) => {
  try {
    const { user, bus, seatsBooked } = req.body;

    // Validate user and bus existence
    const userDoc = await User.findOne({ name: user });
    const busDoc = await Bus.findOne({ name: bus });

    if (!userDoc || !busDoc) {
      return res.status(400).json({ message: "Invalid user or bus name" });
    }

    const booking = new Booking({ user, bus, seatsBooked });
    await booking.save();
    res.status(201).json({ message: "Booking successful" });
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