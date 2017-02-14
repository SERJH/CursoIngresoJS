/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/



function Sumar () 
{
    var precio1 = parseInt(document.getElementById("PrecioUno").value);
    var precio2 = parseInt(document.getElementById("PrecioDos").value);
    var precio3 = parseInt(document.getElementById("PrecioTres").value);

	alert("Suma: "+(precio1 + precio2 + precio3));
}
function Promedio () 
{
    var precio1 = parseInt(document.getElementById("PrecioUno").value);
    var precio2 = parseInt(document.getElementById("PrecioDos").value);
    var precio3 = parseInt(document.getElementById("PrecioTres").value);

	alert("Promedio: "+(precio1 + precio2 + precio3) / 3);
}
function PrecioFinal () 
{
    var precio1 = parseInt(document.getElementById("PrecioUno").value);
    var precio2 = parseInt(document.getElementById("PrecioDos").value);
    var precio3 = parseInt(document.getElementById("PrecioTres").value);
    
	alert("Precio con IVA: "+(precio1 + precio2 + precio3) * 1.21);
}