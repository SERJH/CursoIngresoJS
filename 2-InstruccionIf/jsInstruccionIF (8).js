function Mostrar()
{
//tomo la edad  

var edad = document.getElementById("edad").value;

if (edad >= 18){
    if (document.getElementById("estadoCivil").value == "Soltero"){
        alert("Es soltero y no es menor");
    }
}	


}//FIN DE LA FUNCIÓN