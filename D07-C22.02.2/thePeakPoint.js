/*Given an array of size n, which is strictly increasing and then strictly decreasing in order. Find out the index (0-based) which is the peak of the array.

Note that the extremities are not considered as peak and there exists a peak which is not at index 0 or at n-1 */
function runProgram(input) {
    input= input.trim().split("\n");
    let tc= +input[0];
    let l= 1; 
    
    for(let i= 0; i< tc; i++){
        let n = +input[l++];
        let A = input[l++].trim().split(" ").map(Number);
        fn(n,A)
    }

  }
  function fn(n,A){
      for (let i = 1; i<n-1; i++){
          if(A[i] >A[i-1] && A[i] >A[i+1]){
              console.log(i)
              break;
          }
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