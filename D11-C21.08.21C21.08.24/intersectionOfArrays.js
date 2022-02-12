/*You are given 2 arraysarr1andarr2ofNintegers.

Your task is to write a program that finds the one integer which is common in both arrays (arr1andarr2).

Note: There is always one integer common in both arrays. */

function intersectionOfArray(N, arr1, arr2){
    for(let i=0; i<N; i++){
        for(let j= 0; j<N ; j++){
            if(arr1[i] === arr2[j]){
                console.log(arr2[j]);
                return
            }
        }
    }
}