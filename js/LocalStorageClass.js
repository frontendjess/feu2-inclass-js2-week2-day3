class LocalStorageClass {
	constructor(keyForLocalStorage, valueToSaveToLocalStorage) {
		this.keyForLocalStorage = keyForLocalStorage;
		this.valueToSaveToLocalStorage = valueToSaveToLocalStorage;
	}

	saveToLocalStorage() {
		localStorage.setItem(
			this.keyForLocalStorage,
			JSON.stringify(this.valueToSaveToLocalStorage)
		);
	}
	//Implememtation of the method getFromLocalStorage
	// Now you

	getFromLocalStorage() {
		return localStorage.getItem(this.keyForLocalStorage);
	}
}

const localStorageSaver = new LocalStorageClass('someCars', [
	{ id: 1, name: 'Ford' },
	'bmw',
	'audi',
]);

localStorageSaver.saveToLocalStorage();
let newSomeCars = JSON.parse(localStorageSaver.getFromLocalStorage());
console.log(newSomeCars);

const people = new LocalStorageClass('someNames', [
	'Madeleine',
	'Erik',
	'Trond',
]);

people.saveToLocalStorage();
let newSomeNames = JSON.parse(people.getFromLocalStorage());
console.log(newSomeNames);

// questions - how do i know to put return on line 17? there wasnt a return on setitem.
// why cant we use JSON.parse with the getItem method one line 17
// are the variables newSomeCars and newSomeNames good choices?
// or should it be related to localStorageSaver & people?
// please explain: We can pass variables into classes in the constructor method
// and set properties inside the class with these values.This is called initialising a class.
// or what does it mean to initialize the class? please show example.
// UML?
