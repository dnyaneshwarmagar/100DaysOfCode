/*You are given an arrayA, containingNintegers. Find the digit sum array for the given array.

The digit sum array for a given arrayA, contains the sum of the digits present in a given number, stored at the corresponding index inA.

Refer the sample I/O for better understanding. */

function runProgram(input) {
    var input = input.trim().split("\n");
    var tc = +input[0];
    var l = 1;

    for (var i = 0; i < tc; i++) {
        var N = +input[l++];
        var A = input[l++].trim().split(" ").map(Number);
        fn(N, A);
    }
}

function fn(N, A) {
    arr = "";
    for (var i = 0; i < N; i++) {
        str = A[i].toString();

        sum = 0;
        for (var j = 0; j < str.length; j++) {
            sum = sum + (+str[j]);
        }
        arr = arr + sum + " ";
    }
    console.log(arr);
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

