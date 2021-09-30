# IIFE's

- I: Immeadiately
- I: Invoked
- F: Function
- E: Expression

IIFE's are run on their own.

IIFE's are used to create private scopes, they dont add variables to the global scope and pollute it.

```javascript
(function () {
	console.log('iife');
})();
```

They are anonymous functions, they dont have a name and they execute when the script is run.

# Classes

- Classes are reusable blocks of code that perform a specific task on similar data.
- Classes are instantiated with the new keywork.

```javascript
class car {
	constructor(make, color, topSpeed) {
		this.make = make;
		this.color = color;
		this.topSpeed = topSpeed;
	}
	getMake() {
		return `The make of the car is ${this.make}`;
	}
	getColor() {
		return `The color of the car is ${this.color}`;
	}
	getTopSpeed() {
		return `The top speed of the car is ${this.topSpeed}`;
	}
	describeCar() {
		return `The ${this.color} ${this.make} can go to ${this.topSpeed}`;
	}
}

// Constructors are the only place where can assign a value to a variable.

// this refers to the instance of the class
// when you use this in this case it will Car: this = Car

// This wont work, you need to instantiate the class
console.log(car.getColor());

// This is how you do that

let myTesla = new car('Tesla', 'red', '250mph');
```

# Tasks

**Level 1**

Implement the method to get data out of local storage.

**Level 2**

Create your own class called Person, it should print out the name, surname and age of person.

Initialize the class with the name, surname and age.
Have a method inside the class that writes to the name, surname and age to a DOM element sent to the class.

# UML

Write the application out in words.
