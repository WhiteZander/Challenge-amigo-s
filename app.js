//Inicializar las variables

let nombreAmigo;
let listaNombres= [];

//Funcion agregar, verifica campo vacio y limpia nombre

function limpiarNombre(){
    document.getElementById("amigo").value = '';
 
 }

function agregarAmigo (){

    nombreAmigo=document.getElementById("amigo").value.trim();

        if (nombreAmigo===''){
            alert("Ingrese un nombre válido");
        } else {
            listaNombres.push(nombreAmigo);
            console.log(nombreAmigo)
            console.log(listaNombres)
            limpiarNombre();


        }
}


