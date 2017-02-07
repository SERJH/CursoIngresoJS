function Mostrar()
{
 
var mes = document.getElementById("mes").value;

switch(mes) {

    case "Enero" : 
    case "Marzo" :
    case "Mayo" :
    case "Agosto" :
    case "Octubre" :
    case "Diciembre" :

    {
        alert("Este mes tiene 31 días.");
        break;
    }

    case "Abril" :
    case "Julio" :
    case "Junio" :
    case "Septiembre" :
    case "Noviembre" :

    {
        alert("Este mes tiene 30 días.");
        break;
    }

    case "Febrero" : 
    {
        alert("Este mes tiene 28 días.");
        break;
    }

}
	
	



}//FIN DE LA FUNCIÓN