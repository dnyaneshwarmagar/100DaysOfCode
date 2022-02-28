/*You are given a 3D Array, of N layers, M rows, and K columns. You have to take the input, and print the 3D Array in the form as mentioned in the sample test case.*/

function Array3D(N, M, K, array) {

    for (var k = 0; k < N; k++) {
        var p = 0;
        for (var i = 0; i < M; i++) {
            var str = "";
            for (var j = 0; j < K; j++) {
                str = str + array[k][i][j] + " ";

            }
            console.log(str);
        }
    }
}