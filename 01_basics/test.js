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

let x = 5;
Promise.resolve().then(() => {
  console.log(x);
});
x = 10;

// console.log("hello");