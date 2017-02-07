function Mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var respuesta = true;

	while (respuesta == true) {

		var num = prompt("Ingrese un numero:");
		respuesta = confirm("¿Seguir ingresando numeros?");
		num = parseInt(num);
		acumulador += num;
		contador++;

	}

document.getElementById("suma").value = acumulador;
document.getElementById("promedio").value = acumulador/contador;

}//FIN DE LA FUNCIÓN