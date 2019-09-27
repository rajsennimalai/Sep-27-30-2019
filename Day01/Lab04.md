* You have a set of operations like this on two numbers
* add, subtract, multiply
* I don't want to add separate functions for each type of operation.
* Instead create a __higher order function (function that takes another function as argument)__ that takes in the __operation__ you want to pass
* In other words, create a function __calculate__ that has the values of a and b. You need to pass your logic __add__ or __subtract__ or anything to it.

``` javascript
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

```
