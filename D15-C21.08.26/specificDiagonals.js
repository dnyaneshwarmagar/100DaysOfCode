/*Given amatrixofRrows andCcolumns which contains distinct integers and you are given a integerKand you need to print both the diagonals crossing through the given elementK, you can always assume that the given element always exist in the matrix.

1 2 3
4 5 6
7 8 9

In this 4*4 Matrix, suppose we need to print the diagonals passing from11, So the output will be :

2 6
6 8

Note: You need to print the diagonal from top to bottom also make sure you print the diagonals going fromleft to rightfirst then diagonal goingright to left,on a new lines.*/

function specificDiagonals(R, C, matrix, K){
    function fn(R, C, matrix, K){
        
    
    for(let r = 0 ;r<R; r++){
        for(let c=0; c<C; c++){
            if(matrix[r][c] === K){
                 let ind = [r,c]
              return ind  
            }
        }
    }
    
    }
  let [a,b] =fn(R, C, matrix, K)
  
      function rd(x,y){
      while(x>0 && y>0){
        x--,y--;  
      }
      return [x,y]
    }
    
    let [xRd,yRd]=rd(a,b) ;
    let rdAns = "";
    for(let i=xRd, j= yRd; i< R && j<C; i++, j++){
        rdAns += matrix[i][j] + " ";
    }
    
     function ld(x,y){
      while(x>0 && y<C-1){
        x--,y++;  
      }
      return [x,y]
    }
    
    let [xLd,yLd]=ld(a,b) ;
    let ldAns = "";
    for(let i=xLd, j= yLd; i< R && j>=0; i++, j--){
        ldAns += matrix[i][j] + " ";
    }
    
    
    console.log(rdAns)
    console.log(ldAns)
}