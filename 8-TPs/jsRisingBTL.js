/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 
var edad = 0;
var sexo;
var estadoCivil;
var sueldo = 0;
var numLegajo = 0;
var nacionalidad;;

    while (edad < 18 || edad > 90) {

        edad = prompt("Ingrese su edad, la misma debe estar entre los 18 y 90 años.");

    }

    while (sexo != "M" && sexo != "F") {

        sexo = prompt("Ingrese su sexo. M para masculino, F para femenino.").toUpperCase();

    } 

    while (estadoCivil != 1 && estadoCivil != 2 && estadoCivil != 3 && estadoCivil != 4) {

        estadoCivil = parseInt(prompt("Ingrese su estado civil. 1 para soltero, 2 para casado, 3 para divorciado y 4 para viudo."));

    }

    while (sueldo < 8000) {

        sueldo = prompt("Ingrese su sueldo bruto, el mismo no puede ser menor a 8000.");

    }

    while (numLegajo < 1000 || numLegajo > 9999) {

        numLegajo = parseInt(prompt("Ingrese su numero de legajo. El mismo debe poseer 4 cifras y no contener un 0 a la izquierda."));

    }

    while (nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N") {

        nacionalidad = prompt("Ingrese su nacionalidad. A para Argentino, E para extrangero y N para nacionalizado.").toUpperCase();

    }

    switch (estadoCivil) {

        case 1:
        {
            document.getElementById("EstadoCivil").value = "Soltero";
            break;
        }

        case 2:
        {
            document.getElementById("EstadoCivil").value = "Casado";
            break;
        }

        case 3:
        {
            document.getElementById("EstadoCivil").value = "Divorciado";
            break;
        }

        case 4:
        {
            document.getElementById("EstadoCivil").value = "Viudo";
            break;
        }
        

    }

    document.getElementById("Edad").value = edad;
    document.getElementById("Sexo").value = sexo;
    document.getElementById("Sueldo").value = sueldo;
    document.getElementById("Legajo").value = numLegajo;
    document.getElementById("Nacionalidad").value = nacionalidad;
    

}
