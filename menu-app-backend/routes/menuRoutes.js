const express = require("express");
const Menu = require("../models/Menu");

const router = express.Router();

// Create a menu
router.post("/", async (req, res) => {
  try {
    const newMenu = new Menu(req.body);
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all menus
router.get("/", async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add item to menu
router.post("/:menuId/items", async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.menuId);
    if (!menu) {
      return res.status(404).json({ error: "Menu not found" });
    }
    menu.items.push(req.body);
    await menu.save();
    res.status(201).json(menu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get menu items
router.get("/:menuId/items", async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.menuId);
    if (!menu) {
      return res.status(404).json({ error: "Menu not found" });
    }
    res.json(menu.items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
