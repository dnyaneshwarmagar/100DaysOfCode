/*Given an array of length n, and it is sorted and rotated at some unknown point, find the minimum element in it.

In a sorted & rotated array,  we rotate an ascending order sorted array at some pivot unknown to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2.

Please note that the linear search approach with the time complexity of O(n) can easily be applied. But you are expected to solve it in O(log n) time complexity */
function runProgram(input) {
    input= input.trim().split("\n");
  
   
        let n = +input[0];
        let A = input[1].trim().split(" ").map(Number);
        console.log(fn(n,A))

  }
  function fn(n,A){

    let low = 0, high = n-1, mid;
     while(low < high)
    {
        let mid = Math.floor(low + (high - low)/2);
        if (A[mid] == A[high])
            high--;
        else if(A[mid] > A[high])
            low = mid + 1;
        else
            high = mid;
    }
    return A[high];
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