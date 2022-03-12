const router = require("express").Router();
const friendsController = require("../controllers/friendsController");
const dashboardController = require("../controllers/dashboardController");
const wishlistController = require("../controllers/wishlistController");
const statusController=require("../controllers/statusController")

router.post("../search", dashboardController.search);
router.get("/", friendsController.friendsview);
router.post("../stock", dashboardController.stock);
//router.get("../", dashboardController.dashboardview);
router.post("/search", friendsController.search);

module.exports = router;
