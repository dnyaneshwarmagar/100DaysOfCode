/* Given an array,arrwhich hasNintegers.

You need to print the smallest and largest element present in the array each on new lines.*/
function smallestAndLargestOfAll(n, arr){
   
    let max = arr[0], min = arr[0];
    for(let i= 0; i<n; i++){
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }
    }
    console.log(min)
    console.log(max)
}
