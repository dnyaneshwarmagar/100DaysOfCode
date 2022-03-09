/*Given an array A of non-negative integers of size **m**. Your task is to sort the array in non-decreasing order and print out the original indices of the new sorted array.

Example:

A={4,5,3,7,1}

After sorting the new array becomes A={1,3,4,5,7}.

The required output should be "4 2 0 1 3"

NOTE: The indexing of the array starts with 0.

You can only write your own sorting algorithm must not use builtin functionality of sort()*/

function runProgram(input) {
    var input = input.trim().split("\n");
    var m = +input[0];
    var A = input[1].trim().split(" ").map(Number);
    fn(m, A);

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
        process.exit(0);
    });
}

function fn(m, A) {
    var ind = [];

    for (let i = 0; i < m; i++) {
        ind.push(i);
    }


    for (let i = 0; i < m - 1; i++) {
        for (var j = 0; j < m - 1 - i; j++) {
            if (A[j] > A[j + 1]) {
                var temp = A[j];
                A[j] = A[j + 1];
                A[j + 1] = temp;

                var temp1 = ind[j];
                ind[j] = ind[j + 1];
                ind[j + 1] = temp1
            }
        }
    }
    console.log(ind.join(" "))
}