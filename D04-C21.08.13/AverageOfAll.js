/* You are given anarrwhich hasNintegers.

Write a program to print the ceil ofaverage of integerspresent in the array.

Note:- The ceil value of the given whole numberKis the smallest integer value greater or equal to aK.

For example:-

if the value of K = 3.679, the ceil value of K is 4
if the value of K = 5, the ceil value of K is 5.*/
function averageOfAll(n, arr){
    
    let sum = 0;
    for(let i=0; i<n;i++){
        sum += arr[i]
    }
    console.log(Math.ceil(sum/n))
}