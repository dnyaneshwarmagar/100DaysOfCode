/*Given an array A of N positive numbers. The task is to find the position where equilibrium first occurs in the array. Equilibrium position in an array is a position such that the sum of elements before it is equal to the sum of elements after it.*/
function equilibriumElement(N, arr) {
    //write code here
    for (var i = 0; i < N; i++) {
        var s1 = 0;
        var s2 = 0;
        var flag = false;
        var ind = null;
        for (var j = 0; j < i; j++) {
            s1 = s1 + arr[j];
        }
        for (var j = i + 1; j < N; j++) {
            s2 = s2 + arr[j];
        }
        if (s1 == s2) {
            flag = true;
            ind = i + 1;
            break;
        }
    }
    if (flag == true) {
        console.log(ind);
    }
    else {
        console.log("-1");
    }
}