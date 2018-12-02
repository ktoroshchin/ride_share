const express = require('express');
const router = express.Router();
const db = require('../../db');

router.get('/', function(req, res){
  res.send('hello world')
});

module.exports = router;

