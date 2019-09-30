//... spread operator

function printDetails(name, age) {
	console.log(name, age);
}
let values = ["Sam", 12];
printDetails(...values)



let language = "ruby";
//let letters = language.split("");
let letters = [...language];
console.log(letters);

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr = [...arr1, ...arr2];
console.log(arr);

//... rest operator

let addOld = function() {
	console.log(arguments);
}

let add = function(first, ... args) {
	console.log(args);
}

add(10, 1, 2, 3, 4, 5);