const { Schema, model } = require("mongoose");

const CategorySchema = new Schema({
  title: { type: String, required: true },
  color: { type: String, default: "#FF9800" },
});

module.exports = model("Category", CategorySchema);
