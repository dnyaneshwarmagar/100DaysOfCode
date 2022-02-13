/*You are provided a stringS.

Write a program that returns length of the longest palindromic substring of that string.*/

function masaiPalSubString(S){
   
    var longer = null;
    for (var i=0; i<S.length; i++) {
        var str = ""
       //var str = str + S[i];
      for (var j=i; j<S.length; j++) {
        str = str+ S[j];
      
      var count =0;
      for (var k=0; k< str.length; k++) {
        if (str[k] == str[str.length-(k+1)]) {
          count++;
        } 
      }
        if ((count==str.length)&&( str.length >longer)) {
        var longer = str.length;
        }
      }
            }
          console.log(longer);
  }
  