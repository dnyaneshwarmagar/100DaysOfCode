/*You are given a number stored in a variable with the namenum

Check if the number is a prime number or not

If the value stored innum, is a prime number printYes, else printNo

Note : A prime number is a number, that is divisible by only 1 and the number itsel */

function identifyPrime(num) {
   
    for(let i=2; i<=num/2; i++){
        if(num%i === 0){
            console.log("No");
            return;
        }
    }
    console.log("Yes")
 }