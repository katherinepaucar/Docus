//Almacenar ciudad que arrastro

let ciudad="";


//Una vez que arrastras con el ratón
function start(e){
    event.target.style.opacity="0.3";
    ciudad=event.target.id;

}

//Una vez que sueltas el seleccionado
function end(){
    event.target.style="1";
}

//Colocar la ciudad en su correspondiente imagen
function over(){
    let imagen=event.target.id;

    if(
        (ciudad=="paris" && imagen=="eiffel") ||
        (ciudad=="londres" && imagen=="ferris") ||
        (ciudad=="nuevaYork" && imagen=="bridge")
    ){
        event.target.style.border="2px solid green";
    }else{
        event.target.style.border="2px solid red";
    }
      event.preventDefault();
}

function leave() {
    event.target.style.border = "none";
}

//dejamos la imagen
function drop(){
    let imagen=event.target.id;
    if(
        (ciudad=="paris" && imagen=="eiffel") ||
        (ciudad=="londres" && imagen=="ferris") ||
        (ciudad=="nuevaYork" && imagen=="bridge")
    ){
        event.target.appendChild(document.getElementById(ciudad));
    }

    event.target.style.border = "none";
}

