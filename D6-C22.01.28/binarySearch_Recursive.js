/*Given n distinct numbers, implement a recursive binary search to check the presence of target number k.

In case k is present among those n numbers, print 1

Else print -1 */
function runProgram(input) {
    input = input.trim().split("\n");
    let [n,k]= input[0].trim().split(" ").map(Number);
    let a = input[1].trim().split(" ").map(Number);
    let s=0 , mid= 0 ; e= n-1;
   let res = fn(n,k,a,s,mid,e);
   console.log(res)
  }
  
  function fn(n,k,a,s,mid,e){
     if(s>e){
         return -1;
     }
     mid = s + Math.floor((e-s)/2);
     if(a[mid] == k){
         return 1;
     }
     if(a[mid] <k){
         return fn(n,k,a,mid+1,mid,e);
         
     }
    return fn(n,k,a,s,mid,mid -1); // if a[mid] > k
    
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