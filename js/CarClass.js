class Car {
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

// console.log(Car.getColor());

let myTesla = new Car('Tesla', 'red', '250km');

console.log(myTesla.describeCar());
console.log(myTesla.getColor());
console.log(myTesla.getMake());
console.log(myTesla.getTopSpeed());

let myFord = new Car('Ford Ranger', 'white', '300km');
console.log(myFord.describeCar());
console.log(myFord.getColor());
console.log(myFord.getMake());
console.log(myFord.getTopSpeed());

// console.log(myTesla.describeCar());

let myFerarri = new Car('Ferarri', 'hotpink', '500km');

console.log(myFerarri.describeCar());
console.log(myFerarri.getColor());
