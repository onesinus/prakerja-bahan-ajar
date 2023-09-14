function BankAccount(balance) {
	this._balance = balance;

	this.getBalance = function () {
		return this._balance;
	}

	this.setBalance = function (balance) {
		if (typeof balance === "number") {
			this._balance = balance
		} else {
			console.log("Invalid balance.")
		}
	}
}

var account = new BankAccount(1000);

console.log(account.getBalance())

account.setBalance(500)
console.log(account.getBalance())

account.setBalance("hehe")
console.log(account.getBalance())
