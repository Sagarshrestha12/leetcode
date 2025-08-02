/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// This is a solution to the Two Sum problem using a brute force approach.
// var twoSum = function(nums, target) {
//     for(let i = 0;i <= nums.length-1; i++ ){
//         for(let j = i+1; j<= nums.length; j++){
//             if(nums[i]+nums[j]=== target){
//                 return [i,j];
//             }
//         }
//     }
// };

function isTargetOfNumFound(targetArr, startIndex, endIndex, targetNum) {
//   let startIndex = stra
let startIndexing = startIndex; 
  while (startIndex <= endIndex && startIndex >= startIndexing) {
    let mid = Math.floor((startIndex + endIndex) / 2);

    if (targetArr[mid] === targetNum) {
      return true; 
    } else if (targetNum < targetArr[mid]) {
      endIndex = mid - 1; 
    } else {
      startIndex = mid + 1; 
    }
  }

  return false;
}


var findIndexOfElement = function (nums,num, indexI){
 for(let i =0; i< nums.length; i++){
    if(indexI === -1 && nums[i]=== num){
        return i; 
    }
    else if(nums[i]=== num && indexI !== i){
        return i; 
    }
 }
 return 0; 
}

var twoSum = function(nums, target){

   let sortArray = [...nums].sort((a,b)=> a-b);

    for(let n =0; n < sortArray.length; n++ ){
        let num = sortArray[n];
        let numy  = target - num; 
        if(isTargetOfNumFound(sortArray, n+1, nums.length-1, numy)){
            
            let i = findIndexOfElement(nums,num, -1); 
            return [i,findIndexOfElement(nums,numy,i )]
        }
    }
    return [1,1]
}


// implelmenting the two sum problem using a hash map for better performance
var twoSumHashMap = function (nums, target){
 
 const map = new Map(); 
 for(let n = 0; n< nums.length ; n++){
    complement = target - nums[n];
    if(map.has(complement)){
        return [map.get(complement), n]
    }
    map.set(nums[n], n);
 } 
}

// javascript function  expression vs javascript function declaration
// function expression is not hoisted, while function declaration is hoisted
// function expression is used when we want to create a function that is not accessible outside of its scope
// Example of function expression
//function expresion can be named or unnamed
const add = function(a, b) {
    return a + b;
} 
// Example of function declaration
function subtract(a, b) {
    return a - b;
}

// How this works:
// this refers to the object that is executing the current function
// this defines which object currently executing the function

// Regular function 
function regularFunction() {
    console.log(`This is globle obj ${this}`); // 'this' refers to the global object (or undefined in strict mode)
} 
regularFunction(); // In a browser, this will log the Window object

console.log("khe")

// In an object method
const obj = {
    name: "Object",
    method: function() {
        console.log(`This is an object method ${this.name}`); // 'this' refers to the obj object
    }
};
obj.method(); // Logs: This is an object method Object

// to manually set the value of this, we can use call, apply, or bind


// In Reguar function, this depends on how the function is called
const user = {
    name: "User",
    greet: function() {
        console.log(`Hello, ${this.name}`); // 'this' refers to the user object
    }
};
user.greet(); // Logs: Hello, User // here this refers to the user object in greet method
const greet = user.greet;
greet(); // Logs: Hello, undefined (or throws an error in strict mode) because 'this' is not bound to the user object anymore

// Arrow functions do not have their own 'this' context

// they inherit 'this' from the surrounding lexical context
const arrowFunction = () => {
    console.log(`This is an arrow function ${this}`); // 'this' refers to the surrounding context, not the global object
}

// Inside a method or callback
const users= {
  name: "Sagar",
  greet: function () {
    setTimeout(function () {
      console.log("Regular:", this.name);
    }, 1000);
  }
};

user.greet(); // Regular: undefined
// The this inside setTimeout is not user, it's the global object.

// To fix this, we can use an arrow function
const userArrow = {
  name: "Sagar",
  greet: function () {
    setTimeout(() => {
      console.log("Arrow:", this.name);
    }, 1000);
  }
};    

// Arrow function inherits this from the greet function, which is bound to user
// Because the arrow function doesn't get its own this, it looks up to the outer scope

