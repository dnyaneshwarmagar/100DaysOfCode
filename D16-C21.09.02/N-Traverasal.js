/*You are given a matrix of size n x n. Find theNtraversal of the matrix. Refer the following figure for better understanding. 
1 2 3
4 5 6
7 8 9

output:7 4 1 5 9 6 3
*/
function nTraversal(matrix) {
    var N = matrix.length
      var str = "";
    for ( var i = N-1; i>= 1; i--) {
      str= str+ matrix[i][0] + " "  ;
    }
    
    for ( var i = 0; i< N; i++ ) {
      str = str + matrix[i][i] + " "  ;
    }
    
    for ( var i = N-2; i>= 0 ;i-- ) {
      str= str + matrix[i][N-1]+ " " ;
    }
    console.log( str);
    
  }