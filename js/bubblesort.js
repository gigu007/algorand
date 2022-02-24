function bubblesort(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
console.log(bubblesort([23,12,34,14,56,38]));
function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let lowest=i;
        for(let j=i+1;j<arr.length;j++) {
            if(arr[lowest]>arr[j]){
                lowest=j;
            }
        }
        let temp=arr[i];
        arr[i]=arr[lowest];
        arr[lowest]=temp;
    }
    return arr;
}
console.log(selectionSort([23,56,35,67,43]));

