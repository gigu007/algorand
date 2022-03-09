
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


const isEven = (n) => {
    return n % 2 == 0;
  }
   
  let printMsg = (evenFunc, num) => {
    const isNumEven = evenFunc(num);
    console.log(`The number ${num} is an even number: ${isNumEven}.`)
  }
   
  // Pass in isEven as the callback function
  printMsg(isEven, 4); 
  // Prints: The number 4 is an even number: True.
  //Assign a function to a variable originalFunc
const originalFunc = (num) => { return num + 2 };
 
//Re-assign the function to a new variable newFunc
const newFunc = originalFunc;
 
//Access the function's name property
newFunc.name; //'originalFunc'
 
//Return the function's body as a string
newFunc.toString(); //'(num) => { return num + 2 }'
 
//Add our own isMathFunction property to the function
newFunc.isMathFunction = true;
 
//Pass the function as an argument
const functionNameLength = (func) => { return func.name.length }; 
functionNameLength(originalFunc); //12
 
//Return the function
const returnFunc = () => { return newFunc };
returnFunc(); //[Function: originalFunc]
const numbers=[22,34,56,78,23,16,34,16];
numbers.forEach(number=>{
   console.log(number);
})
const finalParticipants=['mike','john','younis','arteta'];
const announcements=finalParticipants.map(member=>{
    return member + ' joined the contest';
})
// const announcements=finalParticipants.forEach(member=>{
//     console.log( member + ' joined the contest');
// })
console.log(announcements);