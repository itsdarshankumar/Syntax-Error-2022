const router = require("express").Router();
const friendsController = require("../controller/friendsController");
const dashboardController = require("../controller/dashboardController");
const wishlistController = require("../controller/wishlistController");
const statusController=require("../controller/statusController")

router.post("../search", dashboardController.search);
router.get("/", friendsController.friendsview);
router.post("../stock", dashboardController.stock);
//router.get("../", dashboardController.dashboardview);
router.post("/search", friendsController.search);

module.exports = router;
