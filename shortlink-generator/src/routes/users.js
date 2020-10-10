const router = require("express").Router();
const User = require("../controllers/users")

router.post("/shortenurl",User.shortenurl)

router.post("/:id",User.count)

module.exports = router