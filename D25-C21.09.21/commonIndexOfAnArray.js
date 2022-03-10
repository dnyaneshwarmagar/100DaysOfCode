/*You are given two sorted arraysAandBof sizeNandM.
You have to find the list of elements common in both the arrays
The resultant list should also be sorted.
Note: If there are not elements common in both the arrays, then print-1*/
function runProgram(input) {
    input = input.trim().split("\n");
    var tc = +input[0];
    var l = 1;

    for (var i = 0; i < tc; i++) {
        N = +input[l++];
        A = input[l++].trim().split(" ").map(Number);
        M = +input[l++];
        B = input[l++].trim().split(" ").map(Number);

        fn(N, M, A, B);
    }

}
function fn(N, M, A, B) {

    var f = 0; s = 0;
    var ans = [];

    while (f < N && s < M) {

        if (A[f] == B[s]) {
            ans.push(A[f])
            f++;
            s++;
        }
        else if (B[s] > A[f]) {
            f++;
        }
        else {
            s++;
        }
    }

    if (ans.length == 0) {
        console.log("-1");
    }
    else {
        var st = "";
        for (var i = 0; i < ans.length; i++) {
            st = st + ans[i] + " ";
        }
        console.log(st)
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
        process.exit(0);
    });
}

