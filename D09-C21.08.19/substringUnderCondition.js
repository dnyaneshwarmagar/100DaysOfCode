/*You are given a strings, you have to find thecountof all such substrings which start and ends with the same character. */
function subStrUnderCond(s){
var count = 0 ;
for ( var i = 0 ; i<s.length; i++) {
  for ( var j= i; j< s.length; j++) {
    if ( s[i] == s[j]) {
      count++;
    }
  }
}
console.log(count);

}