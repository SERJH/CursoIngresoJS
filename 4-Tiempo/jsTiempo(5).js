var miTemporizador ;
var contador = 0;

function inicio()
{
	alert("Comienzo de la ejecución.");
	miTemporizador = setTimeout(SegundosEnElAire, 3000);
	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {


    alert("Bienvenido a la UTN FRA");
   
}//FIN DE LA FUNCIÓN SegundosEnElAire

/*function fin()
{
	alert("Fin de la ejecución.");
	clearTimeout(miIntervalo);

}*/
//Esta funcion no sirve