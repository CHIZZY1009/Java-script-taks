const prompt = require ("prompt-sync")();

let product = true;
while (product){

let number = Number(prompt("Enter a Number: "));


if (Number.isNaN(number)){
console.log("Enter a valid number ");
}

else{

for(let index = 1; index <= 12; index++){
let products = number * index;

console.log(number + " * " + index + " = " + products);
product = false;

}
}
}
