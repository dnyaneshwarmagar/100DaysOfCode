/*You are given a numberN, you need to find sum of all the even numbers which are less than or equal to N. */

function sumRelatedProblem(N) {
    let sum = 0;
    for(let i=1; i<=N; i++){
        if(i%2 == 0){
            sum += i;
        }
    }
    console.log(sum)
}