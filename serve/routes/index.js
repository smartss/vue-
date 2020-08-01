var express = require('express');
var router = express.Router();

router.use('/hot',require("./hot/index"))
router.use('/song',require("./song/index"))
router.use('/singer',require("./singer/index"))
router.use('/Search',require("./search/index"))
router.use('/collect',require("./collect/index"))

module.exports = router;
