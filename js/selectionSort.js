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

function add(num){
    var a=0;
    for(var i=0;i<=num;i++){
        a=a+i;
    }
    return a;

}
console.log(add(4));

