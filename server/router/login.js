const express = require("express");
const logincontroller = require("../controller/logincontroller.js");
const router = express.Router();
router.get("/",logincontroller.loginview)
router.post("/", logincontroller.login);
router.post('/signup',logincontroller.signup)
router.post('/signup',logincontroller.singupview)
router.post('/logout',logincontroller.logout)
module.exports = router;
