cambiarDimensionFuente(8)
function cambiarDimensionFuente(size) {
  return function() { 
    document.body.style.fontSize = size + 'px';
  };
}



var size8 = cambiarDimensionFuente(8);
//2 aqui se cambia el style y dimencion de la letra a 8 gracias al callback de la funtion anterior
var size16 = cambiarDimensionFuente(16);
var size24 = cambiarDimensionFuente(24);

function setClicks(){
//3.comentando esta funcion nos dice que hay un error de referencia ya que el callback no esta capturando nada
document.getElementById('fuente-8').onclick = size8(); 
document.getElementById('fuente-8').onclick = size8; 
//5 colocando size8() nos proporcionara el tamaño de la pagina por defecto en 8 px.
//2. y aqui luego es utilizado para setearlo con el click .
//4. Debemos escribirlo de esta forma document.getElementById('fuente-8').onclick = size8; de lo contrario pensara que size en una function y no una variable (callback)  y no funcionara
document.getElementById('fuente-16').onclick = size16;
document.getElementById('fuente-24').onclick = size24;
}

// 1. Dentro de la funcion setClicks se ejecuta cambiarDimensionFuente, es decir se esta ejecutando un callback ya que llama a otra funciona y esta se realiza anteriormente

// 6. Al usar closures evitamos escribir mucho codigo, es decir aprovechamos espacion en memoria, de esta forma obtenemos un codigo mas limpio y reutilizable

//7


