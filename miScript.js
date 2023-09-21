let x=100;
// alert("Hola"  + x);

function Saludar() {
    alert("Hola amigo/a");
    let titulo = document.getElementById("miTitulo");
    titulo.style.color = "red";
    titulo.innerHTML = "¿Por qué me cambias?";
}

function Desaparece() {
    let titulo = document.getElementById("miTitulo");
    titulo.style.display = "none";
}

function Chequear(letra) {
    if(letra)  return true;
    if(!letra) return false;
    return letra;
}

var x = Chequear("10");