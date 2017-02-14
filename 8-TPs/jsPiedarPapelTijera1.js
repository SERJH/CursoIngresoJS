/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	
    eleccionMaquina = Math.floor(Math.random() * 3) + 1;
    console.log(eleccionMaquina);

}
function piedra()
{
	
    switch (eleccionMaquina)
    {
        case 1:
        {
            alert("La máquina eligió piedra, ¡Empataste!");
            comenzar();
            break;
        }
        
        case 2:
        {
            alert("La máquina eligió papel, ¡Perdiste!");
            comenzar();
            break;
        }

        case 3:
        {
            alert("La máquina eligió tijeras, ¡Ganaste!");
            comenzar();
            break;
        }
    }

}
function papel()
{

    switch (eleccionMaquina)
    {
        case 1:
        {
            alert("La máquina eligió piedra, ¡Ganaste!");
            comenzar();
            break;
        }
        
        case 2:
        {
            alert("La máquina eligió papel, ¡Empataste!");
            comenzar();
            break;
        }

        case 3:
        {
            alert("La máquina eligió tijeras, ¡Perdiste!");
            comenzar();
            break;
        }
    }

}
function tijera()
{
	
    switch (eleccionMaquina)
    {
        case 1:
        {
            alert("La máquina eligió piedra, ¡Perdiste!");
            comenzar();
            break;
        }
        
        case 2:
        {
            alert("La máquina eligió papel, ¡Ganaste!");
            comenzar();
            break;
        }

        case 3:
        {
            alert("La máquina eligió tijeras, ¡Empataste!");
            comenzar();
            break;
        }
    }

}