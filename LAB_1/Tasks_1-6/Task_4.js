//Алгоритм бінарного пошуку

function binarySearch(arr, x){ 
    let start=0, end=arr.length-1; 
    while (start<=end){ 
        let mid=Math.floor((start + end)/2); 
        if (arr[mid]===x) 
             return true; 
        else if (arr[mid] < x)  
             start = mid + 1; 
        else
             end = mid - 1; 
    } 
   
    return false; 
} 

function showBinarySearch(arr, x){
    if(binarySearch(arr, x)){
        console.log('Task4 -> Element found!');
    }
    else{
        console.log('Task4 -> Element not found!');
    }
}

module.exports.showBinarySearch = showBinarySearch;