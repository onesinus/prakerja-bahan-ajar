function Animal (name) {
	this.name = name;
}

Animal.prototype.eat = function() {
	console.log(this.name + " is eating...");
};

function Dog (name, breed) {
	Animal.call(this, name);
	this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

Dog.prototype.bark = function () {
	console.log(this.name + " is barking...");
}

var dog = new Dog("Max", "Labrador");
dog.eat();
dog.bark();
console.log(dog.breed);