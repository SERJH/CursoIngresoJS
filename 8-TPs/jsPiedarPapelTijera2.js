var eleccionMaquina;
var contadorDeEmpates = 0;
var contadorDeGanadas = 0;
var contadorDePerdidas = 0;

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
			contadorDeEmpates += 1;
            break;
        }
        
        case 2:
        {
            alert("La máquina eligió papel, ¡Perdiste!");
			contadorDePerdidas += 1;
            break;
        }

        case 3:
        {
            alert("La máquina eligió tijeras, ¡Ganaste!");
			contadorDeGanadas += 1;
            break;
        }
    }

	resultado();

}
function papel()
{

    switch (eleccionMaquina)
    {
        case 1:
        {
            alert("La máquina eligió piedra, ¡Ganaste!");
			contadorDeGanadas += 1;
            break;
        }
        
        case 2:
        {
            alert("La máquina eligió papel, ¡Empataste!");
			contadorDeEmpates += 1;
            break;
        }

        case 3:
        {
            alert("La máquina eligió tijeras, ¡Perdiste!");
			contadorDePerdidas += 1;
            break;
        }
    }

	resultado();

}
function tijera()
{
	
    switch (eleccionMaquina)
    {
        case 1:
        {
            alert("La máquina eligió piedra, ¡Perdiste!");
			contadorDePerdidas += 1;
            break;
        }
        
        case 2:
        {
            alert("La máquina eligió papel, ¡Ganaste!");
			contadorDeGanadas += 1;
            break;
        }

        case 3:
        {
            alert("La máquina eligió tijeras, ¡Empataste!");
			contadorDeEmpates += 1;
            break;
        }
    }

	resultado();

}

function resultado() {

	document.getElementById("ganadas").value = contadorDeGanadas+" Partidas ganadas.";
	document.getElementById("perdidas").value = contadorDePerdidas+" Partidas perdidas.";
	document.getElementById("empatadas").value = contadorDeEmpates+" Partidas empatadas.";

	comenzar();
}

