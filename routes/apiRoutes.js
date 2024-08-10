const express = require("express");
const { listTweets, newTweets, myTweets, deleteTweet } = require("../controllers/tweetsController");
const router = express.Router();


//tweets
router.get("/tweets", listTweets);
router.post("/tweets", newTweets);
router.get("/myTweets", myTweets);
router.delete("/tweets/:idTweets", deleteTweet);

module.exports = router;