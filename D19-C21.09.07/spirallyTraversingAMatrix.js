/*Given a matrix of size n by n. Traverse and print the matrix in spiral form. */
function spirallyTraversingAMatrix(N, matrix){

  var t = 0 ; b = N-1; r = N-1; l= 0; c= 0;
  var str = "" ;
   
  while ( c < N*N ) {
    for ( var i = l ; i<= r ; i++ ) {
      str = str + matrix[t][i] + " ";
        c++;
    }
    t++;
    for ( var i = t ; i<= b ; i++ ) {
      str = str + matrix[i][r] + " ";
        c++;
    }
    r--;
      for ( var i = r ; i>= l; i-- ) {
      str = str + matrix[b][i] + " ";
        c++;
    }
    b-- ;
      for ( var i = b ; i>= t ; i-- ) {
      str = str + matrix[i][l] + " ";
        c++;
    }
    l++;
  }
   console.log(str);   
  
}