/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var tiempo;

function comenzar()
{

    tiempo = setTimeout(Responder, 4000);

    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById("PrimerNumero").value = num1;
    document.getElementById("SegundoNumero").value = num2;

    var operador = Math.floor(Math.random() * 4) + 1;

    switch (operador)
    {
        case 1:
        {
            document.getElementById("Operador").value = "+";
            respuesta = (num1 + num2);
            break;
        }

        case 2:
        {
            document.getElementById("Operador").value = "-";
            respuesta = (num1 - num2);
            break;
        }

        case 3:
        {
            document.getElementById("Operador").value = "/";
            respuesta = (num1 / num2);
            break;
        }

        case 4:
        {
            document.getElementById("Operador").value = "*";
            respuesta = (num1 * num2);
            break;
        }
    }

}

function Responder()
{

    respuestaUsuario = document.getElementById("Respuesta").value;

    if (respuestaUsuario == respuesta) {

        alert("¡Respuesta correcta!");
        clearInterval(tiempo);
        comenzar();

    } else {

        alert("Respuesta incorrecta.");
        clearInterval(tiempo);
        comenzar();

    }
    
}
