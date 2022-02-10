/* Given a string of lowercase characters and integers, decompress the string under the following rules:

If an integer is encountered, the character just before it gets added to a final string as many times as the number
For instance, if the string isa3b2=> the output should beaaabbbecauseais followed by 3, andbis followed by 2

Complete the function to decompresses the string and print it.*/

function decompressString(string) {
   
    var op = "";
     for (var i = 0; i< string.length; i++) {
       if (!isNaN(string[i])) {
         var n = Number(string[i]) ;
         for ( var j= 0 ; j< n; j++) {
           op = op + string[i-1];
         }
       }
     }
     console.log(op)
   
   }