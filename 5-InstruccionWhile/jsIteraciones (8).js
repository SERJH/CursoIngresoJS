function Mostrar()
{

	var positivo = 0;
	var negativo = 1;
	
	var respuesta = true;

	while (respuesta == true) {

		var num = prompt("Ingrese un numero:");
		respuesta = confirm("¿Seguir ingresando numeros?");
		num = parseInt(num);

		if (num >= 0) {
			positivo += num;
		} else {
			negativo *= num;
		}
	}

document.getElementById("suma").value = positivo;
document.getElementById("producto").value = negativo;

}//FIN DE LA FUNCIÓN