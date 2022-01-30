/* You are given an array of N integers. You need to printYesif 42 is present in array, else printNo.*/
function equalTo42(size,arr) {

    let ans = "No"
    for(let i= 0; i<size; i++){
        if(arr[i] == 42){
            ans = "Yes"
        }
    }
    console.log(ans)
}