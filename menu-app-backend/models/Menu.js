const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const MenuSchema = new mongoose.Schema({
  name: String,
  description: String,
  items: [MenuItemSchema],
});

const Menu = mongoose.model("Menu", MenuSchema);
module.exports = Menu;
