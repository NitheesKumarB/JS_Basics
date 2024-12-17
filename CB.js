
// Callback 

const { resolve } = require("path");
const { chromium } = require("playwright");
const { setTimeout } = require("timers/promises");

// function task1(callback){

// console.log("task 1");
// callback();
// }

// function task2(callback){
//     console.log("task 2");
//     callback();
// }
// function task3(callback){

//     console.log("task 3");
//     callback();
//     }
    
//     function task4(callback){
//         console.log("task 4");
//         callback();
//     }
//    task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                 console.log("tasks completed")
//             })
//         })
//     })
//    })


//    // setTimeout()

//    console.log("start");

//    setTimeout(() => {
//     console.log("delayed by 5 seconds");
//    }, 5000);

//    console.log("end");
   

// Promise -> to handle asynchronous operation

// syntax --> return new Promise((resolve,rejects))

// function task1(){
//     return new Promise((resolve) =>{
        
//         setTimeout(() => {
//             resolve("task 1 completed");
//         }, 5000);
        
//     })
// }

// function task2(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve("task 2 completed") 
//         }, 3000);
       
//     })
// }

// task1()
// .then(result => {console.log(result);return task2()})
// .then(result => console.log(result))






// function downloadFile{
// downloading the file
// file downloaded --> should be printed after 3 secs
// }
// function processFile{
// processing the file
// file processed--> should be printed after 3 secs
// }
// function saveFile{
//saving the file
// file saved--> should be printed after 3 secs
// }

// downloading the file
// file downloaded
// processing the file
// file processed
// saving the file
// file saved


// map  --> Creates a new array by applaying a function to each element

// Syntax -> array.map(element,index,array)

const numbers = [1,2,3,4];

const sq = numbers.map(num=> num+2);
console.log(sq);

// filter -> Creates new new array that contains elements which satisfy a given condition

const nu = [1,3,6,8,10,11];
const res = nu.filter(num => num %2 == 0);
console.log(res);

// reduce -> reduce an array to a single value by applaying a function

const red = [1,2,3,4,5]
const sum = red.reduce((acc , num) => acc + num,0)

console.log(sum);



// async -> is a function that always returns a promise
//  syntax - > async function name() {}

// await -> Keyword -> that should always return inside the async function
//  let name = await 

function morning(){
    
        console.log("good morning");
   
}

async function name() {
    await morning();
}

name();


