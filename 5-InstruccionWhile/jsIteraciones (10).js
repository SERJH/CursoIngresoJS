function Mostrar()
{

	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var cantPositivos = 0;
	var cantNegativos = 0;
	var cantCeros = 0;
	var cantPares = 0;
	var promPositivos = 0;
	var promNegativos = 0;

	var respuesta = true;

	while (respuesta == true) {

		var num = prompt("Ingrese un numero:");
		respuesta = confirm("¿Seguir ingresando numeros?");
		num = parseInt(num);

		if (num < 0) {
			sumaNegativos += num;
			cantNegativos++;
		} else if (num > 0) {
			sumaPositivos += num;
			cantPositivos++;
		} else {
			cantCeros++;
		}

		if ((num % 2) == 0) {
			cantPares++;
		} 

	}

	promPositivos = sumaPositivos / cantPositivos;
	promNegativos = sumaNegativos / cantNegativos;

	document.write();





}//FIN DE LA FUNCIÓN