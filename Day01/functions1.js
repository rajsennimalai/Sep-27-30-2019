//id="username"

//$("#username").val();
//$("#username").val("admin");


function eat(item) {
	console.log(arguments);
	console.log("Eating " + item + " : " + arguments.length);
	console.log();
}
eat("Rice");
eat("Rice", "Roti");
eat("Bread");
eat(24, 7, 365, "days");
eat("biriyani", "rice", "dosa", "idli");
eat(false);