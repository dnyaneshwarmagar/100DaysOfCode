/*You are given an array of n elements and an integer k, you need to rotate the array by k units.*/
function runProgram(input) {
    input = input.trim().split("\n");
    var tc = +input[0];
    var l = 1;

    for (var i = 0; i < tc; i++) {
        var [n, K] = input[l++].trim().split(" ");
        var A = input[l++].trim().split(" ");
        fn(n, K, A)
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


function fn(n, K, A) {

    var k = K % n;


    function reverse(left, right, A) {
        while (left < right) {
            var temp = A[left];
            A[left] = A[right];
            A[right] = temp;

            left++;
            right--;
        }
        return A;
    }

    A = reverse(0, n - 1, A);

    A = reverse(0, k - 1, A);
    A = reverse(k, n - 1, A);

    var st = "";

    for (var i = 0; i < n; i++) {
        st = st + A[i] + " ";
    }
    console.log(st)
}