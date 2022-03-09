
// let counter=0;
// function incrementCounter(){
//     counter=counter +2;
//     recallFunct();
// }
// function recallFunct(){
//     console.log(counter);
// }
// setInterval(() => {
//     incrementCounter();
// }, 2000);


// const isTaskCompleted=false;
// if(isTaskCompleted){
//     console.log('task completed');
// }
// else{
//     console.log('task incomplete');
// }
// console.log(isTaskCompleted);

// const sum =(first,second)=>{
//     return first + second;
// }
// console.log(sum(45,58));
// const checkweight=weight=>{
//     console.log(`baggage weight : ${weight}, kilogram`);
// }
// console.log(checkweight(56));
// const multiply=(a,b)=>a*b;
// console.log(multiply(2,5));
const items=['green','red','blue','yellow'];
for(let i=items.length-1;i>=0;i--){
    console.log(`${i}.${items[i]}`);
}
for(let outer=0;outer<2;outer++){
    for(let inner=0;inner<3;inner++){
        console.log(`${outer}-${inner}`);
    }
}
let plusFive=(number)=>{
    return number + 5;
}
let f=plusFive;
console.log(f(15));
