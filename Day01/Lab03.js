let add = function() {
	let sum = 0;
	for(let i=0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	console.log("Sum: " + sum);
}

add(1,5,34,324,324,235,2353);
add(21,65);
add(1,55,83);

let greatest = function() {
	let max = 0;
	for(let i=0; i < arguments.length; i++) {
		max = arguments[i] > max ? arguments[i] : max;
	}
	console.log("Greatest: " + max);
}

greatest(1,5,34,324,324,235,2353);
greatest(21,65);
greatest(1,55,83,9,667);