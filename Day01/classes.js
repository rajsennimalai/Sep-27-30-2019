class Person {
	//You cannot declare variables here
	constructor(theName, theAge) {
		//Member variables
		this.name = theName;
		this.age = theAge;
	}
	eat(item) {
		console.log(this.name + " is eating " + item);
	}
	sleep() {
		
	}
}

class Engineer extends Person {
	constructor(theName, theAge, theSalary) {
		super(theName, theAge);
		this.salary = theSalary
	}
	eat(item) {
		console.log(this.name + " wants to eat " + item + " but no time");
	}
}
let sw = new Engineer("Joe", 25, 200000);
console.log(sw.name, sw.age, sw.salary);
sw.eat("Noodles");


let p1 = new Person("Sam", 12);
console.log(p1.name, p1.age);
p1.eat("Rice");

let p2 = new Person("Ram", 23);
console.log(p2.name, p2.age);
p2.eat("Bread");