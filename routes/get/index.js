const express = require("express");
const router = express.Router();

router.use('/bio', require('./bio'));
router.use('/courses', require('./courses'));
router.use('/jobs', require('./jobs'));
router.use('/projects', require('./projects'));

module.exports = router;