/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1 = parseInt(document.getElementById("numeroUno").value);
	var numero2 = parseInt(document.getElementById("numeroDos").value);

	var numeroTotal = numero1 + numero2;

	alert("La suma es: "+numeroTotal);
}

function restar()
{
	var numero1 = parseInt(document.getElementById("numeroUno").value);
	var numero2 = parseInt(document.getElementById("numeroDos").value);

	var numeroTotal = numero1 - numero2;

	alert("La resta es: "+numeroTotal);
}

function multiplicar()
{ 
	var numero1 = parseInt(document.getElementById("numeroUno").value);
	var numero2 = parseInt(document.getElementById("numeroDos").value);

	var numeroTotal = numero1 * numero2;

	alert("La multiplicacion es: "+numeroTotal);
}

function dividir()
{
	var numero1 = parseInt(document.getElementById("numeroUno").value);
	var numero2 = parseInt(document.getElementById("numeroDos").value);

	var numeroTotal = numero1 / numero2;

	alert("La division es: "+numeroTotal);
}

