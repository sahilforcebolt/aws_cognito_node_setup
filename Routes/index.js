const express = require("express")
const home =require("../controller/home")
const auth =require("../controller/auth")
const router= express.Router();

router.route("/login").get(home.data)
router.route("/signup").post(auth.signUp)
router.route("/signup").post(auth.signIn)
router.route("/signup").post(auth.verify)
module.exports = router;