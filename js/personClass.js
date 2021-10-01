// Create your own class called Person, it should print out the name,
// surname and age of person.

// Initialize the class with the name, surname and age.
// Have a method inside the class that writes to the name, surname and age
// to a DOM element sent to the class.

class PersonClass {
	constructor(name, surname, age) {
		this.name = name;
		this.surname = surname;
		this.age = age;
	}

	printName() {
		console.log(this.name);
	}

	printSurname() {
		console.log(this.surname);
	}

	printAge() {
		console.log(this.age);
	}

	printPersonToDOM() {
		document.querySelector('.person').innerHTML = `
			<p>Name: ${this.name}</p> 
			<p>Surname: ${this.surname}</p> 
			<p>Age: ${this.age}</p>
		`;
	}
}

const jessica = new PersonClass('Jessica', 'Mitchell', 35);
jessica.printName();
jessica.printSurname();
jessica.printAge();
jessica.printPersonToDOM();
