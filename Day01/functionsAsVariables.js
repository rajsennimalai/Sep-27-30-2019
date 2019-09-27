/*
function work() {
	console.log("Working");
}*/

let i = 12;
let str = "String";

let work = function() {
	console.log("working")
}
//work();

function doSomething(arg) {
	if(typeof(arg) == "string") {
		console.log(arg);
	}
	else if(typeof(arg) == "function") {
		arg();
	}
}

doSomething("eat")
doSomething("sleep");
doSomething(work);

