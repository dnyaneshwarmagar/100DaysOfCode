/*Given a squarematrixof sizeN, turn it by 90 degrees in an anti-clockwise direction, as shown in sample input.*/
function rotateBy90(R, matrix){
  
  for ( var i =0 ; i< Math.floor(R/2);i++) {
    str= "";
    for ( var j= i ; j< R-1-i; j++ ) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][R-1-i];
      
      matrix[j][R-1-i] = matrix[R-1-i][R-1-j];
      
      matrix[R-1-i][R-1-j] = matrix[R-1-j][i];
      
      matrix[R-1-j][i] = temp;
      
    }
    
  }
   for ( var i =0 ; i< R; i++ ) {
    var str = "";
     for (var j= 0; j< R ; j++ ) {
       str = str + matrix[i][j] + " ";
     }
     console.log(str);
   }  
}