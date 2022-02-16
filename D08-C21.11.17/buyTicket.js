/*There is a long waiting line of integers waiting for their turn to buy ticket for a cricket match.

There are N operations that can be performed on this line. The operations are of following type:

E x : Integer x enters the queue (For such operation, print the new length of the queue.)

D: The integer at front buys ticket and leaves the queue (For such operations, print the element that left the queue and the new size of the queue separated by space. If there is no element in the queue then print -1 in place of deleted element.) */
function runProgram(input) {
    input= input.trim().split("\n");
    let N= +input[0];
    let l= 1;
    
    let front =0; rear= 0;
    let queue = [];
    
    for(let i=0; i<N; i++){
        let print = "";
        
        let op = input[l++].trim().split(" ")
        
        if( op[0] == "E"){
            queue.push(Number(op[1]));
            rear++;
            console.log(queue.length)
            
        }
        else if( op[0] == "D"){
            if(queue.length != 0){
                print = +queue.shift()+ " " + queue.length;
                console.log(print);
                front++;
            }
            else{
                print = "-1" + " " + queue.length;
                console.log(print);
                front++;
            }
            
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