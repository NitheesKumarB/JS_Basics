

// console.log("i am nithees kumar")     // Printing Statement
// console.log("welcome to my class");
// console.log("hello world");


// console.log("i am nithees kumar","welcome to my class","hello world");

// console.log("i am nithees kumar \nwelcome to my class \nhello world");

// console.log(`i am nithees kumar
//     welcome to my class
//    hello world `)

// Variables --> To Store the data values
// a = 10
// phone =  9150498893 

// 3 types of variables

// 1. var --> It can be redeclared and reassign
var a = 10;  // declaration
var a = 12;  // redeclare

var b= 121;
b = 123;  // reassigning 


// 2. let --> It cannot be redeclared and can be reassign
let c = 34;
c = 23;
c = 34;


// 3. const - It cannot be redeclared or reassign

const d = 234;

// Datatypes --> used to define a data

// Primitive datatypes -> Stores single in single reference

// 1. String -> Group of characters enclosed within double/single quotes
let str = "nithees kumar";
// console.log(str)

// 2. Number  -> 12345
let num = 12345;
// console.log(num);

// 3. Boolean -> true/false
let bol = true;
// console.log(bol);

// 4. null -> no value
let n = null;
// console.log(n);

// 5. Undefined -> not declaring any values
let def ;
// console.log(def);


let str1 = "gopi";
// console.log(`My name is ${str1}`);
// my name is gopi


// loop --> it executes the same set of statement again and again until the condition satisfies


// for
// while 
// do-while

// for(initialization;condition;iteration)

// for(let a = 1;a<=5;a++){
//     console.log(a);
    
// }

for(a=1;a<=10;a++){
    if(a==5){
        // console.log(a);
        
    }
}

// while   --> Entry checking loop
//  initialization
// while(condition){
// statement
// iteration
// }

// let d1 = 1;
// while(d1<=5){
//     d1++;
// console.log(d1);

// }

// Do While  --> Exit checking loop
//  initialization
// {
// statement
// iteration
// }while(condition)



// setTimeout()

// console.log("start");
// setTimeout(() => {
//     console.log("delayed");
// }, 3000);

// console.log("end");

// function fun(name){
//     console.log(`name is ${name}`)
// }
// setTimeout(fun,2000,"nithees")


// callback -->is a function passed as an parameter/argument to another function

// function task1(callback){
//     console.log("task 1");
//     callback();
// }
// function task2(){
//     console.log("task2")
// }
// task1(task2)


// callback hell 

function task1(callback){
    setTimeout(() => {
        console.log("task 1");
        
    }, 10000);
    callback(); 
}
function task2(callback){
    console.log("task 2")
    callback();
}
function task3(callback){
    console.log("task 3");
    callback();
}
function task4(callback){
    console.log("task 4");
    callback();
}

// task1(()=>{
//     task2(()=>{
//         task3(() => {
//             task4(()=>{
//                 console.log("tasks completed")
//             })
//         })
//     })
// })




// function--> block of code

function per(){
    let a = 10;
}

per();

function perr(a,b){
    console.log(`name is ${a} \nage is ${b}`)
}
perr('nithees',24);


function ret(){
    return 23;
}
console.log(ret());

let a1 = 12;
let b1 = ret();
let c1 = a1+b1;

console.log(c1);


let strw = 'nithees kumar';
let res = strw.slice(-6);
console.log(res);

console.log(strw.replace('kumar','gopi'));

let ss = "welcome to the class";
let sp = ss.split(' ');
console.log(sp);

let sss = "gopi";
let rep = sss.repeat(3);
console.log(rep);

