const router = require("express").Router();
const con = require("../../database");
const dashboardController = require("../controllers/dashboardController");
const friendsController = require("../controllers/friendsController");
const wishlistController = require("../controllers/wishlistController");
const statusController=require("../controllers/statusController")

router.post("/", wishlistController.addWish);

router.post("/delete", wishlistController.deleteWish);

module.exports = router;
