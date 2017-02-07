function Mostrar()
{
//tomo la edad  

var edad = document.getElementById("edad").value;

if (edad < 18){
    if (!(document.getElementById("estadoCivil").value == "Soltero")){
        alert("Es muy pequeño para NO ser soltero");
    }
}


}//FIN DE LA FUNCIÓN