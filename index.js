// Encapsulation - Reduce complexity + increase reusability
// Abstraction - Reduce complexity + isolate impact of changes
// Inheritance - Helps to eliminate the repetition of code
// Polymorphism - Refactor ugly switch/case statments

// console.log("Hello World!");

// Section 1 - Objects
// ==========================================
// Objects  (Collection of Key Value Pairs)
// const circle = {
//   radius: 1,
//   localtion: {
//     x: 1,
//     y: 1
//   },
//   draw: function() {
//     console.log('draw');
//   }
// };

// circle.draw();

// Factory Function
// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log('draw');
//     }
//   };
// }

// const circle = createCircle(5);
// circle.draw();

// Constructor Function
// function Circle(radius) {
//   // this is the reference to the object executing this piece of code
//   console.log('this', this);
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   }
// }

// const another = new Circle(1);

//Value vs Reference types
// Primitives are copied by their value
// Objects are copied by their reference
let x = { value: 10 };
let y = x;

x = 20;

let number = 10;

function increase(number){
  number++;
}

increase(number);
console.log(number);

//Adding or Removing properties
function Circle(radius){
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const circle = new Circle(10);
circle.location = { x: 1, y: 1 };
console.log(circle);
delete circle.location;
console.log(circle);

// Enumerating properties
for (let key in circle) {
  if(typeof circle[key] !== 'function')
    console.log(key, circle[key]);
}


// Abstraction - Hide the details and expose essentials
// Private properties and methods

function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };
  let draw = function() {
    console.log('draw');
  }
}
// Getters and Setters - Need to understand it properly

// Stopwatch Example
function Stopwatch() {
  let startTime, endTime, running, duration = 0;
  this.start = function() {
    if(running)
      throw new Error('Stopwatch has already started.');
    running = true;
    startTime = new Date();
  };
  this.stop = function() {
    if(!running)
      throw new Error('Stopwatch has already stopped.');
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };
  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };
  Object.defineProperty(this, 'duration', {
    get: function() { return duration; }
  });
}

// Section 2 - Prototypes
// ==========================================
// Inheritance

// Classical vs Prototypical
// Prototype is just a regular object!

// Multilevel Inheritance
// myArray => arrayBase => objectBase
// circle => circleBase => objectBase

//
