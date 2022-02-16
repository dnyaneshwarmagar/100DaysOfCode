/* Ross is skilled in calculations, he can do most of the complex calculations in head but he is stuck with this quesiton and wants your help.

Ross wants to solve the given mathematical equation which states that, he needs to find the east non-negative integer Xo, that shall make the value of given equation atleast K i.e.,

A Xo^2 + B Xo + C >= K

He is given A,B,C and K, which form the above equation. He has to answer T independent test cases.

Output -1 if there is no possible positive value of Xo*/
function runProgram(input) {
    input= input.trim().split("\n");
    let tc= +input[0];
    let l= 1; 
    
    for(let i= 0; i< tc; i++){
        let [A,B,C,K] = input[l++].trim().split(" ").map(Number);
        
        let res =fn(A,B,C,K);
        if(res == 0){
            console.log("-1")
        }
        else{
            console.log(res)
        }
    }

  }
  
  function fn(A,B,C,K){
     let s = 0, e= K, ans=-1,mid,val ;
     while(s<=e){
         mid = s + Math.floor((e-s)/2);
         
         val = A*(mid**2) + B*mid + C;
         
         if(val >= K){
             ans = mid;
             e = mid-1;
         }
         else {
             s = mid+1;
         }
     }
     return ans
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