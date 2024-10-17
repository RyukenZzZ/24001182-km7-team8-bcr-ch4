const express = require("express");
const carsRouter = require("./cars");
const carsRouter = require("./manufactures");

const router = express.Router();

router.use("/cars", carsRouter);
router.use("/manufactures", carsRouter);

module.exports = router;
