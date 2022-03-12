const router = require("express").Router();
const statusController = require("../controller/statusController.js");

router.post("/buy", statusController.buystocks);
router.post("/sell", statusController.sellstocks);

module.exports = router;
