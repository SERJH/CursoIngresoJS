var miIntervalo ;
var contador = 0;

function inicio()
{
	alert("Comienzo de la ejecución.");
	miIntervalo = setInterval(SegundosEnElAire, 2000);
	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {

	contador += 1;
    alert("Bienvenido a la UTN FRA. Cantidad: "+contador);

    if (contador == 5)
    {
    	clearInterval(miIntervalo);
    }

}//FIN DE LA FUNCIÓN SegundosEnElAire

function fin()
{
	alert("Fin de la ejecución.");
	clearInterval(miIntervalo);

}//FIN DE LA FUNCIÓN fin