//////////     Entrada y salida     //////////

//////////     1:     //////////

function perimetro() {

    var baseCuadrado = parseInt(document.getElementById("base").value); // Preguntar del parseInt
    var perimetroCuadrado = baseCuadrado * 4;

    alert("El perimetro es: "+perimetroCuadrado);

}

//////////     2:     //////////

function sumaIva() {

    var precio = parseInt(prompt("Ingrese el precio del producto:"));
    var precioMasIva = precio * 1.21;

    alert("El precio final es: "+precioMasIva);

}

//////////     3:     //////////

function alambrado() {

    var largo = parseInt(document.getElementById("largo").value);
    var ancho = parseInt(document.getElementById("ancho").value);

    var perimetro = (largo * 2) + (ancho * 2);
    var cantPorHilo = (perimetro / 3);

    alert("Se necesitan "+perimetro+" metros de alambre. Es decir 3 hilos de "+cantPorHilo+" metros.");

}

//////////     IF - SWITCH     //////////

//////////     4:     //////////

function numeros() {

    var num1 = parseInt(prompt("Ingrese el primer número:"));
    var num2 = parseInt(prompt("Ingrese el segundo número:"));
    var numFinal;

    if (num1 == num2) {

        numFinal = num1 * num2;

    } else if (num1 > num2) {

        numFinal = num1 - num2;

    } else {

        numFinal = num1 + num2;

    }

    document.write("Resultado: "+numFinal);

}

//////////     5:     //////////

function semana() {

    var dia = prompt("Ingrese el día de la semana").toLowerCase();

    switch (dia) 
    {

        case "sabado":
        case "domingo":

            alert("Es fin de semana.");
            break;

        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":

            alert("¡A trabajar!");
            break;

    }

}

//////////     Iteraciones - Validaciones máximos y mínimos     //////////

//////////     6:     //////////

function ventas() {

    var contador = 0;
    var mayor;
    var menor;
    var primera = true;
    var venta;

    while (contador < 24) {

        contador++;
        venta = prompt("Ingrese el importe de ventas del día "+contador+":");

        if (primera) {

            primera = false;
            while (venta <= 0) {

                venta = prompt("Ingrese el importe de ventas del día "+contador+":");

            }
            
            mayor = venta;
            menor = venta;

        }

        while (venta <= 0) {

                venta = prompt("Ingrese el importe de ventas del día "+contador+":");

            }

        if (venta > mayor) {

            mayor = venta;

        } else if (venta < menor) {

            menor = venta;

        }

    }

    alert("Mayor importe: "+mayor);
    alert("Menor importe: "+menor);

}

//////////     7:     //////////

function notas() {

    var contador = 0;
    var nota;
    var sexo;
    var promedio;
    var notaMasBaja;
    var sumaNotas = 0;
    var varonesMayor6 = 0;
    var primera = true;

    while (contador < 10) {

        contador++;
        nota = parseInt(prompt("Ingrese la nota del alumno "+contador+":"));
        sexo = prompt("Ingrese el sexo del alumno "+contador+":").toLowerCase();

        if (primera) {

            primera = false;
            while (nota < 0 || nota > 10 || isNaN(nota) == true)  {

                nota = parseInt(prompt("Error. Ingrese la nota del alumno "+contador+":"));

            }

            while (sexo != "m" && sexo != "f") {

                sexo = prompt("Error. Ingrese el sexo del alumno "+contador+":").toLowerCase();

            }
            
            notaMasBaja = nota;

        }

        while (nota < 0 || nota > 10 || isNaN(nota) == true)  {

            nota = parseInt(prompt("Error. Ingrese la nota del alumno "+contador+":"));

        }

        while (sexo != "m" && sexo != "f") {

            sexo = prompt("Error. Ingrese el sexo del alumno "+contador+":").toLowerCase();

        }

        sumaNotas += nota;

        if (nota < notaMasBaja) {

            notaMasBaja = nota;

        }

        if (sexo == "m" && nota >= 6) {

            varonesMayor6++;

        }

    }

    promedio = sumaNotas / 10;

    console.log("Promedio: "+promedio);
    console.log("Nota más baja: "+notaMasBaja);
    console.log("Varones con nota mayor a 6: "+varonesMayor6);

}

//////////     8:     //////////

function ingreso() {

    var respuesta = true;
    var num = -1;
    var cantPares = 0;
    var promedio;
    var sumaNumeros = 0;
    var maximo;
    var minimo;
    var primer = true;
    var cantNumeros = 0;

    while (respuesta) {

        num = parseInt(prompt("Ingrese un número positivo: "));

        while (num <= 0) {

            num = parseInt(prompt("Ingrese un número positivo: "));

        }

        respuesta = confirm("¿Seguir ingresando numeros?");

        if (primer) {

            primer = false;
            maximo = num;
            minimo = num;

        }

        if (num > maximo) {

            maximo = num;

        } else if (num < minimo) {

            minimo = num;

        }

        if (num % 2 == 0) {

            cantPares++;

        }

        sumaNumeros += num;
        cantNumeros++;

    }

    promedio = sumaNumeros / cantNumeros;

    document.write("Cantidad de números pares: "+cantPares);
    document.write("Promedio: "+promedio);
    document.write("Suma números: "+sumaNumeros);
    document.write("Máximo: "+maximo);
    document.write("Mínimo: "+minimo);

}