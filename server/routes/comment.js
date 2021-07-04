var express = require('express');
var commentController = require('../controllers/comment.js')
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/docomment',commentController.docomment);
router.get('/getcomment',commentController.getcomment);

module.exports=router;