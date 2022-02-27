/* Given a square matrix of size N x N. Print the Z traversal of the matrix. Refer the figure given below for better understanding.
1 2 3 
4 5 6 
7 8 9
output:1 2 3 5 7 8 9 
*/
function zTraversal(N,arr){

  var str = "";
  for ( var c= 0; c< N; c++ ) {
    str = str + arr[0][c] + " ";
  }
  if ( N > 1) {
  for ( var r = 1; r < N-1; r++) {
    str = str + arr[r][N-1-r] + " ";
  }
  for ( var c = 0; c <N  ; c++ ) {
    str = str + arr[N-1][c]+ " ";
    }
  }
  console.log(str);
  
}