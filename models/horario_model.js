var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Horario = new  schema({

	mat_clave	: {type : String, unique : true, required: true},
	materia 	: String,
	dia_semana 	: String,
	hora_ini	: String,
	hora_fin	: String,
	grado 		: Number,
	grupo		: String,
	profesor	: 
	{
		nombre 		: String,
		aplellido 	: String,
		apellido_m	: String

	}
});

var horario = mongoose.model("horario", Horario);

module.exports = horario;