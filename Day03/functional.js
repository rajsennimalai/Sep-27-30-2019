let numbers = [1, 2, 3, 4, 5];
//Imperative style
//Write code and specify WHAT to do and also HOW to do

for(let i=0; i< numbers.length;i++) {
	if(numbers[i] % 2 == 0) {	
		console.log(numbers[i]);	
	}
}
//Declarative style (functional style)
//Write code and specify WHAT to do

numbers.map(n => n * n);


numbers
	.filter(n => n % 2 == 0)
	.forEach(n => console.log(n));