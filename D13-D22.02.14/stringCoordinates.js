/*You are given a string s consisting of u, l, r, and d as characters and you are standing at point (x,y) = (0,0) and you have to traverse the string and do the movements in the direction you are been instructed by the character as

If s[i] = 'u' then x = x + 1
If s[i] = 'd' then x = x - 1
If s[i] = 'r' then y = y + 1
If s[i] = 'l' then y = y - 1

Print the final coordinates after traversing the whole string.*/

function runProgram(input) {
    input= input.trim().split("\n");
   
        let n = +input[0];
        let s = input[1].trim();
        fn(n,s)
  }
  function fn(n,s){
      let x=0, y=0;
      
      for(let i= 0; i<n; i++){
         if(s[i] === "u"){
             x= x+1;
         } 
         else if(s[i] === "d"){
             x= x-1;
         }
         else if(s[i] === "r"){
             y = y+1;
         }
         else if(s[i] === "l"){
             y = y-1;
         }
      }
      console.log(x+" "+y)
  }
  if (process.env.USERNAME === "vishw") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }