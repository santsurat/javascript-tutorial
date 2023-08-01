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

function checkValue() {
  console.log(score); // Output?
  var score = 5;
  {
    var score = 10;
  }
}
checkValue();
