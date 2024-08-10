const express = require("express");
const { listTweets, newTweets, myTweets, deleteTweet } = require("../controllers/tweetsController");
const { listMysocial, followUser, unfollowUser } = require("../controllers/socialController");
const router = express.Router();
const { login, register } = require("../controllers/userController");


//tweets
router.get("/tweets", listTweets);
router.post("/tweets", newTweets);
router.get("/myTweets", myTweets);
router.delete("/tweets/:idTweets", deleteTweet);

//Social

router.get("/social/:uid", listMysocial);
router.post("/social", followUser);
router.delete("/social", unfollowUser);

//login
router.get("/user", login);

//register
router.post("/user/register",register );

module.exports = router;