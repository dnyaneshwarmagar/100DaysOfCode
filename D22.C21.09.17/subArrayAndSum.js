/*Given an array of integers of length n and a positive integer K, the task is to find the count of the longest possible subarrays with the sum of its elements not divisible by K.*/
function runProgram(input) {
    input = input.trim().split("\n");
    var [n, k] = input[0].trim().split(" ").map(Number);
    var A = input[1].trim().split(" ").map(Number);
    fn(n, k, A);

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


function fn(n, k, A) {

    sum = 0; left = -1; right = 0;

    for (var i = 0; i < n; i++) {
        if (A[i] % k != 0) {
            if (left == -1) {
                left = i;
            }
            right = i;
        }
        sum = sum + A[i];
    }

    if (left == -1) {
        console.log("0");
        return;
    }
    if (sum % k != 0) {
        console.log("1");
        return;
    }

    var l1 = n - (left + 1);
    var l2 = n - right;

    windowSize = Math.max(l1, l2);
    var ws = windowSize;


    c = 0;
    i = 0
    j = ws - 1
    while (j < n) {
        sum = 0
        for (var p = i; p <= j; p++) {
            sum = sum + A[p]

        }
        if (sum % k != 0) {
            c++;
        }
        i++
        j++

    }

    console.log(c);
}
