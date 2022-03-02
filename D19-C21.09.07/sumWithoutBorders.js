/*You are given a matrix of size n x m. Find the sum of all the elements of the matrix which do not lie at the border */
function sumWithoutBorders(N, M, matrix) {

    var sum = 0;
    for (var r = 1; r < N - 1; r++) {
        for (var c = 1; c < M - 1; c++) {

            sum = sum + matrix[r][c];
        }
    }
    console.log(sum)

}