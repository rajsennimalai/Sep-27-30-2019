//Lambda expressions in java

//OLD STYLE
/*
function greet(name) {
	return "Hello " + name;
}
*/

//New Style
/*
let greet = function(name) {
	return "Hello " + name;
}
*/
//Modern style
let greet = (name) => "Hello " + name;

//var greet =(name) -> "Hell0 " + name;

let message = greet("Sam");
console.log(message);


let echo = name => {
	//several lines
	return name;
};





