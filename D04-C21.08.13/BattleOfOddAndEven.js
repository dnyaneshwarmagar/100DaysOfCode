/* You are given an arrayarrofNintegers.

You need to printOdd, if thesum of all odd numberspresent in the array is greater thansum of all the even numberspresent in the array, or else printEven.*/
function battleOfOddAndEven(n, arr){
    //write code here
  var odd_sum = 0;
  var even_sum = 0;
  
  for (var i=0; i<n; i++) {
   if ( arr[i]%2 == 0) {
     even_sum = even_sum + arr[i];
   } else {
     odd_sum = odd_sum + arr[i];
   }
  } if (odd_sum > even_sum) {
    console.log("Odd");
  } else {
    console.log("Even");
  }
  
}