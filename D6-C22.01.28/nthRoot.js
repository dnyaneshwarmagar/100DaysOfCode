/*You are given two integersnandmand you have to find the floor value of thenthroot ofm.*/
function runProgram(input) {
    input= input.trim().split("\n");
    let tc= +input[0];
    let l= 1; 
    
    for(let i= 0; i< tc; i++){
        let [n,m] = input[l++].trim().split(" ").map(Number);
       
        let res = fn(n,m)
        console.log(res)
    }
   
  }
  function fn(n,m){
      let low = 1; high = m;
      let mid;
      while(low<=high){
         mid = low + Math.floor((high-low)/2);
         if(mid**n == m){
             return mid;
         }
         if(mid**n  <m){
             low = mid+1;
         }
         else{
             high = mid -1;
         }
      }
      return high;
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