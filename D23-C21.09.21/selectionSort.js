/*You are given an array of N unsorted numbers. Your task is to write SELECTION SORT such that numbers present in the array gets sorted.*/
function runProgram(input) {
    var input = input.trim().split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    sort(N, arr);
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

function sort(N, arr) {

    for (var i = 0; i < N - 1; i++) {
        var min = i;
        for (var j = i + 1; j < N; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    var st = "";
    for (var i = 0; i < N; i++) {
        st = st + arr[i] + " ";
    }
    console.log(st);
}