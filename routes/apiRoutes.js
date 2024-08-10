const express = require("express");
const { listTweets, newTweets } = require("../controllers/tweetsController");
const router = express.Router();

router.get("/tweets", listTweets);
router.post("/tweets", newTweets)

module.exports = router;