const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  user: { type: String, required: true }, // Changed to String
  bus: { type: String, required: true },  // Changed to String
  seatsBooked: { type: Number, required: true },
});

module.exports = mongoose.model("Booking", BookingSchema);