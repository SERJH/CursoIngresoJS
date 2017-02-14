/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar() {

    numeroSecreto = Math.floor((Math.random()) * 100) + 1;
    contadorIntentos = 0;
    console.log(numeroSecreto);

}

function verificar()
{

    contadorIntentos += 1;
    document.getElementById("intentos").value = contadorIntentos;

    var num = document.getElementById("numero").value;

    if (num == numeroSecreto) {

	  switch (contadorIntentos) 
	  {
		  case 1:
		  {
		      alert("Ha adivinado el número en un solo intento, usted es un psíquico.");
			  break;
		  }

		  case 2:
		  {
			  alert("Ha adivinado el número en sólo dos intentos, excelente percepción.");
			  break;
		  }

		  case 3:
		  {
			  alert("Ha adivinado el número en sólo tres intentos, esto es suerte."); 
			  break;
		  }

		  case 4:
		  {
			  alert("Ha adivinado el número en cuatro intentos, excelente técnica.");
			  break;
		  }

		  case 5:
		  {
			  alert("Ha adivinado el número en cinco intentos, usted está en la media.");
			  break;
		  }

		  case 6:
		  case 7:
		  case 8:
		  case 9:
		  case 10:
		  {
			  alert("Has adivinado el número, sin embargo le hace falta técnica.");
			  break;
		  }

		  default :
		  {
			  alert("Afortunado en el amor...");
			  break;
		  }
	  }	
      

    } else if (num < numeroSecreto) {

      alert("El número secreto es más grande que "+num+".");

    } else {

      alert("El número secreto es más chico que "+num+".");

    }

}