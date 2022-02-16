/*You are given a number N.

Let’s say you derive a variablexwhich is equal to the floor of a number you get when32is divided byN.

In casexis 0, printToo Low
In case it is not possible to generate a valid number, print-1
In all other cases, printx. */

function divisionTask(N) {
    var x = (32/N)-
    (32%N)/N;
   if (N>0) {
    if ( x == 0) {
      console.log("Too Low");
    }
     else  if ( x != 0) {
      console.log(x);
      }
 }
        else  {
      console.log("-1");
        
        }
 
     
 }
 