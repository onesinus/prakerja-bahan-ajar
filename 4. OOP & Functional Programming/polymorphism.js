function Animal (name) {
	this.name = name;
}

Animal.prototype.makeSound = function () {
	console.log(this.name + " is making a sound...")
}

function Dog (name, breed) {
	Animal.call(this, name);
	this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

Dog.prototype.makeSound = function() {
	console.log(this.name + " is barking...");
}

function Cat(name, breed) {
	Animal.call(this, name);
	this.breed = breed;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.makeSound = function () {
	console.log(this.name + " is meowing...");
}

var dog = new Dog("Max", "Labrador");
var cat = new Cat("Mimi", "Persian");

dog.makeSound();
cat.makeSound();