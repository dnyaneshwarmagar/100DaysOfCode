/*Given a squarematrixof sizeN, turn it by 90 degrees in an anti-clockwise direction, as shown in sample input*/

function rotateBy90(R, matrix){
     
  for ( var r = 0; r< R; r++) {
    var str = "" ;
    for ( var c = 0; c< R ; c++ ) {
      
      str = str + matrix[c][R-1-r] + " ";
    }
    console.log(str);
  }
}