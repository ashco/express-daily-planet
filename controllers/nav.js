var express = require('express');
var router = express.Router();

var app = express();

router.get('/', function(req,res){
  res.render('articles/nav');
});

module.exports = router;