const express = require("express");
const Bus = require("../models/Bus");

const router = express.Router();

// Add Bus
router.post("/", async (req, res) => {
  try {
    const { name, seats, route } = req.body;
    const bus = new Bus({ name, seats, route });
    await bus.save();
    res.status(201).json(bus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Buses
router.get("/", async (req, res) => {
  const buses = await Bus.find();
  res.json(buses);
});

module.exports = router;
