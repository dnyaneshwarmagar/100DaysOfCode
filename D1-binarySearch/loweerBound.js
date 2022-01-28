/*You are given n different numbers and an integer k. Write a program that finds lower bound of k in log(n) time complexity. Lower bound of a number k in a sorted list is the index of the first number which is same as k, in case the number is not present, print -1 (here the answer is given considering index to be starting from 0)

NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION.

WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TO TRY THE LOGN SOLUTION.

USING BRUTE FORCE/LINEAR SEARCH, IN THIS CASE, WOULD LEAD TO DISQUALIFICATION.*/ 
function fn(n,k,A){
    let arr = A.sort((a,b) =>(a-b));
    let low = 0, high= n-1, mid =0 , ans = -1;
   
    
    while(low <= high){
        mid = Math.floor(low+ (high-low)/2);
        if(arr[mid] == k){
            ans = mid;
            high = mid -1
        }
        else if(arr[mid] >k ){
            high= mid-1;
        }
        else{
            low = mid +1;
        }
        }
        return ans;
        
        
    }
 


function runProgram(input) {
    input= input.trim().split("\n");
   
        var [n,k] = input[0].trim().split(" ").map(Number);
        var A = input[1].trim().split(" ").map(Number);
        
        
        console.log(fn(n,k,A))
       
   
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