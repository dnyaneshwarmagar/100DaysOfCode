/* You are given an arrayAofNintegers along with a target integerK.

Your task is to find out the number of pairs of integers present in the array, whose sum is equal to the target valueK.*/

function countSuchPairs(N,K,A){
    var count = 0; 
for ( var i= 0; i< N ; i++ ) {
  for ( var j=i+1 ; j< N ; j++ ) {
    if ( A[i] + A[j] == K ) {
      count++;
    }
  }
}
console.log(count);
}
