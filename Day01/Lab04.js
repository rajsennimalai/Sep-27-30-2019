class CalculatorTraditionalStyle {
	add(x, y) {
		return x + y;
	}
	
	sub(x, y) {
		return x - y;
	}
	
	multiply(x, y) {
		return x * y;
	}
	
	divide(x, y) {
		return x / y;
	}
	
	aPlusBWholeSquare(x, y) {
		return x*x + y*y + 2*x*y;
	}
	
}
//Angular, React
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
let add = function(x, y) {
	console.log("Sum: " + (x+y));
};
calc.compute(add);

calc.compute(function(x, y) {
	console.log("Diff: " + (x-y));
});
calc.compute(function(x, y) {
	console.log("Divide: " + (x/y));
});
calc.compute(function(x, y) {
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