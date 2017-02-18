function Mostrar()
{

    var num = prompt("Ingrese un número:");
    var cantDivisores = 0;

    for (var i = 1; i <= num; i++) {

        if ((num % i) == 0) {

            console.log(i);
            cantDivisores++;

        }
    }

    console.log("Cantidad de divisores: "+cantDivisores);

    if (cantDivisores == 2) {

        alert("El número es primo.");

    } else {

        alert("El número no es primo.");

    }

    

}//FIN DE LA FUNCIÓN