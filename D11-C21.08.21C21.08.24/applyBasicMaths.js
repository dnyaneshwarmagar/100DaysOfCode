/* You are given an arrayAwithNelements. You are allowed toremove only one element, which makes thesum of all the remaining elements exactly divisible by 7.

Your task is to find thefirst index of smallest elementthat can be removed from array. If there is no answer print-1.*/

function applyBasicMaths(N,A){
    
    let sum = A.reduce(function(prev, el){
        return prev + el;
    },0)
    
    let min = Number.MAX_VALUE, ind = -1;

        for(let i= 0; i<N; i++){
            if((sum -A[i]) % 7 ===0){
               if(A[i] < min){
                   min = A[i];
                   ind = i;
               } 
            }
        }
    console.log(ind)
}
