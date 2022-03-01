function pivot(arr, start=0, end=arr.length+1){
    function swap(array,i,j){
        var temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }
    var pivott=arr[start];
    var swapIdx=start;
    for(var i=start+1;i<arr.length;i++){
       if(pivott >arr[i]){
           swapIdx++;
           swap(arr,swapIdx,i);
       }
    }
    swap(arr,start,swapIdx);
    return arr;
}
console.log(pivot([4,3,8,2,9,12,34]));
