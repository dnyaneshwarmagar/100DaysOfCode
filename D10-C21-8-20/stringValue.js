/*Given a stringSof all lowercase letters and each letter has a value of its own.

The value of the alphabetais1,b is 2,c is 3..... tillz is 26.

Now you have to find the total value of the given string. The total value of a string is the sum of values of all characters present in string*/

function stringValue(S) {
    
    var sum = 0;
    
    for ( var i=0; i< S.length; i++) {
      sum = sum + (S[i].charCodeAt()-96)
    }
    console.log(sum);
  
  }