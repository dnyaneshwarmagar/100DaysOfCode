/* Gagan challenged his friend to form apalindromefrom the given array which consists of only  1's and 2's.

Can you help his friend to print YES if it is possible to form a palindrome from the given array else print NO?*/
function isItPalindrome(n, arr) {
    var ob = {};
    for (var i = 0; i < n; i++) {
        if (ob[arr[i]] == undefined) {
            ob[arr[i]] = 1;
        }
        else {
            ob[arr[i]]++;
        }
    }
    var c = 0;
    for (key in ob) {
        if (ob[key] % 2 != 0) {
            c++
        }
    }
    if (((n % 2 == 0) && (c == 0)) || ((n % 2 != 0) && (c == 1))) {
        console.log("YES")
    }
    else {
        console.log("NO")
    }
}

