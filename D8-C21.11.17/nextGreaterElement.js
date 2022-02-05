/*Given an array of N elements, find the next greater element for each element in the array, print -1 if it does not exits. Refer to the sample I/O for better understanding */

function runProgram(input) {
    input= input.trim().split("\n");
    var t =+input[0];
    var l = 1;
    for(var i=0 ; i<t; i++){
        var N= +input[l++];
        var A= input[l++].trim().split(" ").map(Number);
        fn(N,A);   
    }
    
   
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
  
  function fn(N,A){
      
      var s = [];
      
      var ans =[];
      var c=0;
      for(var i=N-1; i>=0; i--){
          
          while((s.length != 0) && (s[s.length-1] <= A[i]) ){
              s.pop();
          }
          if( s.length != 0){
               ans[i] = s[s.length-1];
            c++
          }
          else{
             ans[i]= -1; 
          }
          s.push(A[i]);
      }
      

      console.log(ans.join(" "))
  }