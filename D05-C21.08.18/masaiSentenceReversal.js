/*You are given a strings.

You need to write a program that reverses the order/sequence in which words are present in the sentence keeping the case of each character preserved (upper case character should remain upper and lower case character is lower case).

(Refer to the sample test case for better understanding)*/

function masaiSentenceReverse(s) {
    
    let str ="";
    let arr =[];
   for(let i = 0; i<s.length; i++){
       if(s[i] != " "){
           str = str +s[i]
       }
       else{
           arr.push(str);
           str = "";
       }
   }arr.push(str)
   
   console.log(arr.reverse().join(" "))
  }