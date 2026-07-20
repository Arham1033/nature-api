const mongoose = require("mongoose");

const DestinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  destination: String,
  message: String,
});

module.exports = mongoose.model("Destination", DestinationSchema);