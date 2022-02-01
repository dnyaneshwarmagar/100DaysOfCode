/* Given an arrayarrofnintegers.

You need to find out the length of the longest subarray which is strictly increasing i.e, every element is greater than it's the previous element in that subarray.*/

function longestIncSubArr(n, arr) {
  
    let l= 1, max_length = 1;
    for(let i = 1; i<n; i++){
      
        if(arr[i] > arr[i-1]){
            l++;
        }
        
        else{
            if(l>max_length){
                max_length = l;
            }
            l=1;
        }
    }
     if(l>max_length){
                max_length = l;
            }
    console.log(max_length)
  }