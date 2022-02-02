/*You are given n different numbers and an integer k. Write a program that finds upper bound of k in log(n) time complexity. Upper bound of a number k in a sorted list is the index of the first number which is greater than k (here the answer is given considering index to be starting from 0)

-> Test cases are such that there is always one number greater than k

NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION

WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TRY THE LOGN SOLUTION

USING BRUTE FORCE/LINEAR SEARCH, IN THIS CASE, WOULD LEAD TO DISQUALIFICATION*/


function runProgram(input) {
    input= input.trim().split("\n");
   
        var [n,k] = input[0].trim().split(" ").map(Number);
        var A = input[1].trim().split(" ").map(Number);
     
        console.log(fn(n,k,A))

  }
  function fn(n,k,A){
      let s=0,mid=0, e=n-1; 
      while(s<=e){
          mid = s + Math.floor((e-s)/2)
          if(A[mid] > k){
              e = mid-1;
          }
          else{
              s = mid+ 1;
          }
      }
      return s;
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