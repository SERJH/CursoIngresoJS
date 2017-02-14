function Mostrar()
{

var sexo = prompt("Ingrese F o M.");

    while (sexo != "f" && sexo != "F" && sexo != "m" && sexo != "M") {

        var sexo = prompt("Ingrese F o M.");
        // toLowerCase toUpperCase
    }

document.getElementById("Sexo").value = sexo;

}//FIN DE LA FUNCIÓN