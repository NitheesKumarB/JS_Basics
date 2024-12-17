


// CallBack
// function task1(callback){
//     console.log("task 1");
//     callback();
// }
// function task2(callback){
//     console.log("task 2");
//     callback();
// }
// function task3(callback){
//     console.log("task 3");
//     callback();
// }
// function task4(callback){
//     console.log("task 4"); 
//     callback();  
// }

const { resolve } = require("node:path/posix");
const { setTimeout } = require("timers/promises");

// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                 console.log("tasks are completed")
//             });
//         });
//     });
// });


// Promise --> which is used to handle asynchronous operation

function task1(){
    return new Promise( (resolve,rejects)  =>{
        setTimeout(() => {
            resolve("task 1 completed");
        },7000);
         
    })
}
function task2(){
    return new Promise((resolve,rejects) =>{
          setTimeout(() => {
            resolve("task 2 completed");
          },5000);
          
    })
}

task1()
    .then(value =>{
        console.log(value);return task2()
    }).then(value=>{
        console.log(value)
    })


let arr = [1,2,3,4,6]

// common methods 
// 1. push() --> Add elements to the end of an array
arr.push(7);
console.log(arr)

// 2.pop() --> Removes the last element
arr.pop();
console.log(arr)

// shift  --> removes the first element
console.log(arr.shift())
// unshift --> add the first element
arr.unshift()
console.log(arr)

// Modifying the array
// length --> calculate the length of an array

console.log(arr.length);

console.log(arr.includes(4))
// includes --> Checks if an element is present in an array
console.log(arr.indexOf(3))
// index of --> find out the index of the elemnt in an array

//concat() --> combines an array

let arr1 = arr.concat([44,55,66]);
console.log(arr1)

// slice --> 

let sli = arr.slice(0,3);
console.log(sli);
console.log(arr);

// splice --> add/ removes elements at specific index



// reverse()  --> reversing an array
let rev = arr.reverse();
console.log(rev);

// sort() --> sort the elements of an array in place

let animals = ["tiger","lion","elephant"];
animals.sort();
console.log(animals);

let num = [10,2,8,1]
num.sort();
console.log(num)

num.sort((a,b)=> a-b);
console.log(num)

num.sort((a,b)=> b-a);
console.log(num)

// async -> is a function that always returns a promise
//  syntax - > async function name() {}

// await -> Keyword -> that should always return inside the async function
//  let name = await 

async function day() {
    const morning = await morning();
    console.log(mor);
    const gym = await gym();
    console.log(gym);
    const office = await office();
    console.log(offc);

}

day();



















