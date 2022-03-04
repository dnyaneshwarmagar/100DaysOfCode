/*Given an array of integers and a number k, find the maximum sum of a subarray of size k.*/
function runProgram(input) {
    var input = input.trim().split("\n");
    var n = +input[0].trim().split(" ")[0];
    var k = +input[0].trim().split(" ")[1];

    var arr = input[1].trim().split(" ").map(Number);
    fn(n, k, arr);
}

function fn(n, k, arr) {

    var sum = 0; max = 0;
    for (var i = 0; i <= k - 1; i++) {
        sum = sum + arr[i];
    }
    if (max < sum) {
        max = sum;
    }
    for (var i = k; i < n; i++) {
        sum = sum + arr[i];
        sum = sum - arr[i - k];
        if (max < sum) {
            max = sum;
        }
    }
    console.log(max);

}
if (process.env.USERNAME === "") {
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


