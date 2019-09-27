class Calculator {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}
	compute(logic) {
		logic(this.a, this.b);
	}	
}
let calc = new Calculator(10, 12);
calc.compute((x, y) => console.log("Sum: " + (x+y)));

calc.compute((x, y) => console.log("Diff: " + (x-y)));
calc.compute((x, y) => console.log("Divide: " + (x/y)));
calc.compute((x, y) => {
	let result = x*x + y*y + 2*x*y;
	console.log("a+b^2: " + result);
});



/*
function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}
let a = 12;
let b = 13;
let sum = add(a, b)
console.log("Sum: " + sum);
let diff = subtract(a, b)
console.log("Diff: " + diff);
let product = multiply(a, b)
console.log("Product: " + product);

*/