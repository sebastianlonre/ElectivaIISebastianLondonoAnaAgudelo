const express = require("express");
const { listTweets, newTweets, myTweets } = require("../controllers/tweetsController");
const router = express.Router();

router.get("/tweets", listTweets);
router.post("/tweets", newTweets);
router.get("/myTweets", myTweets);

module.exports = router;