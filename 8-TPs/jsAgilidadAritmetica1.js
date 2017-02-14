/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;

function comenzar()
{

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
        comenzar();

    } else {

        alert("Respuesta incorrecta.");

    }
    
}
