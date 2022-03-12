const router = require("express").Router();
const friendsController = require("../controller/friendsController");
const dashboardController = require("../controller/dashboardController");
const wishlistController = require("../controller/wishlistController");
const statusController = require("../controller/statusController");

//router.get("/", stocksview.statusController)
router.post("/buy", statusController.buystocks);
router.post("/sell", statusController.sellstocks);

module.exports = router;
