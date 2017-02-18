/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempo;
var tiempo2;
var tiempoDemorado = 0;
function comenzar()
{
    tiempoDemorado = 0;
    var ColorRandom = Math.floor(Math.random() * 6) + 1;

    switch (ColorRandom) {

        case 1:
        {
            ColorSecreto = "azul";
            break;
        }

        case 2:
        {
            ColorSecreto = "amarillo";
            break;
        }

        case 3:
        {
            ColorSecreto = "marron";
            break;
        }

        case 4:
        {
            ColorSecreto = "verde";
            break;
        }

        case 5:
        {
            ColorSecreto = "celeste";
            break;
        }

        case 6:
        {
            ColorSecreto = "rojo";
            break;
        }

    }

    document.getElementById("ColorElejido").value = ColorSecreto;

    tiempo = setInterval(segundos, 100);

}

function segundos() {

    tiempoDemorado += 0.1;
    console.log(tiempoDemorado);

}

function Responder(colorParametro)
{
	
    if (colorParametro == ColorSecreto) {

        clearInterval(tiempo);
        clearInterval(tiempo2);
        alert("Demoraste "+tiempoDemorado.toFixed(1)+" segundos.");
        comenzar();

    }

}
