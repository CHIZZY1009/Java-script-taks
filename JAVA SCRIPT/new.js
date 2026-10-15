


const prompt = require ("prompt-sync")();


let name = prompt("What is your name?: ");
console.log(`My name is ${name}`)

let age = prompt("How old are you?: ");
console.log("I am " +age+" years old")


let complexion = prompt("What is your skin tone?");
console.log(complexion)


let school = prompt("What school do you attend?");
console.log(school)

let hobby = prompt("What is your hobby?");
console.log(hobby)





if (age < 18){
console.log("YOU ARE NOT ELIGIBLE ENOUGH!")
}

else if(age >= 90){
console.log("YOU ARE TOO OLD FOR THIS MEHN! ")
}

else{
console.log("WELCOME YOU ARE ELIGIBLE!")
}