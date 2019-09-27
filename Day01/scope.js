//var is function scoped
//let is block scoped
//const is a readonly and block scoped
const PI = 3.14


function check(number) {
	if(number % 2 == 0) {
		let result = "Even";
	}
	else {
		let result = "Odd";
	}
	//console.log(result);
}

check(12);