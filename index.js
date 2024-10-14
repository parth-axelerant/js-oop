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
// function extend(Child, Parent) {
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }

// function Shape(){
// }

// Shape.prototype.duplicate = function() {
//   console.log('duplicate');
// };

// function Circle1(){

// }

// Circle1.prototype.duplicate = function() {
//   console.log('duplicate');
// };

// extend(Shape, Circle1);

// Circle1.prototype.duplicate = function() {
//   // Shape.prototype.duplicate.call(this);
//   console.log('duplicate circle1');
// };

// const c1 = new Circle1();

// Polymorphism = Multiple Forms

// function Square() {
// }

// extend(Square, Shape);

// Square.prototype.duplicate = function() {
//   console.log('duplicate square');
// };

// const shapes = [new Circle1(), new Shape(), new Square()];
// for (let shape of shapes)
//   shape.duplicate();


// Use inheritance for one level only
// Compositions
// Object.assign - Copy properties from one object to another

// function mixin(target, ...sources) {
//   Object.assign(target, ...sources);
// }

// const canEat = {
//   eat: function() {
//     this.hunger--;
//     console.log('eating');
//   }
// }

// const canWalk = {
//   walk: function() {
//     console.log('walking');
//   }
// }

// const canSwim = {
//   swim: function() {
//     console.log('swimming');
//   }
// }

// function Person(){}

// mixin(Person.prototype, canEat, canWalk);
// const person = new Person();
// console.log(person);

// function GoldFish(){}
// mixin(GoldFish.prototype, canEat, canSwim);
// const globFish = new GoldFish();
// console.log(globFish);

// Example - Prototypical Inheritance
// function HTMLElement() {
//   this.click = function() {
//     console.log('clicked');
//   }
// }

// HTMLElement.prototype.focus = function() {
//     console.log('focused');
// };

// function HTMLSelectElement(items = []){
//   this.items = items;

//   this.addItem = function(item) {
//     this.items.push(item)
//     console.log('add item');
//   }

//   this.removeItem = function(item) {
//     this.items.splice(this.items.indexOf(item), 1);
//     console.log('remove item');
//   }

//   this.render = function() {
//     console.log('render');
//     return `<select>${this.items.map(item => `<option>${item}</option>`).join('')}</select>`;
//   }
// }

// HTMLSelectElement.prototype = Object.create(HTMLElement.prototype);
// HTMLSelectElement.prototype = new HTMLElement();

//below are simillar
// HTMLSelectElement.prototype.constructor = HTMLSelectElement;

// Excercise - Polymorphism
//

// function HtmlImgSelect(src){
//   this.src =  src;
//   this.render = function() {
//     console.log('render');
//     return `<img src="${this.src}">`;
//   }
// }
// HtmlImgSelect.prototype = new HTMLElement();
// HtmlImgSelect.prototype.constructor = HtmlImgSelect;

// const elements = [
//   new HTMLSelectElement(['a', 'b', 'c']),
//   new HtmlImgSelect('http://')
// ];

// for (let element of elements)
//   console.log(element.render());


// Section 4 - ES6 Classes - Syntatic Sugar
// ==========================================

// Class declaration in ES6
// class Circle {
//   constructor(radius){
//     this.radius = radius;
//     this.move = function() {
//       console.log('move')
//     }
//   }
//   draw() {
//     console.log('draw');
//   }
// }
// const c = new Circle(1);
// console.log(c);

// Hoisting - raised at the top
// Function Declaration - hoisted
// Function Expression - not hoisted

// Static Methods(don't need to call instance of class) vs Instance Methods
// class Circle2 {
//   constructor(radius){
//     this.radius = radius;
//   }

//   draw() {
//     console.log('draw');
//   }

//   static parse(str) { // to create utility methods that are not tied to particular objects i.e. Math.abs
//     return JSON.parse(str);
//   }
// }
// const c = new Circle2(1);
// console.log(c);

// this keyword
'use strict';
const circle = function(){
  this.draw = function() {
    console.log(this);
  }
}

const c = new circle();
// Method call
c.draw(); // Points to objec
const draw = c.draw;
// Function Call
draw(); // Standalone method, points to global object

// Usage for private property and method
// Private propery to be used for Abstraction
// Private Members using Symbols ??
// Private Members using WeakMaps ??
// const _radius  = new Symbol();
// console.log(_radius);

// Getters and Setters in ES6 Classes
const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  get radius() {
    return _radius.get(this);
  }
  set radius(value) {
    _radius.set(this, value);
  }
}

const c1 = new Circle(5);
// Inheritance in ES6 Class
// Parent Class
class Shape {

  constructor(color){
    this.color = color;
  }

  move() {
    console.log('move');
  }
}

// Derived Class
class Circle2 extends Shape {
  constructor(color, radius) {
    super(color); //initialize base class (reference parent class)
    this.radius = radius;
  }

  draw() {
    console.log('draw');
  }
}

const c2 = new Circle2('red', 7);

// Method overriding in ES6 Class
class Shape2 {
  move() {
    console.log('Shape1');
  }
}

class Circle3 extends Shape2 {
  move() {
    super.move();
    console.log('Circle3 move');
  }
}
const c3 = new Circle3();
console.log(c3.move());

// Section 4 - ES6 Tooling
// ========================================
//  ES2015 == ES6
// modules
// CommonJs modules
// - by defautl its private we need to export it. (module.exports.xx)
// - require to import it

// Syntax of ES6 module , export keyword to one more module , import keyword to another module

// ES6 Tooling (only for broswer application) => transpiler[translator + compiler] i.e. Babel + bundler(webpack)

// Babel
// - Babel is a JavaScript compiler that converts ES6 code to ES5
// to run single file -> babel --presets env index.js -o build/index.js
// using webpack to run multiple file -> webpack-cli init (generates configuration file)
// webpack -w
// npm init, npm run build
