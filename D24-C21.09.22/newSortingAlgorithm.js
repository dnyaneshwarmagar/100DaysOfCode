/*Hassan has discovered his own sorting algorithm. The algorithm has following conditions:

1. Given an integer k,  sort the values in the array according to their modulo with k. That is, if there are two integers a and b, and a%k < b%k, then a would come before b in the sorted array.

2. If a%k = b%k, then the integer which comes first in the given array remains first in the sorted array.

Your task is to write a program that sorts the given array as per above mentioned condition and print the sorted array. */

function runProgram(input) {
    input = input.trim().split("\n");
    var [N, k] = input[0].trim().split(" ").map(Number);
    var A = input[1].trim().split(" ").map(Number);
    fn(N, k, A);

}
function fn(N, k, A) {

    for (var i = 0; i < N - 1; i++) {

        for (var j = 0; j < N - 1 - i; j++) {

            if (A[j] % k > A[j + 1] % k) {
                temp = A[j];
                A[j] = A[j + 1];
                A[j + 1] = temp;
            }

        }

    }


    console.log(A.join(" "));
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

