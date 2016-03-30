var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var dummy = {
		id:12,
		datetime:Date.now(),
		participants:1,
		court:{sport:'Basketball'}
	};


	res.render('index', {
		title: 'Express' ,
		events:[dummy]
	});
});

module.exports = router;
