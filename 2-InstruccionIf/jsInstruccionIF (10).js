function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota = Math.floor((Math.random() * 10) + 1);

	if (nota >= 9) {
		alert("Nota: "+nota+". EXCELENTE.");
	} else if (nota < 4) {
		alert("Nota: "+nota+". Vamos, la próxima se puede.");
	} else {
		alert("Nota: "+nota+". APROBADO.");
	}

}//FIN DE LA FUNCIÓN