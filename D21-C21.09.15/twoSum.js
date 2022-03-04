/*Given a sorted array of integers, return indices of two numbers such that they add up to a target value.

Print -1 -1 if not found.*/
function runProgram(input) {

    input = input.trim().split("\n");
    var tc = +input[0];
    var line = 1;

    for (var i = 0; i < tc; i++) {
        var [N, B] = input[line++].trim().split(" ").map(Number);

        var arr = input[line++].trim().split(" ").map(Number);

        let res = fn(N, B, arr);
        console.log(res)
    }
}

function fn(N, B, arr) {
    left = 0;
    right = N - 1;
    let str, sum, ans = "-1 -1";
    while (left < right) {

        str = "";

        sum = arr[left] + arr[right];
        if (sum == B) {
            ans = str + left + " " + right;

            return ans;
        }
        else if (sum > B) {
            right--;
        }
        else {
            left++;
        }

    }

    return ans;
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

