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
// let x = { value: 10 };
// let y = x;

// x = 20;

// let number = 10;

// function increase(number){
//   number++;
// }

// increase(number);
// console.log(number);

// //Adding or Removing properties
// function Circle(radius){
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   }
// }

// const circle = new Circle(10);
// circle.location = { x: 1, y: 1 };
// console.log(circle);
// delete circle.location;
// console.log(circle);

// Enumerating properties
// for (let key in circle) {
//   if(typeof circle[key] !== 'function')
//     console.log(key, circle[key]);
// }


// Abstraction - Hide the details and expose essentials
// Private properties and methods

// function Circle(radius) {
//   this.radius = radius;
//   let defaultLocation = { x: 0, y: 0 };
//   let draw = function() {
//     console.log('draw');
//   }
// }
// Getters and Setters - Need to understand it properly

// Stopwatch Example
// function Stopwatch() {
//   let startTime, endTime, running, duration = 0;
//   this.start = function() {
//     if(running)
//       throw new Error('Stopwatch has already started.');
//     running = true;
//     startTime = new Date();
//   };
//   this.stop = function() {
//     if(!running)
//       throw new Error('Stopwatch has already stopped.');
//     running = false;
//     endTime = new Date();
//     const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//     duration += seconds;
//   };
//   this.reset = function() {
//     startTime = null;
//     endTime = null;
//     running = false;
//     duration = 0;
//   };
//   Object.defineProperty(this, 'duration', {
//     get: function() { return duration; }
//   });
// }

// Section 2 - Prototypes
// ==========================================
// Inheritance

// Classical vs Prototypical
// Prototype is just a regular object!

// Multilevel Inheritance
// myArray => arrayBase => objectBase
// circle => circleBase => objectBase

//Property Descriptors
// let person = { name: 'Parth'};

// Object.defineProperty(person, 'name', {
//   writable: false, //can modify their values, I can update a property just assigning a new value to it.
//   configurable: false, //can modify the behavior of the property, so I can make them non-enumerable, non-writable or even non-cofigurable
//   enumerable: true //An enumerable property in JavaScript means that a property can be viewed if it is iterated using the for…in loop or Object.keys() method.
// });
// delete person.name
// console.log(person);
// person.name = 'John';
// console.log(Object.keys(person)); // returns only name (person.name);

//Constructor Prototypes
//Prototype vs Instance members
//Circle.prototype === c1.__proto__;


// function Circle(radius){
//   // Instance members
//   this.radius = radius;

//   this.move = function(){
//     console.log('move');
//   }
// }

// // Prototype members
// Circle.prototype.draw = function() {
//   this.move();
//   console.log('draw');
// };

// Circle.prototype.toString = function() {
//   return 'Circle with radius ' + this.radius;
// };

// const c1 = new Circle(1);
// const c2 = new Circle(2);

//Iterating Instance and Prototype Members
// For In return all members(instance and prototype)
// Should not modify built-in objects in Javascript


// Section 3 - Prototypical Inheritance
// ==========================================

// new - creates new empty operator
// then set this to that Object
//  new object will return that object

// intermediate function inheritance
// Method overriding
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(){
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
};

function Circle1(){

}

Circle1.prototype.duplicate = function() {
  console.log('duplicate');
};

extend(Shape, Circle1);

Circle1.prototype.duplicate = function() {
  // Shape.prototype.duplicate.call(this);
  console.log('duplicate circle1');
};

// const c1 = new Circle1();

// Polymorphism = Multiple Forms

function Square() {
}

extend(Square, Shape);

Square.prototype.duplicate = function() {
  console.log('duplicate square');
};

const shapes = [new Circle1(), new Shape(), new Square()];
for (let shape of shapes)
  shape.duplicate();


// Use inheritance for one level only
// Compositions
// Object.assign - Copy properties from one object to another

function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function() {
    this.hunger--;
    console.log('eating');
  }
}

const canWalk = {
  walk: function() {
    console.log('walking');
  }
}

const canSwim = {
  swim: function() {
    console.log('swimming');
  }
}

function Person(){}

mixin(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person);

function GoldFish(){}
mixin(GoldFish.prototype, canEat, canSwim);
const globFish = new GoldFish();
console.log(globFish);
