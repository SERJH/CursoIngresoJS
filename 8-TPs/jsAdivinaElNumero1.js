/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto = 0; 
var contadorIntentos = 0;

function comenzar() {

    numeroSecreto = Math.floor(Math.random() * 100) + 1; // Math.floor(Math.random() * (max - min)) + min;
    contadorIntentos = 0;
    document.getElementById("intentos").value = contadorIntentos;
    console.log(numeroSecreto);

}

function verificar()
{

    contadorIntentos++;
    document.getElementById("intentos").value = contadorIntentos;

    var num = document.getElementById("numero").value;

    if (num == numeroSecreto) {

      if (contadorIntentos == 1) {

        alert("¡Felicidades, adivinó el número secreto en solo "+contadorIntentos+" intento!");
        comenzar();

      } else {

        alert("¡Felicidades, adivinó el número secreto en solo "+contadorIntentos+" intentos!");
        comenzar();

      }
                                                     
    } else if (num < numeroSecreto) {

      alert("El número secreto es más grande que "+num+".");

    } else {

      alert("El número secreto es más chico que "+num+".");

    }

}