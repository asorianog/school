var express = require('express');
var router = express.Router();

var Modelo = require('../models/alumno_model');

router.post('/', function(req, res, next) {
	var matricula = req.body.matricula;
	var password = req.body.matricula;
	Modelo.findOne({matricula: req.body.matricula},function(err1, data){
	if (data == null) {
			res.json({ success: false, message: 'Authentication failed. User not found.' });
		}else if (data != null){
			if(data.password != req.body.password){
				res.json({ success: false, message: 'Authentication failed. Wrong password.' });
			}else{
				res.json({ success: true, message: 'Authentication ok.' });
			}
		}

	});
});

module.exports = router;