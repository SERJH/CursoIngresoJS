function Mostrar()
{
//tomo la edad  

var edad = document.getElementById("edad").value;

if (edad >= 18){
    alert("Es mayor de edad");
} else if (edad <= 12){
    alert("Es un niño");
} else {
    alert("Es un adolescente");
}


}//FIN DE LA FUNCIÓN