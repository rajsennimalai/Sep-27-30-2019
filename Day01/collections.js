//arrays in js
let numbers = [];
let oddNumbers = [1, 3, 5];
for(let i=0; i< oddNumbers.length; i++) {
	console.log(oddNumbers[i]);
}

let capitals = [];
capitals["India"] = "New Delhi";
capitals["US"] = "Washington DC";
capitals["France"] = "Paris";

for(let country in capitals) {
	console.log(country + " - " + capitals[country]);
}


for(let key in oddNumbers) {
		console.log(key + ": " + oddNumbers[key]);
}