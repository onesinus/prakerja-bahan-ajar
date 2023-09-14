function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
	this._speed = 0;
}


Car.prototype.start = function () {
	console.log(this.make + " " + this.model + " has started.");
}

Car.prototype.accelerate = function () {
	this._speed += 10;
	console.log(this.make + " " + this.model + " is now travelling at " + this._speed + " mph.");
}

Car.prototype.stop = function () {
	this._speed = 0;
	console.log(this.make + " " + this.model + " has stopped.");
}

var myCar =  new Car("Toyota", "Camry", 2020);

myCar.start()
myCar.accelerate()
myCar.accelerate()
myCar.stop()