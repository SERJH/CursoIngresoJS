function Mostrar()
{

	var maximo = 0;
	var minimo = 0;	
	var respuesta = true;

	while (respuesta == true) {

		var num = prompt("Ingrese un numero:");
		respuesta = confirm("¿Seguir ingresando numeros?");
		num = parseInt(num);

		if (num > maximo) {
			maximo = num;
		} 

		if (num < minimo) {
			minimo = num;
		}
	}

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;

}