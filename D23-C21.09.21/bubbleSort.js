/*You are given an array of N unsorted numbers. Your task is to write BUBBLE SORT such that numbers present in the array gets sorted.*/
function runProgram(input) {
    var input = input.trim().split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    sortBubble(N, arr);

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

function sortBubble(N, arr) {
    for (var i = 0; i < N; i++) {
        for (var j = 0; j < N - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    var st = "";
    for (var i = 0; i < N; i++) {
        st = st + arr[i] + " ";
    }
    console.log(st);
}