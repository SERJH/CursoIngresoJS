function Mostrar()
{

    var num = prompt("Ingrese un número:");
    var divisores = [];
    var cantDivisores = 0;

    for (var i = 1; i <= num; i++) {

        if ((num % i) == 0) {

            console.log(i);
            divisores.push(i);
            cantDivisores++;

        }
    }

    console.log("Cantidad de divisores: "+cantDivisores);
    console.log(divisores);
    alert("Divisores desde el 1 hasta su número: "+divisores.join(", ")+".");
    alert("Cantidad de divisores: "+cantDivisores+".");

}//FIN DE LA FUNCIÓN