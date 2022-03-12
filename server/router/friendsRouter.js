const router = require("express").Router();
const friendsController = require("../controller/friendsController.js");
const dashboardController = require("../controller/dashboardController.js");
router.get("/", friendsController.friendsview);
router.post("/search", friendsController.search);

module.exports = router;