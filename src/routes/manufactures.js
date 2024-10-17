// src/routes/manufactures.js
const express = require("express");
const router = express.Router();
const manufacturesController = require("../controllers/manufactures");
const {
  validateCreateManufacture,
  validateUpdateManufacture,
} = require("../middlewares/manufactures");

// Get all manufactures
router.get("/", manufacturesController.getManufactures);

// Get a specific manufacture by ID
router.get("/:id", manufacturesController.getManufactureById);

// Create a new manufacture
router.post(
  "/",
  validateCreateManufacture,
  manufacturesController.createManufacture
);

// Update an existing manufacture by ID
router.put(
  "/:id",
  validateUpdateManufacture,
  manufacturesController.updateManufacture
);

// Delete a manufacture by ID
router.delete("/:id", manufacturesController.deleteManufacture);

module.exports = router;
