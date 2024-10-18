const express = require("express");
const carsRouter = require("./type");

const router = express.Router();

router.use("/type", carsRouter);

module.exports = router;
