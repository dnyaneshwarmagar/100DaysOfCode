/*You are given an arraymatrixofnrows andmcolumns which contains positive integers and sums.

You need to find occurrences of the sum of three consecutive numbers (i.e x,y, and z ) whose sum is equal to s appear horizontally, vertically and diagonally in the given matrix.*/

function twoArrayAndSum(n, m, matrix, s){

  var c = 0;
  var p = s;
  co = 0;
  for ( var c = 0 ; c< m-2; c++ ) {
    for ( var r = 0 ; r< n; r++ ){
    if ( matrix[r][c]+matrix[r][c+1]+matrix[r][c+2] == p )  {
      co++;
    }
  }
  }
     for ( var r = 0 ; r< n-2; r++ ) {
       for ( var c = 0 ; c< m; c++ ) {
    if ( matrix[r][c]+matrix[r+1][c]+matrix[r+2][c] == p )  {
      co++;
    }
     }
     }
       

   for ( var c = 2 ; c< m; c++ ) {
    for ( var r = 0 ; r< n-2; r++ ){
    if ( matrix[r][c]+matrix[r+1][c-1]+matrix[r+2][c-2] == p )  {
      co++;
    }
  }
  }
   for ( var c = 0 ; c< m-2; c++ ) {
    for ( var r = 0 ; r< n-2; r++ ){
    if ( matrix[r][c]+matrix[r+1][c+1]+matrix[r+2][c+2] == p )  {
      co++;
    }
  }
  }
  console.log(co)
  
}