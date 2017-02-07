function Mostrar()
{
 
var mes = document.getElementById("mes").value;

switch(mes) {


    case "Enero" : 
    case "Febrero" :
    case "Marzo" :
    case "Septiembre" :
    case "Octubre" :
    case "Noviembre" :
    case "Diciembre" :

    {
        alert("¡Ya pasamos el frio, ahora calor!");
        break;
    }
    
    case "Abril" :
    case "Mayo" :
    case "Junio" :

    {
        alert("Falta para el invierno.");
        break;
    }

    case "Julio" :
    case "Agosto" :

    {
        alert("¡Abrigate que hace frio!");
        break;
    }

}

}//FIN DE LA FUNCIÓN