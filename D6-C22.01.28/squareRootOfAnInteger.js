/* You are given an integerN, find the square root of the given integerN. If the integer is not a perfect square, print the floor value of the given integer.

Note:- The floor value is the largest integer value lesser than a given number K. For example if the value ofK = 3.679, the floor value ofKis3.

Note:You are not allowed to use any inbuilt function.

Note: Try printing output only once, then individually for each test case. */

function runProgram(input) {
    input= input.trim().split("\n");
   
        var tc  = +input[0]
        let l = 1; 
        
        for (let i=0; i<tc; i++){
           var n= +input[l++]
     
        console.log(fn(n)) 
        }
  }
  
  function fn(n){
      
      let s= 0, e= n-1, mid = 0, ans = 0;
      if( n == 0 || n == 1){
          return n;
      }
      while(s<=e){
          mid = s + ((e-s)/2);
        mid = mid - mid%1
          if(mid*mid == n){
              return mid;
          }
          if(mid*mid < n){
              s= mid+1;
              ans = mid
          }
          else{
              e = mid-1;
          }
      }
      return ans;
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