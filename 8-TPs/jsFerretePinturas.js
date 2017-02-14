/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var tempF = parseInt(document.getElementById("Temperatura").value);
    var aCent = ((tempF - 32) / 1.8);

    alert(tempF+" grados Fahrenheit son "+aCent+" grados Centigrados.");
}

function CentigradosFahrenheit () 
{
	var tempC = parseInt(document.getElementById("Temperatura").value);
    var aFah = ((tempC * 1.8) + 32);

    alert(tempC+" grados Centigrados son "+aFah+" grados Fahrenheit.");
}
