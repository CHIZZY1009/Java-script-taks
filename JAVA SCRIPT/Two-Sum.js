const prompt = require ("prompt-sync")();

let target = Number(prompt("Enter a Number: "));

let listOfNumbers = [2,3,4,5,6,7,8];

for (let index = 0; index < listOfNumbers.length; index++){
for (let indexTwo = index + 1;  indexTwo < listOfNumbers.length; indexTwo++){



if(listOfNumbers[index] + listOfNumbers[indexTwo] == target){


console.log(index + "," + indexTwo);

}
}
}