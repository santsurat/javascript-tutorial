// console.log("hello")

// function data1 (){
//    // let c;
//         {
//             let b = 8;
//         }
//         console.log(b)
//      }

//     data1();

// (function() {
//     let x = 20;
//     console.log(x);
//   })();
//   console.log(x); // Output: ReferenceError: x is not defined
  
// for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i); // Output: ReferenceError: i is not defined
  
// let a = 5;
// if (true) {
//   let a = 10;
//   console.log(a);
// }
// console.log(a);
// let x = 15;
// {
//   let x = 25;
//   console.log(x);
// }
// console.log(x);
// console.log(foo); // Output: [Function: foo]
// foo();
// function foo() {
//   console.log('Hello from foo!');
// }
// console.log(foo); // Output: [Function: foo]


// function outer() {
//     let x = 10;
//     function inner() {
//       console.log(x);
//     }
//     return inner;
//   }
//   const innerFunc = outer();
//   innerFunc(); // Output: 10
//   console.log(innerFunc());
//   console.log(innerFunc);

// let x = 5;
// Promise.resolve().then(() => {
//   console.log(x);
// });
// x = 10;

// console.log("hello");

// function anotherFunction() {
//   let x = 15;
//   {
//     var x = 30;
//     console.log(x);
//   }
//   console.log(x);
// }
// anotherFunction();

// let city = "New York";
// {
//   var city = "San Francisco";
//   console.log(city);
// }
// console.log(city);

// let count = 5;
// if (true) {
//   var count = 10;
//   console.log(count);
// }
// console.log(count);


// let color = "blue";
// {
//   console.log(color); // Output?
//   var color = "red";
//   let fruit = "apple";
// }
//let a = 50;
// {
//   let a = 60;
//   {
//     console.log(a); // Output?
//   }
// }
// console.log(a);
// const b = 70;
// {
//   console.log(b); // Output?
//   {
//     const b = 80;
//     console.log(b); // Output?
//   }
//   console.log(b); // Output?
// }

// let h = 180;
// if (true) {
//   {
//     let h = 190;
//   }
//   console.log(h); // Output?
// }
// console.log(h);

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i); // Output?

// let sum = 0;
// for (let j = 1; j <= 3; j++) {
//   sum += j;
// }
// console.log(sum);
// console.log(j); // Output?

// let result = 1;
// for (let k = 0; k < 4; k++) {
//   result *= 2;
// }
// console.log(result);
// console.log(k); // Output?

// for (let p = 0; p < 3; p++) {
//   console.log(p);
// }
// let p = 5;
// console.log(p); // Output?


// let sum = 0;
// for (let s = 1; s <= 4; s++) {
//   sum += s;
//   let multiplier = 2;
//   sum *= multiplier;
// }
// console.log(sum);
// console.log(multiplier); // Output?

// {
//   var x = 5;
// }
// {
//   console.log(x); // Output?
// }

// let count = 0;
// for (var i = 1; i <= 5; i++) {
//   count++;
// }
// console.log(count);
// console.log(i); // Output?

// var city = "New York";
// {
//   console.log(city); // Output?
//   var city = "San Francisco";
//   let fruit = "apple";
// }

// function checkValue() {
//   console.log(score); // Output?
//   var score = 5;
//   {
//     var score = 10;
//   }
// }
// checkValue();

// for (var i = 0; i < 5; ++i) {}
// console.log(i);


// function testScope() {
//   var x = 10;
// }
// testScope();
// console.log(x);

// function foo() {
//   if (true) {
//     var y = 20;
//   }
// }
// foo();
// console.log(y);


// var sum = 0;
// for (var j = 1; j <= 3; j++) {
//   console.log(j)
//   sum += j;
// }
// console.log(j);


// for (var a = 0; a < 3; a++) {
//   var a = "Loop";
// }
// console.log(a);

// for (var z = 1; z <= 3; z++) {
//   var z = 2;
// }
// console.log(z);

// for (var b = 1; b < 5; b++) {
//   for (var b = 1; b < 3; b++) {}
// }
// console.log(b);
// for (var d = 0; d < 1; d++) {
//   var d = d + 1;
// }
// console.log(d);

