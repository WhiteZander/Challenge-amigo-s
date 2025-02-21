//Inicializar las variables

let nombreAmigo="";
let listaNombres= [];
let listaHTML="";

//Funcion agregar, verifica campo vacio, limpia nombre y agrega a HTML 




document.getElementById("amigo").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        agregarAmigo();  
    }
});



function agregarAmigo (){


    nombreAmigo=document.getElementById("amigo").value.trim();

        if (nombreAmigo===''){ //Evita campo vacío
            alert("Ingrese un nombre válido");
        } else { //Evita nombres duplicados
            
            if(listaNombres.includes(nombreAmigo)){

                alert("Ya has ingresado ese nombre, por favor ingresa uno diferente");

        } else{
            asignarTextoElemento('listaAmigos','');
            listaNombres.push(nombreAmigo);
            console.log(nombreAmigo);
            console.log(listaNombres);
            limpiarNombre();
            agregarListaHtml();
            console.log(listaHTML);     
        }

}}

//Funciones complementarias

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto; 
}

function removerLista(){
    asignarTextoElemento('listaAmigos','');
}

function agregarListaHtml (){ //Agrega los nombres a la lista en HTML

    for ( let i=0; i< listaNombres.length; i++) {
       listaHTML+= `<li> ${listaNombres[i]}</li>`
       console.log(listaNombres[i])
    }

    asignarTextoElemento('listaAmigos', listaHTML);  

    return listaHTML="";
}

function limpiarNombre(){
    document.getElementById("amigo").value = '';
  }



//Sortea nombre y revisa que array no esté vacío


function sortearAmigo(){
    if(listaNombres.length<=0){

        alert("Ingresa al menos un nombre para sortear");
    } else {

        asignarTextoElemento("resultado",listaNombres[generarMaximoIndice()]);


    }
}

function generarMaximoIndice() {
    let maximoIndice = Math.floor(Math.random()*listaNombres.length);
    return maximoIndice;

}