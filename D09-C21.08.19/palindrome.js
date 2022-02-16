/* You are given a integer num.

You need to printYesif that integer is a palindrome or else printNo.

A palindrome is a word, number, phrase, or other sequence of characters that reads the same backward as forward, such asmadamorracecar.*/

function detectPalindrome(num){

    num = num.toString();
    let i = 0;
    while(i<Math.floor(num.length/2)){
        if(num[i] !== num[num.length-1-i] ){
            console.log("No");
            return;
        }
        i++;
    }
    console.log("Yes")
    }
    