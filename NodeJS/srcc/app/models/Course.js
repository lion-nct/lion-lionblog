
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxLength: 255 }, // dinh nghia toi da ki tu
  description: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 255 },
  createAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

//Models
module.exports = mongoose.model("Course", Course);
