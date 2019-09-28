//Object destructuring

let person = {
	name: "Sam",
	age: 12,
	eat(){
		console.log(this.name + " is eating");
	},
	drive() {
		
	}
};
//OLD
// let name = person.name;
// let age = person.age;

let { name, age, gender } = person;
console.log(name, age, gender);

let model = "BMW";
let price = 4900000;

//let car = { model: model, price: price };
let car = { model, price };





person.eat();

