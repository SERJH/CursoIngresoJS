    var nota;
    var sumaNotas = 0;
    var sumaAprobados = 0;
    var promedio = 0;
    var cantAlumnos = 0;
    var respuesta = true;

function Mostrar()
{
    /*for (var i = 1; i <= 10; i++) {

        alert(i);

    }*/
    while (respuesta == true) {

        nota = parseInt(prompt("Ingrese la nota:"));
        while (nota < 1 || nota > 10) {

            nota = parseInt(prompt("Nota no válida, ingrese una nota entre 1 y 10:"));

        }
        respuesta = confirm("¿Seguir ingresando notas?");

        if (nota >= 7) {

            sumaAprobados++;

        }
        sumaNotas += nota;
        cantAlumnos++;
    }

    promedio = sumaNotas / cantAlumnos;

    alert("Cantidad de aprobados: "+sumaAprobados);
    alert("Promedio de notas: "+promedio);
}

