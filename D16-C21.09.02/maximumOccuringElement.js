/*Given an array A of N integers. Your task is to print that integer which presents maximum number of times in the given array.

If there are two elements present the maximum number of times, print the one which comes first in the array */
function maximumOccuringElement(A,N){
     
    let ob = {};
    
    for ( var i = 0; i< N; i++ ) {
        if ( ob[A[i]] === undefined ) {
          ob[A[i]] = 1;
        }
        else {
            ob[A[i]] = ob[A[i]] +1;
        } 
    }
    
    let max = 0;
    let maxOc = null;
    
    for(let key in ob){
 
        if ( ob[key] > max ) {
            max = ob[key]; 
            maxOc = key;
        }     
    }
    
  console.log(maxOc);
}
