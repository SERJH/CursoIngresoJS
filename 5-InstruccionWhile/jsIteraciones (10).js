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
	var diferencia = 0;

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
	diferencia = sumaPositivos - sumaNegativos;

	document.write("<h2>Suma de negativos:</h2>"+sumaNegativos);
	document.write("<h2>Suma de positivos:</h2>"+sumaPositivos);
	document.write("<h2>Cantidad de positivos:</h2>"+cantPositivos);
	document.write("<h2>Cantidad de negativos:</h2>"+cantNegativos);
	document.write("<h2>Cantidad de ceros:</h2>"+cantCeros);
	document.write("<h2>Cantidad de pares:</h2>"+cantPares);
	document.write("<h2>Promedio de positivos:</h2>"+promPositivos);
	document.write("<h2>Promedio de negativos:</h2>"+promNegativos);
	document.write("<h2>Diferencia entre positivos y negativos:</h2>"+diferencia);

}