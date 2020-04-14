var express = require('express');
var router = express.Router();

var updateQcTrail = require('../scripts/updateQcTrail');

/* GET home page. */
router.get('/', function (req, res, next) {
  // getQcTrail(1);
  console.log(updateQcTrail);

  res.render('index', { title: 'Express' });
});

module.exports = router;
