//Inicializar las variables

let nombreAmigo;
let listaNombres= [];

//Funcion agregar y verificar campo vacío

function agregarAmigo (){

    nombreAmigo=document.getElementById("amigo").value.trim();

        if (nombreAmigo===''){
            alert("Ingrese un nombre válido");
        } else {
            listaNombres.push(nombreAmigo);
            console.log(nombreAmigo)
            console.log(listaNombres)

        }
}

