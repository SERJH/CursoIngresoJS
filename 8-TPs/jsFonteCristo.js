/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/



function NumerosPares() {

    var num = parseInt(document.getElementById("numero").value);
    var pares = [];
    var cantPares = 0;

    for (var i = num; i >= 0; i--) {

        if ((i % 2) == 0) {

            console.log(i);
            pares.push(i);
            cantPares++;

        }
    }

    console.log("Cantidad de pares: "+cantPares);
    console.log(pares);
    alert("Números pares desde su número hasta 0: "+pares.join(", ")+".");
    alert("Cantidad de números pares: "+cantPares+".");

}

function NumerosImpares() {

    var num = parseInt(document.getElementById("numero").value);
    var impares = [];
    var cantImpares = 0;

    for (var i = num; i >= 0; i--) {

        if ((i % 2) != 0) {

            console.log(i);
            impares.push(i);
            cantImpares++;

        }
    }

    console.log("Cantidad de impares: "+cantImpares);
    console.log(impares);
    alert("Números impares desde su número hasta 0: "+impares.join(", ")+".");
    alert("Cantidad de números impares: "+cantImpares+".");

}

function NumerosDivisibles() {

    var num = parseInt(document.getElementById("numero").value);
    var divisibles = [];
    var cantDivisibles = 0;

    for (var i = 1; i <= 100; i++) {

        if ((i % num) == 0) {

            console.log(i);
            divisibles.push(i);
            cantDivisibles++;

        }
    }

    console.log("Cantidad de divisibles: "+cantDivisibles);
    console.log(divisibles);
    alert("Números divisibles por su número: "+divisibles.join(", ")+".");
    alert("Cantidad de números divisibles por su número: "+cantDivisibles+".");

}

function VerificarPrimo() {

    var num = parseInt(document.getElementById("numero").value);
    var cantDivisores = 0;

    for (var i = 1; i <= num; i++) {

        if ((num % i) == 0) {

            console.log(i);
            cantDivisores++;

        }
    }

    if (cantDivisores == 2) {

        alert("El número es primo.");

    } else {
        
        alert("El número no es primo.");

    }

    console.log("Cantidad de divisores: "+cantDivisores);

}

function VerificarPrimoDos(i) {

    var cantDivisores = 0;

    for (var j = 1; j <= i; j++) {

        if ((i % j) == 0) {

            console.log(j);
            cantDivisores++;

        }
    }

    return cantDivisores;

}

function NumerosPrimos() {

    var num = parseInt(document.getElementById("numero").value);
    var primos = [];
    var cantPrimos = 0;

    for (var i = num; i >= 0; i--) {

        if (VerificarPrimoDos(i) == 2) {

            console.log(i);
            primos.push(i);
            cantPrimos++;

        }
    }

    console.log("Cantidad de números primos: "+cantPrimos);
    console.log(primos);
    alert("Números primos desde su número hasta 0: "+primos.join(", ")+".");
    alert("Cantidad de números primos: "+cantPrimos+".");

}