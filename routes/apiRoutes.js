const express = require("express");
const { listTweets, newTweets } = require("../controllers/tweetsController");
const router = express.Router();

router.get("/tweets", listTweets);

module.exports = router;