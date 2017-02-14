/*2.	Para el departamento de Construcción:
A.	Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo = parseInt(document.getElementById("Largo").value);
    var ancho = parseInt(document.getElementById("Ancho").value);
    var perimetro = ((largo * 2) + (ancho * 2));

    alert("Cantidad de alambre a comprar: "+perimetro+" mts. Es decir, tres hilos de "+(perimetro / 3)+" mts. c/u");

}
function Circulo () 
{
	var radio = parseInt(document.getElementById("Radio").value);
    var perimetro = (2 * 3.14 * radio);

    alert("Cantidad de alambre a comprar: "+perimetro+" mts. Es decir, tres hilos de "+(perimetro / 3)+" mts. c/u");
}

function Materiales () 
{
	var largo = parseInt(document.getElementById("Largo").value);
    var ancho = parseInt(document.getElementById("Ancho").value);
    var area = (largo * ancho);
    var cemento = (area * 2);
    var cal = (area * 3);

    alert("Para el terreno de "+largo+" x "+ancho+" se necesitan: "
          +cemento+" bolsas de cemento y "+cal+" bolsas de cal.");
}