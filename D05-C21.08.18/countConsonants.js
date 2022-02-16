/* You are give a strings.

Your task is to write a program that counts the number of consonants (non-vowels characters) present in the string.*/

function countConsonants(s) {
 
    let c=0;
    for(let i= 0; i<s.length; i++){
        
        if(s[i] !== "a" && s[i] !== "e" && s[i] !== "i" && s[i] !== "o" && s[i] !== "u"){
            c++;
        }
    }
      console.log(c)
  }
  