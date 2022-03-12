const router = require("express").Router();
const con = require("../../database");
const dashboardController = require("../controller/dashboardController");
const friendsController = require("../controller/friendsController");
const wishlistController = require("../controller/wishlistController");
const statusController=require("../controller/statusController")

router.post("/", wishlistController.addWish);

router.post("/delete", wishlistController.deleteWish);

module.exports = router;