//Closures
// A closure is a function that has access to its own scope, the outer function's scope
// and the global scope, even after the outer function has finished executing.
// Closures are created every time a function is created
var count = function outerFunction() {
    let count = 0;
    
    function innerFunction() {
      count++;  
      console.log(count); // Accessing outerVariable from the outer function
      console.log(this.name); // Accessing global variable
    }

    return innerFunction; // Returning the inner function
}

const counter = count(); // count is now a closure
name = "Sagar"; 
counter(); // Logs: 1
counter(); // Logs: 2
counter(); // Logs: 3
// Global variable
// This “remembering” is what we call a closure.

// Closures are useful for data encapsulation, creating private variables, and maintaining state in asynchronous operations.
// Closures can also be used to create private variables, data privacy, and encapsulation in JavaScript.

function createSecret() {
  let secret = "I love JavaScript";

  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (newSecret) {
      secret = newSecret;
    }
  };
}

const mySecret = createSecret();
console.log(mySecret.getSecret()); // I love JavaScript
mySecret.setSecret("JS is powerful!");
console.log(mySecret.getSecret()); 

// call, apply, and bind
// These methods are used to set the value of 'this' in a function call
// They allow you to control the context in which a function is executed
// call: calls a function with a given 'this' value and arguments
// apply: calls a function with a given 'this' value and an array of arguments
// bind: creates a new function with a specified 'this' value and arguments
// call example
function greets(greeting) {
    console.log(`${greeting}, ${this.name}`);
}
const person = { name: "Sagar" };
greets.call(person, "Hello"); // Hello, Sagar      
// apply example
function greetWithArgs(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}
greetWithArgs.apply(person, ["Hi", "!"]); // Hi, Sagar! 
// bind example
function greetWithBind(greeting) {
    console.log(`${greeting}, ${this.name}`);
}
const boundGreet = greetWithBind.bind(person);
boundGreet("Hey"); // Hey, Sagar  later on you can this function. 

//deepcopy vs shallow copy
// Shallow copy creates a new object with the same properties as the original object
// but does not create copies of nested objects. Changes to nested objects in the original will affect
// the shallow copy and vice versa.
// Deep copy creates a new object with all properties and nested objects copied recursively.
// Changes to nested objects in the original will not affect the deep copy and vice versa.
// Shallow copy example
const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original }; // or Object.assign({}, original)
shallowCopy.b.c = 3; // This will affect the original object
console.log(original.b.c); // 3     

// Deep copy example
const deepCopy = structuredClone(original);
deepCopy.b.c = 4; // This will not affect the original object
console.log(original.b.c); // 3   

// map, filter, and reduce
// map: creates a new array with the results of calling a function on every element in the
// original array
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8] 

// filter: creates a new array with all elements that pass the test implemented by the provided function
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4] 


// understanding about event loop
// https://medium.com/@ignatovich.dm/the-javascript-event-loop-explained-with-examples-d8f7ddf0861d
//Components in event loop
// // Call Stack: where functions are executed
// The call stack is a data structure used by the JavaScript engine to keep track of function calls.
// When a function is called, it's pushed onto the stack.
// When the function finishes, it's popped off the stack.
// ✅ JavaScript is single-threaded, which means it can only run one function at a time, 
// and the call stack keeps track of where it is in that one-at-a-time execution.


// Web APIs: browser APIs that handle asynchronous operations (e.g., setTimeout, DOM events)
// Task Queue:  Stores tasks waiting to be executed after the call stack is empty.  These tasks are queued by setTimeout, setInterval, or other APIs.
// Microtask Queue: A higher-priority queue for promises and MutationObserver callbacks. 
// Microtasks are executed before tasks in the task queue.
// Event Loop: Continuously checks if the call stack is empty and pushes tasks from 
// the microtask queue or task queue to the call stack for execution.

// Types of Tasks in JavaScript
// Synchronous Tasks: Executed immediately on the call stack (e.g., function calls, variable declarations).
// Microtasks: High-priority asynchronous tasks, such as Promise callbacks and queueMicrotask.
// Macrotasks: Lower-priority asynchronous tasks, like setTimeout, setInterval, and DOM events.


// const fetchPromise = fetch(
//   "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// );

// fetchPromise
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[0].name);
//   })
//   .catch((error) => {
//     console.error(`Could not get products: ${error}`);
//   });

fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  });
