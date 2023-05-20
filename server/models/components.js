const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BackSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
});

const Back = mongoose.model("Back", BackSchema);

module.exports = Back;


