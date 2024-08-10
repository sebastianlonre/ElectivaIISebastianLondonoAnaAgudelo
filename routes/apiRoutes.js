const express = require("express");
const { listTweets, newTweets, myTweets, deleteTweet } = require("../controllers/tweetsController");
const { listMysocial, followUser } = require("../controllers/socialController");
const router = express.Router();


//tweets
router.get("/tweets", listTweets);
router.post("/tweets", newTweets);
router.get("/myTweets", myTweets);
router.delete("/tweets/:idTweets", deleteTweet);

//Social

router.get("/social/:uid", listMysocial);
router.post("/social", followUser)

module.exports = router;