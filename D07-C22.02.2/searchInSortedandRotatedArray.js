/*Given a sorted(increasing order) array of length n and is rotated by some value beforehand. Find the index of the target element  K in the rotated array in O(logn) time. If not found print -1.

In a sorted & rotated array,  we rotate an ascending order sorted array at some pivot unknown to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2.

Please note that the linear search approach with the time complexity of O(n) can easily be applied. But you are expected to solve it in O(log n) time complexity

Note: Array contains all distinct elements. */
function runProgram(input) {
    input= input.trim().split("\n");
    
   
        let [n,k] = input[0].trim().split(" ").map(Number);
        let A = input[1].trim().split(" ").map(Number);
        
        console.log(fn(n,k,A))
    
  }
  
  function fn(n,k,A){
      let s= 0 , e = n-1, ans = -1, mid;
      
      while(s<= e){
          mid = s + Math.floor((e-s)/2);
          if(A[mid] == k){
              ans=  mid;
              return ans;
          }
          else if(A[s] <= A[mid]){
              if(k >= A[s] && k< A[mid]){
                  e = mid -1;
              }
              else{
                  s = mid +1;
              }
          }
          else if(A[mid] <= A[e]){
              if(k > A[mid] && k<= A[e]){
                  s = mid+1;
              }
              else{
                  e= mid-1;
              }
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