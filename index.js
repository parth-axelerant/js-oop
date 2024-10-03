// Encapsulation - Reduce complexity + increase reusability
// Abstraction - Reduce complexity + isolate impact of changes
// Inheritance - Helps to eliminate the repetition of code
// Polymorphism - Refactor ugly switch/case statments

console.log("Hello World!");


// Section 1 - Objects


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
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('draw');
    }
  };
}

const circle = createCircle(5);
circle.draw();

// Constructor Function
function Circle(radius) {
  // this is the reference to the object executing this piece of code
  console.log('this', this);
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const another = new Circle(1);
