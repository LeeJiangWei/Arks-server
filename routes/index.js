var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//let dataPath = path.join(__dirname,'ark.json');
let dataPath = 'ark.json';
let operatorList = JSON.parse(fs.readFileSync(dataPath,'utf-8'));

router.get('/operator-detail', function (req, res, next) {
  let name = req.query.name;
  for (let i = 0; i < operatorList.length; i++) {
    if (operatorList[i].name_zh === name) {
      res.json(operatorList[i]);
    }
  }
});

module.exports = router;
