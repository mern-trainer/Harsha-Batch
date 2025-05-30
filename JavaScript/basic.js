// JavaScript -> Object Oriented Programming language
// JavaScript is a dynamic programming language
// Javascript is used for creating interactive web pages

// variables -> Container for storing data values
// keywords -> reserved words in JavaScript
// Identifiers -> names of variables
// Data Types -> Type of values stored in a variable -> Number, String, Boolean, undefined, Object 

// static typing -> Type of a variable is defined at the time of declaration
// dynamic typing -> Type of a variable is defined at the time of execution

// operators -> used to perform operations on variables and values

// arithmetic operators -> +, -, *, /, %
// assignment operators -> =, +=, -=, *=, /=
// comparison operators -> ==, ===, !=, !==, >, <, >=, <=
// logical operators -> &&, ||, !
// unary operators -> ++, --

// let, var, const

// let -> block scope -> Re-declaration is not allowed, Re-Assignment is allowed
// var -> function scope, global scope -> Re-declaration is allowed, Re-Assignment is allowed
// const -> block scope -> Re-declaration is not allowed, Re-Assignment is not allowed

var a = 10;
console.log(a);
var a = "Hello";
console.log(a);

let b = 20;
console.log(b);
b = "Hello"
console.log(b);

const pi = 3.14

const c = 30
console.log(c);
// c = "Hey";
// console.log(c);

// Function -> Block of code which is executed only when it is called
// set of instructions that perform a task

function display(){
    console.log("Hello World");
}

// display()

function calc(a, b){ // parameters -> formal parameters
    const r = a + b
    return r
}

let res = calc(100, 500) // arguments -> actual parameters
console.log(res);

res = calc(100, 200) // arguments -> actual parameters
console.log(res);

res = calc(100, 20) // arguments -> actual parameters
console.log(res);

// conditional statements

// if, if else and else if, switch

// Binary Numbers -> 0 and 1

// 0, 1, 10, 11, 100, 101, 110, 111, 1000, 1001

const num1 = 10000
const num2 = 20

if(num1 > num2){
    console.log(num1 + " is greater than " + num2);
} else {
    console.log(num2 + " is greater than " + num1);
}

const num3 = 150

if(num1 > num2 && num1 > num3){
    console.log(num1 + " is greater than " + num2 + " and " + num3);
}else if(num2 > num3){
    console.log(num2 + " is greater than " + num1 + " and " + num3);
}else{
    console.log(num3 + " is greater than " + num1 + " and " + num2);
}

// switch, loop

const day = 7

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2: 
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4: 
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday");
        break;
    case 6: 
        console.log("Saturday");
        break;
    case 7: 
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Loops -> used to iterate over a block of code multiple times

// for, while, do while

// for

// ++, --

// let m = 0
// let n = 0
// let p = m-- // pre increment
// console.log(p, m);


for(let i = 0; i < 10; i++){
    if(i == 4){
        continue;
    }
    console.log(i);
}

let i = 0

while(true){
    if(i == 3){
        i++
        continue;
    }
    if(i == 10){
        break;
    }
    console.log(i); 
    i++
} // Entry controled loop

let j = 0

do{
    console.log(j);
    j++
} while(j < 0) // exit controled loop


// find the sum of n numbers.

// camel case -> firstName
// pascal case -> FirstName
// snake case -> first_name

function sumOfNNumbers(n){
    let sum = 0;
    for(let num = 1; num <= n; num++){
        sum += num // a += b
    }
    console.log(sum);
}

sumOfNNumbers(10)

