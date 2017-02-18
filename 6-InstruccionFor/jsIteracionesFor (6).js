function Mostrar()
{

    var num = prompt("Ingrese un número:");
    var pares = [];
    var cantPares = 0;

    for (var i = 1; i <= num; i++) {

        if ((i % 2) == 0) {

            console.log(i);
            pares.push(i);
            cantPares++;

        }
    }

    console.log("Cantidad de pares: "+cantPares);
    console.log(pares);
    alert("Números pares desde el 1 hasta su número: "+pares.join(", ")+".");
    alert("Cantidad de números pares: "+cantPares+".");

}//FIN DE LA FUNCIÓN