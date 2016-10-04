var mongoose = require('mongoose');
var schema = mongoose.Schema;

var alumno = new  schema({

	matricula 	: {type : String, unique : true, required: true },
	apellido 	: String,
	apellido_m	: String,
	nombres 	: String,
	grado 		: Number,
	grupo		: String,
	fecha_nac 	: Date,
	password	: {type : String, required: true }
	
});

var Estudiante = mongoose.model("Estudiante", alumno);

module.exports = Estudiante;