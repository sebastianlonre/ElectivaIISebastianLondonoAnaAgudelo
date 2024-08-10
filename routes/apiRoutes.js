const express = require("express");
const { listTweets, newTweets } = require("../controllers/tweetsController");
const router = express.Router();
const { login, register } = require("../controllers/userController");

router.get("/tweets", listTweets);

//login
router.get("/user", login);

//register
router.post("/user/register",register );

module.exports = router;