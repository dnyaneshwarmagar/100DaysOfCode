/*You are given an arrayAofNintegers.

Write a program to find thesumof the absolute difference between all such pairs (A[i], A[j]) such that i < j and ( j-i ) is prime.*/

function sumOfSpecialPairs(N,A){
    
    var sum = 0;
    
    for (var i=0; i<N; i++) {
      
      for (var j= i + 1;j <N ; j++) {
        
        var count = 0;
        
        for (var k= 2; k<(j-i); k++) {
          
            
          if  ( ( j-i )% k ==0   )  {
            count++;
            break;
          }
        }
          if ( (j-i) != 1) {
          if( count==0) {
            
            diff= Math.abs(A[i]-A[j]);
            
            sum = sum + diff;
            
            }
        }
      }
    }
    console.log(sum);
  
  }
  