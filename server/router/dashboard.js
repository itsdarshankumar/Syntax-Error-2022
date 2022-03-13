const express = require("express");
const logincontroller = require("../controller/dashboardcontroller.js");
const router = express.Router();
const dashboardcontroller = require("../controller/dashboardcontroller.js");
router.post("/search", dashboardcontroller.search);
router.post("/stock",dashboardcontroller.stock)
router.post("/",dashboardcontroller.mystocks)
module.exports = router;
