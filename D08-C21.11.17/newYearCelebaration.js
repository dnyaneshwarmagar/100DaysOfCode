/*New Year Celebration is coming near and DG is hosting a party for it, To make sure the party goes well she wants order in the party.There are two counters one of ice-cream and other for Cold-drinks.

On ice-cream counter the line was formed in form of Queue and on drinks counter the line was formed in order of Stacks.

She gave the management of the party to NV, NV made a plan to ask the manager following types of query.

Query types:

1 X : Number X enter the Queue.

2 X : Number X enter the Stack.

3: Output whoever is in-front of the queue.

4: Output whoever is on-top of the stack

5: Which person is in-front of queue get out of queue and enters the stack.

Note: If the Queue or Stack is empty then output "-1" */

function runProgram(input) {
    input = input.trim().split("\n");
    var o= +input[0];
    var l= 1;
    var s= [];
    var q= []; f=0; r=0;
    for(var i=0; i<o; i++){
        
        op= input[l++].trim().split(" ").map(Number);
        
        if(op[0] == 1){
            q[r++] =op[1];
        
    }
    else if(op[0] ==2 ){
       s.push(op[1]); 
    }
    else if(op[0] == 3){
        if(q.length ==0){
            console.log("-1");
        }
        else{
            console.log(q[f]);
        }
    }
    else if(op[0] == 4){
        if(q.length ==0){
            console.log("-1");
        }
        else{
      console.log(s[s.length-1]); 
        }
    }
    else if(op[0] == 5){
       s.push(q[f++]);
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