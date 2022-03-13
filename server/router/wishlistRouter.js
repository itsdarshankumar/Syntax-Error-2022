const router = require("express").Router();
const wishlistController = require("../controller/wishlistController.js");

router.post("/", wishlistController.addWish);

router.post("/delete", wishlistController.deleteWish);

router.get("/", wishlistController.viewWish);

module.exports = router;
