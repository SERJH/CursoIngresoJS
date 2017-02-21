var eleccionMaquina;
var contadorDeEmpates = 0;
var contadorDeGanadas = 0;
var contadorDePerdidas = 0;
var rachaEmpates = 0;
var rachaGanadas = 0;
var rachaPerdidas = 0;
var maximaRachaV = 0;
var maximaRachaD = 0;
var maximaRachaE = 0;

function comenzar()
{
	
    eleccionMaquina = Math.floor(Math.random() * 3) + 1;
    console.log(eleccionMaquina);

}

function victoria() {
        
        rachaEmpates = 0;
        rachaPerdidas = 0;
        rachaGanadas++;

        if (rachaGanadas > maximaRachaV) {

            maximaRachaV = rachaGanadas;

        }

}

function derrota() {
        
        rachaEmpates = 0;
        rachaPerdidas++;
        rachaGanadas = 0;

        if (rachaPerdidas > maximaRachaD) {

            maximaRachaD = rachaPerdidas;

        }

}

function empate() {
        
        rachaEmpates++;
        rachaPerdidas = 0;
        rachaGanadas = 0;

        if (rachaEmpates > maximaRachaE) {

            maximaRachaE = rachaEmpates;

        }

}

function piedra()
{
	
    switch (eleccionMaquina)
    {
        case 1:
        {
            alert("La máquina eligió piedra, ¡Empataste!");
            empate();
			contadorDeEmpates += 1;
            break;
        }
        
        case 2:
        {
            alert("La máquina eligió papel, ¡Perdiste!");
            derrota();
			contadorDePerdidas += 1;
            break;
        }

        case 3:
        {
            alert("La máquina eligió tijeras, ¡Ganaste!");
            victoria();
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
            victoria();
			contadorDeGanadas += 1;
            break;
        }
        
        case 2:
        {
            alert("La máquina eligió papel, ¡Empataste!");
            empate();
			contadorDeEmpates += 1;
            break;
        }

        case 3:
        {
            alert("La máquina eligió tijeras, ¡Perdiste!");
            derrota();
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
            derrota();
			contadorDePerdidas += 1;
            break;
        }
        
        case 2:
        {
            alert("La máquina eligió papel, ¡Ganaste!");
            victoria();
			contadorDeGanadas += 1;
            break;
        }

        case 3:
        {
            alert("La máquina eligió tijeras, ¡Empataste!");
            empate();
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

    
    console.log("Racha empate: "+rachaEmpates);
    console.log("Racha ganadas: "+rachaGanadas);
    console.log("Racha perdidas: "+rachaPerdidas);
    console.log("Maxima racha empates: "+maximaRachaE);
    console.log("Maxima racha ganadas: "+maximaRachaV);
    console.log("Maxima racha perdidas: "+maximaRachaD);

	comenzar();
}

