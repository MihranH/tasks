var express = require('express');
var router = express.Router();
const tradesRouter = require('./trades');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<p>HTML Data</p>');
});

router.use('/trades', tradesRouter);

module.exports = router;
