/*You are given a sorted arrayAof sizeN, and another integerK
You have to find if there exists a pair of integers with indexiandj, such thati != j, andA[i] - A[j] = k
If such a pair exists, printYes, else printNo.*/
function runProgram(input) {
    var input = input.trim().split("\n");
    var tc = +input[0];
    var l = 1;
    for (var i = 0; i < tc; i++) {
        var [N, K] = input[l++].trim().split(" ").map(Number);
        var A = input[l++].trim().split(" ").map(Number);
        fn(N, K, A);
    }

}

function fn(N, K, A) {
    var f = 0; s = 0;

    while (f < N && s < N) {
        var sub = A[s] - A[f];
        if (sub == K && f != s) {
            console.log("Yes");
            return;
        }
        else if (sub > K) {
            f++;
        }
        else {
            s++;
        }
    }
    console.log("No");
    return;
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

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
});
