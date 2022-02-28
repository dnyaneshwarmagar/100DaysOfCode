/*Given the current day, and a number N, find what day will it be after N days.

Note:Current day will be from the set ->{"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"}*/
function dayOfTheWeek(day, N) {
   
    let A = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    let i = ( (N%7) + A.indexOf(day) )%7;
    console.log(A[i])
      
  }