const express = require("express");
const carsRouter = require("./manufactures");

const router = express.Router();

router.use("/manufactures", carsRouter);

module.exports = router;
