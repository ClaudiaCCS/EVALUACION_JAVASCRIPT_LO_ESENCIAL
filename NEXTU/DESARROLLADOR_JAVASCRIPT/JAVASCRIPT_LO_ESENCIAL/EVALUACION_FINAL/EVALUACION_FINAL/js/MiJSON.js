var jsonEstudiante = '['+
'{"codigo":"40126", "nombre":"Manuel Ramírez", "nota":"6"},'+
'{"codigo":"13222", "nombre":"Carolina Gutiérrez", "nota":"10"},'+
'{"codigo":"56890", "nombre":"Cintia Montoya", "nota":"9"},'+
'{"codigo":"48350", "nombre":"Teresa del Moral", "nota":"8"},'+
'{"codigo":"42896", "nombre":"Eduardo Gama", "nota":"5"},'+
'{"codigo":"20356", "nombre":"Sergio Ruiz", "nota":"7"},'+
'{"codigo":"78952", "nombre":"Carmen Sanchez", "nota":"8"},'+
'{"codigo":"45826", "nombre":"Pilar Vázquez", "nota":"9"},'+
'{"codigo":"58974", "nombre":"Andres Campos", "nota":"10"},'+
'{"codigo":"48952", "nombre":"Leonardo Roque", "nota":"8"}'+']';

var jsObj = JSON.parse(jsonEstudiante);

function leerJSON(json) {
	var out="---------Estudiantes---------<br>";
	var i;
	

	document.getElementById("resultados").innerHTML=out;
	document.getElementById("resultados").innerHTML=json.length;
		
	for (i=0; i<json.length; i++) {
		out+="codigo: "+ json[i].codigo +" - "+
		"nombre: "+ json[i].nombre + " - "+
		"nota: " + json[i].nota + "<br>";
	}
	document.getElementById("resultados").innerHTML = out;
}

function notaPROMEDIO(json) {

	var suma=0;
	var out="-----PROMEDIO DE NOTAS-----<br>";
	var i;
		for (i=0; i<json.length; i++) {
		suma=suma+ parseInt(json[i].nota);
	}

	out = out + (suma/json.length);

	document.getElementById("resultados").innerHTML=out;
}

function notaMAYOR(json) {
			
	var mayor=0;
	var i;

	for (i=0; i<json.length; i++) {

		if (mayor < parseInt(json[i].nota)) {
			mayor = parseInt(json[i].nota);
		} 

	}
	var out="---------Estudiantes con mejores notas---------<br>";
			

		
	for (i=0; i<json.length; i++) {

		if (parseInt(json[i].nota) == mayor) {

			out+="codigo: "+ json[i].codigo +" - "+
			"nombre: "+ json[i].nombre + " - "+
			"nota: " + json[i].nota + "<br>";
		}
	}
	document.getElementById("resultados").innerHTML = out;
}

function notaMENOR(json) {
			
	var menor = 10;
	var i;

	for (i=0; i<json.length; i++) {

		if (menor > parseInt(json[i].nota)) {
			menor = parseInt(json[i].nota);
		} 
	}


	var out="---------Estudiantes con la menor nota---------<br>";
			

		
	for (i=0; i<json.length; i++) {

		if (parseInt(json[i].nota) == menor) {
			out+="codigo: "+ json[i].codigo +" - "+
			"nombre: "+ json[i].nombre + " - "+
			"nota: " + json[i].nota + "<br>";
		}
	}
	document.getElementById("resultados").innerHTML = out;
}