const express = require("express");
const router = express.Router();

router.use('/bio', require('./bio'));
router.use('/newcourse', require('./newCourse'));
router.use('/newjob', require('./newJob'));
router.use('/newproject', require('./newProject'));
router.use('/newmessage', require('./newMessage'));

module.exports = router;