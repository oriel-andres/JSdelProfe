//const imagen1 = document.getElementById("miImagen");
//const imagen1 = document.querySelector("#miImagen");

function CambiaTextoParrafos(){
  //const parrafos = document.querySelector("p");
  const parrafos = document.getElementsByTagName("p");

  for(let j=0; j<parrafos.length; j++) 
      parrafos[j].style.fontSize = "150%";
}



//const parr1   = document.getElementById("miParrafo");

function CambiaColor() {
    const parr1   = document.getElementById("miParrafo");
    parr1.style.color = "red";
}

function CambiaTamano(){
    const imagen1 = document.getElementById("miImagen");
    imagen1.width = "300";
    imagen1.height = "400";

}

function CambiaImagen(nombre) {
    const imagen1 = document.getElementById("miImagen");
    imagen1.src = nombre;
}