// Q2: Declare a variable using 'const' inside a function
// Q9: Create a function and declare a variable using 'const' inside it
// function myFunction() {
//   var age = 30;
//   if (true) {
//     var age = 35;
//     console.log(age);
//   }
//   console.log(age);
// }

// // Call the function
// myFunction();

// What do you observe?

// function scopeAndRedeclarationChallenge() {
//   // declare a variable with 'let'
//   let letVariable = 10;

//   // try to re-declare the same variable with 'var'
//   // this will raise an error
//   var varVariable = 20;

//   // try to re-declare the same variable with 'const'
//   // this will also raise an error
//   const constVariable = 30;
// }

// if (typeof window !== "undefined") {
//   window.onload = function() {
//     scopeAndRedeclarationChallenge();
//   };
// }

// function scopeChallenge1() {
//   let myVariable = 10;
//   if (true) {
//     var myVariable = 20;
//     console.log(myVariable);
//   }
//   console.log(myVariable);
// }

// scopeChallenge1();

// function scopeChallenge2() {
//   let myVariable = 10;
//   if (true) {
//     const myVariable = 20;
//     console.log(myVariable);
//   }
//   console.log(myVariable);
// }

// scopeChallenge2();
// function scopeChallenge3() {
//   let myVariable = 10;
//   {
//     var myVariable = 20;
//     console.log(myVariable);
//   }
//   console.log(myVariable);
// }

// scopeChallenge3();

// function scopeChallenge9() {
//   // myVariable = 10;
//   {
//     var myVariable = 20;
//   }
//   console.log(myVariable);
// }

// scopeChallenge9();
// console.log(myVariable)

// function scopeChallenge10() {
//   let myVariable = 10;
//   {
//     const myVariable = 20;
//   }
//   console.log(myVariable);
// }

// scopeChallenge10();
// console.log(myVariable)
// var abc
// function myVariable (){
//     var a = 6
// if(true){
//    let abc = 5
// console.log(abc)

// }
// console.log(a);
// }

// myVariable()

// const person = { name: 'John', age: 25 };

// person.city = 'New York';

// console.log(person);

// function challenge() {
//    var c = 45;
//    {
//      let c = 55;
//      console.log(c);
//    }
//    console.log(c);
//  }
//  challenge();
 
// const hero = {
//    firstName:'superman',
//    age:10,

// };

// const Data= JSON.stringify(hero);
// console.log(typeof Data);

// const data = ["hello", "bolo","Hello"]
// console.log(data);

// console.log(data.join(" "));
// console.log(typeof data);

// const todayDate = new Date(2023,7,8 , 20 , 56) ;
// const newDate = new Date();
// console.log(newDate.toLocaleDateString());
// console.log(newDate.toLocaleTimeString());

// const myObj = {
//     name : "ups",
//     age :"29"
// };
// myObj.name= "surat";
// Object.freeze(myObj);
// Object.seal(myObj);

// myObj.name= "ram";
// delete myObj.name
// myObj.class= "10th";

// console.log(myObj);


// function TakeTwoNumber(number1, number2) {
//   // result = number1+number2
//   // console.log(result);
//   // console.log('hello')
//   return number1 + number2;
// }

// const newResult = TakeTwoNumber(5, 8);
// console.log(newResult);

// IIFE -> immediately invoked function expression

// (function myName () {
//     console.log('Ram');
// } )();


// ( () => {
//     var a = 'a';
//     console.log(a);
// }) ();


// const todayDate = new Date();

// const afterTenDay = new Date(2023 , 8 , 18 );


// console.log(todayDate.toLocaleDateString());
// console.log(afterTenDay.toLocaleDateString());




// if(todayDate > afterTenDay){
//   console.log("no");
// }else{
//   console.log('yes');
// }

// const todayTime = new Date();

// const afterfewMinTime = new Date(0, 0 , 0 , 15 , 1 );

// console.log(todayTime)

// console.log(todayTime.toLocaleTimeString());
// console.log(afterfewMinTime.toLocaleTimeString());




// if(todayTime.toLocaleTimeString() > afterfewMinTime.toLocaleTimeString()){
//   console.log("no");
// }else{
//   console.log('yes');
// }