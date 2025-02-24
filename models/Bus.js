const mongoose = require("mongoose");

const BusSchema = new mongoose.Schema({
  name: { type: String, required: true },
  seats: { type: Number, required: true },
  route: { type: String, required: true },
});

module.exports = mongoose.model("Bus", BusSchema);
