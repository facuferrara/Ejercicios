


function cambiarDimensionFuente(size) { // crea
  //muestra
  var dim8 = (document.body.style.fontSize = size + 'px');
    return dim8;
    
  // return function() { 
    //   document.body.style.fontSize = size + 'px';
  };
  // }
  
  
  
  function setClicks(){
    // document.getElementById('fuente-8').onclick = size8(); 
    // document.getElementById('fuente-8').onclick = size8; 
    // document.getElementById('fuente-16').onclick = size16;
    // document.getElementById('fuente-24').onclick = size24;
    
    var size8 = document.getElementById('fuente-8').onclick = cambiarDimensionFuente(8);
    document.getElementById('fuente-16').onclick= cambiarDimensionFuente(16);
    document.getElementById('fuente-24').onclick= cambiarDimensionFuente(24);
  }

  //el programa arranca asi
//var size8 = cambiarDimensionFuente(8);  //variable que inicializa la primera funcion y la ejecuta
// var size16 =  cambiarDimensionFuente(16); 
// var size24 = cambiarDimensionFuente(24);