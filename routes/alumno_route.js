var express = require('express');
var router = express.Router();

var Modelo = require('../models/alumno_model');

router.get('/', function(req,res,next){
	Modelo.find({},function(err1, data){
		if(err1)
			console.log(err1);
		res.json(data);
	});

});

router.get('/:id', function(req,res,next){
	var id = req.params.id;
	Modelo.findOne({'matricula' : id},function(err1, data){
		if(err1)
			console.log(err1);
		res.json(data);
	});

});

router.post('/',function(req,res,next){
	Modelo.create(req.body, function(err1,data){
		if (err1)
			console.log(err1);
		var objeto = req.body;
		objeto.fecha_nac = Date(req.body.fecha_nac)
		res.json(data);
	});
});

router.put('/:id', function(req,res,next){
	var id = req.params.id;
	Modelo.findOne({'matricula' : id},function(err1, data){
		if (err1)
			console.log(err1);
		
		data.apellido 	= req.body.apellido;
		data.apellido_m	= req.body.apellido_m;
		data.nombres 	= req.body.nombres;
		data.grado 		= req.body.grado;
		data.grupo		= req.body.grupo;
		data.fecha_nac 	= req.body.fecha_nac;

		Modelo.update({'matricula' : id},data,function(err1,newdata){
			if(err1)
				console.log(err1);
			res.json(newdata);
		});
	});
});

router.delete('/:id', function(req, res, next) {
	var id = req.params.id;
	Modelo.findOneAndRemove({'matricula' : id},function(err,data){
		if(err)
			console.log(err1);
		res.json(data);
		});
	});


module.exports = router;