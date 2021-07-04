var express = require('express');
var dianzanController = require('../controllers/dianzan.js')
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/dianzan',dianzanController.dianzan);
// router.get('/getdianzan',dianzanController.getdianzan);

module.exports=router;