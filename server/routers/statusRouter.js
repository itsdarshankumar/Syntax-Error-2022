const router = require("express").Router();
const friendsController = require("../controllers/friendsController");
const dashboardController = require("../controllers/dashboardController");
const wishlistController = require("../controllers/wishlistController");
const statusController = require("../controllers/statusController");

//router.get("/", stocksview.statusController)
router.post("/buy", statusController.buystocks);
router.post("/sell", statusController.sellstocks);

module.exports = router;
