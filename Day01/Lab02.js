class Transaction {
	constructor(type, amount) {
		this.type = type;
		this.amount = amount;
		this.date = new Date();
	}
}

class Account {
	constructor(balance) {
		this.balance = balance;
		this.withdrawCount = 0;
		this.transactions = [];
	}
	
	printStatement() {
		for(let i=0; i<this.transactions.length; i++) {
			let txn = this.transactions[i];
			console.log(txn.type + " - ₹" + txn.amount + " at " + txn.date.toLocaleString());
		}
	}
	
	deposit(amount) {
		this.balance += amount;
		let transaction = new Transaction("Deposit", amount);
		this.transactions.push(transaction);
	}
	
	withdraw(amount) {
		this.withdrawCount += 1;
		this.balance -= amount;
		let transaction = new Transaction("Withdraw", amount);
		this.transactions.push(transaction);
		
		if(this.withdrawCount > 3) {
			let fee = amount * 0.005;
			this.balance -= fee;
			let transaction = new Transaction("Withdraw Charges", fee);
			this.transactions.push(transaction);
		}
	}
}

let acc1 = new Account(20000);
acc1.deposit(1000);
acc1.deposit(1000);
acc1.withdraw(100);
acc1.withdraw(100);
acc1.withdraw(100);
acc1.withdraw(100);
acc1.withdraw(100);
acc1.withdraw(100);
acc1.printStatement();
console.log("Balance: " + acc1.balance);