var express = require("express");
var router = express.Router();

router.use("/signup", require("./signup"))
router.use("/login", require("./login"))
router.use("/google", require("./google"))
router.use("/github", require("./github"))

module.exports = router;
