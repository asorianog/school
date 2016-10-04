var express = require('express');
var router = express.Router();

var Modelo = require('../models/horario_model');

router.get('/', function(req,res,next){
	Modelo.find({},function(err1, data){
		if(err1)
			console.log(err1);
		res.json(data);
	});

});

router.get('/:id', function(req,res,next){
	var id = req.params.id;
	Modelo.findOne({'mat_clave' : id},function(err1, data){
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
		res.json(data);
	});
});

router.put('/:id', function(req,res,next){
	var id = req.params.id;
	Modelo.findOne({'mat_clave' : id},function(err1, data){
		if (err1)
			console.log(err1);
		
		data.materia 				= req.body.materia;
		data.dia_semana 			= req.body.dia_semana;
		data.hora_ini				= req.body.hora_ini;
		data.hora_fin				= req.body.hora_fin;
		data.grado 					= req.body.grado;
		data.grupo					= req.body.grupo;	
		data.profesor.nombre		= req.body.profesor.nombre;
		data.profesor.aplellido		= req.body.profesor.aplellido;
		data.profesor.apellido_m	= req.body.profesor.apellido_m;

		
		Modelo.update({'mat_clave' : id},data,function(err1,newdata){
			if(err1)
				console.log(err1);
			res.json(newdata);
		});
	});
});

router.delete('/:id', function(req, res, next) {
	var id = req.params.id;
	Modelo.findOneAndRemove({'mat_clave' : id},function(err,data){
		if(err)
			console.log(err1);
		res.json(data);
		});
	});


module.exports = router;