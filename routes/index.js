var express = require('express');
var router = express.Router();
var standupCtrl = require('../controller/standup.server.controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*Get new note page */
router.get('/newnote', function(req,res){
   return standupCtrl.getNote(req,res); 
}); 

/*Post new note page */ 
router.post('/newnote', function(req,res){
  return standupCtrl.create(req,res); 
});

module.exports = router;
