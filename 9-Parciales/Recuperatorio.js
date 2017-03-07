//////////     1     //////////

function superficie() {

    var base = parseInt(document.getElementById("base").value);
    var superficie = base * base;

    alert("La superficie del cuadrado con base "+base+" es: "+superficie);

}

//////////     2     //////////

function descuento() {

    var precio = parseInt(prompt("Ingrese el valor del producto: "));
    var descuento = 0.75;
    var precioConDescuento = precio * descuento;

    alert("Precio con descuento: "+precioConDescuento);

}

//////////     3     //////////

function compras() {

    var precio1 = parseInt(document.getElementById("p1").value);
    var precio2 = parseint(document.getElementById("p2").value);
    var precio3 = parseint(document.getElementById("p3").value);

    var sumaPrecios = precio1 + precio2 + precio3;
    var promedio = sumaPrecios / 3;

    alert("Suma de los precios: "+sumaPrecios);
    alert("Promedio de precios: "+promedio.toFixed(2));

}

//////////     4     //////////

function resultado() {

    var num1 = parseInt(prompt("Ingrese el primer número:"));   
    var num2 = parseInt(prompt("Ingrese el segundo número:"));

    var suma = num1 + num2;

    if (suma > 0) {

        document.write("El resultado de la suma es positivo.");

    } else if (suma < 0) {

        document.write("El resultado de la suma es negativo.");

    } else {

        document.write("El resultado de la suma es 0.");

    }

}

//////////     5     //////////

function meses() {

    var mes = prompt("Ingrese un mes: ");
    mes = mes.toLowerCase();

    switch (mes) 
    {

        case "enero":
            alert("Comienza el año.");
            break;
        
        case "diciembre":
            alert("Se vienen las fiestas.");
            break;

        case "febrero":
        case "marzo":
        case "abril":
        case "mayo":
        case "junio":
        case "julio":
        case "agosto":
        case "septiembre":
        case "octubre":
        case "noviembre":
            alert("No es enero ni diciembre");
            break;

        default:
            alert("Ese no es un mes válido");
            break;

    }

}

//////////     6     //////////

function contenedores() {

    var contador = 0;
    var cantContenedores = 50;
    var peso;
    var masPesado;
    var menosPesado;
    var primer = true;

    while (contador < cantContenedores) {

        contador++;
        peso = parseInt(prompt("Ingrese el peso en kilos del contenedor "+contador+":"));
        
        while (peso < 1 || isNaN(peso)) {

            peso = parseInt(prompt("Error. Ingrese el peso en kilos del contenedor "+contador+":"));

        }

        if (primer) {

            primer = false;
            masPesado = peso;
            menosPesado = peso;

        }

        if (peso > masPesado) {

            masPesado = peso;

        } else if (peso < menosPesado) {

            menosPesado = peso;

        }

    }

    alert("Mas pesado: "+masPesado);
    alert("Menos pesado: "+menosPesado);

}

//////////     7     //////////

function edades() {

    var contador = 0;
    var edad;
    var sexo;
    var cantPersonas = 100;
    var promedioEdad;
    var sumaEdades = 0;
    var edadMasBaja;
    var varones20oMenos = 0;
    var primer = true;

    while (contador < cantPersonas) {

        contador++;
        edad = parseInt(prompt("Ingrese la edad de la persona "+contador+":"));

        while (edad < 1 || edad > 100 || isNaN(edad)) {

            edad = parseInt(prompt("Error. Ingrese la edad de la persona "+contador+":"));

        }

        sexo = prompt("Ingrese el sexo de la persona "+contador+" (M o F):").toLowerCase();

        while (sexo != "m" && sexo != "f") {

            sexo = prompt("Error. Ingrese el sexo de la persona "+contador+" (M o F):").toLowerCase();

        }

        if (primer) {

            primer = false;
            edadMasBaja = edad;

        }

        if (edad < edadMasBaja) {

            edadMasBaja = edad;

        }

        if (sexo == "m" && edad <= 20) {

            varones20oMenos++;

        }

        sumaEdades += edad;

    }

    promedioEdad = sumaEdades / cantPersonas;

    alert("Promedio de edades: "+promedioEdad);
    alert("Edad más baja: "+edadMasBaja);
    alert("Varones de edad menor o igual a 20: "+varones20oMenos);

}

//////////     8     //////////

function numeros() {

    var num;
    var cantPares = 0;
    var cantNumeros = 0;
    var promedio;
    var sumaNumeros = 0;
    var maximo;
    var minimo;
    var primer = true;
    var respuesta = true;

    while (respuesta) {

        cantNumeros++;
        num = parseInt(prompt("Ingrese un número positivo:"));

        while (num < 1 || isNaN(num)) {

            num = parseInt(prompt("Error. Ingrese un número positivo:"));

        }

        respuesta = confirm("¿Seguir ingresando números?");

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

    }

    promedio = sumaNumeros / cantNumeros;

    alert("Cantidad de números pares: "+cantPares);
    alert("Promedio de números: "+promedio.toFixed(2));
    alert("Suma de los números: "+sumaNumeros);
    alert("Número máximo: "+maximo);
    alert("Número mínimo: "+minimo); 

}