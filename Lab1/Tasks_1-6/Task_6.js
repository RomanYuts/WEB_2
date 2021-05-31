//Сортування бульбашкою масиву

function bubbleSort(arr)
{
    var n = arr.length-1;
    for (let i = 0; i < n-1; i++) 
            for (let j = 0; j < n-i-1; j++) 
                if (arr[j] > arr[j+1]) 
                {  
                    let temp = arr[j]; 
                    arr[j] = arr[j+1]; 
                    arr[j+1] = temp; 
                } 
    return arr; 
}

function showBubbleSort(arr){
    console.log('Task6 ->', bubbleSort(arr));
}

module.exports.showBubbleSort = showBubbleSort;