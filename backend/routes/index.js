const router = require('express').Router();

router.use('/cards', require('./stores'));

module.exports = router;
