/*You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer arrayflowerbedcontaining0's and1's, where0means empty and1means not empty, and an integern, find out if ifnnew flowers can be planted in theflowerbedwithout violating the no-adjacent-flowers rule.*/

function runProgram(input) {
    input= input.trim().split("\n");
        let tc= +input[0];
        let l= 1; 
        
        for(let i= 0; i< tc; i++){
            let [n,f] = input[l++].trim().split(" ").map(Number);
            let m = input[l++].trim().split(" ").map(Number);
            let res =fn(n,f,m);
            if(res == true){
                console.log("Yes")
            }
            else{
                console.log("No")
            }
        }	
    
      }
      function fn(n,f,m){
          
             if (f == 0) return true;
            for (let i = 0; i < m.length; i ++) {
                if (m[i] == 0 && ( i== 0 || m[i - 1] == 0) && (i == m.length-1 || m[i + 1] == 0)) { 
                    -- f;
                    if (f == 0) return true;
                    m[i] = 1; 
                }
            }
            return false;
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