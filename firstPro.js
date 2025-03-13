//Prinitng a statement 
console.log (" Hello World!");
console.log();

//doing arithmetic operations
let num_01 = 10;
let num_02 = 12;

sum = num_01 + num_02;
div = num_01 / num_02;
mult = num_01 * num_02;
sub = num_01 - num_02;

console.log("The Sum Is:" +sum);
console.log("The div Is:" +div);
console.log("The mult Is:" +mult);
console.log("The sub Is:" +sub);
console.log();

//Print numbers from 1 to 10
for(let i = 1; i<= 10; i++){
	console.log (i);
}
console.log();

//print only odd numbers
for(let i =1; i< 10; i++){
	if(i % 2 == 1){
		console.log(i);
	}
}
console.log();

//print the numbers in reverse
for(let i = 10; i>= 1; i--){
	console.log(i);
}
console.log();

//reverse the numbers in left and right  4321 - 5 - 9876
console.log("\nReversing the numbers in left and right")

let num = 15;
let middle = Math.round(num / 2)

a = 1;
b = num;
c = middle;
while (a <= num) {
    
    if (a < middle) {
        console.log(--c)
    } else if (a == middle) {
        console.log("\n"+ middle + "\n")
    } else {
        console.log(b)
        b--
    }
    a++;
}