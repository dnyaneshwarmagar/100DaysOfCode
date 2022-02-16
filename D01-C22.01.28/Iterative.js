/*Given n distinct numbers, implement iterative binary search to check the presence of target number k.

In case k is present among those n numbers, print 1

Else print -1*/

function runProgram(input) {
    input = input.trim().split("\n");
    let [n,k]= input[0].trim().split(" ").map(Number);
    let a = input[1].trim().split(" ").map(Number);
   fn(n,k,a)
  }
  
  function fn(n,k,a){
      a = a.sort((a,b)=>(a-b))
      let s = 0 , e= n-1, mid=0;
      
      while(s<=e){
          mid = s + Math.floor((e-s)/2);
          if(a[mid]== k){
              console.log("1");
              return;
          }
          if(a[mid]> k){
              e= mid-1;
          }
          else if(a[mid] < k){
              s = mid +1;
          }
      }
      console.log("-1");
      return;
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
  