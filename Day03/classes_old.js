// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	eat(item) {
// 		console.log(`${this.name} is eating ${item}`)
// 	}
// }
function Person(name, age) {
	this.name = name;
	this.age = age;
	this.eat = function(item) {
		console.log(`${this.name} is eating ${item}`)
	}
}


let p1 = new Person("Sam", 12);
p1.eat("Rice");






