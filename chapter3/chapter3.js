// let dinosaurs = [
//     "T-Rex",
//     "Velociraptor",
//     "Triceratops",
//     "Brachiosaurs",
//     "Pteranodon",
//     "Apatosaurus",
//     "Diplodocus",
//     "Compsognathus",
// ];

// alert(dinosaurs[0]);

// dinosaurs[0] = "Tyrannosaurus Rex";

// alert(dinosaurs[0]);

// let dinosaurs = [];

// dinosaurs[0] = "T-Rex";
// dinosaurs[1] = "Velociraptor";
// dinosaurs[2] = "Triceratops";
// dinosaurs[3] = "Brachiosaurs";
// dinosaurs[4] = "Pteranodon";
// dinosaurs[5] = "Apatosaurus";
// dinosaurs[6] = "Diplodocus";
// dinosaurs[7] = "Compsognathus";
// dinosaurs[8] = "Stegosaurus";



// dinosaurs[33] = "Philosoraptor";

// console.log(dinosaurs);

// let dinosaursAndNumbers = [3, "dinosaurs", ["triceratops", "stegosaurus", 3627.5], 10];

// // console.log(dinosaursAndNumbers[2]);
// console.log(dinosaursAndNumbers[2][0]);
// console.log(dinosaursAndNumbers[2][2]);
// console.log(dinosaursAndNumbers[3]);
// console.log(dinosaursAndNumbers[2][1]);

// let mainacs = ["Yakko", "Wakko", "Dot", "Crazy", "Bear",];
// // console.log(mainacs[0]);
// // console.log("length of mainacs is " + mainacs.length);

// console.log(mainacs[mainacs.length - 1]);

// let animals = [];
// animals.push("Springbok"); // push puts elemennt infront of an element
// animals.push("Elephant");
// animals.push("Zebra");
// console.log(animals);
// console.log(animals.length);
// animals.unshift("monkey"); //unshift puts element at the first element
// console.log(animals);

// console.log(animals.length);
// animals.unshift("Panther");
// console.log(animals);
// console.log(animals.length);

// let lastAnimal = animals.pop(); // Pop takes off element at last position
// console.log(animals)
// console.log(lastAnimal)

// let firstAnimal = animals.shift(); // shift takes off element at first position
// console.log(firstAnimal);
// console.log(animals)


// let furryAnimals = ["Alpaca", "Ring-Tailed Lemur", "Yeti"];
// console.log(furryAnimals);
// let scalyAnimals = ["Boa Constrictor", "Godzilla"];
// console.log(scalyAnimals);
// let featheredAnimals = ["Macaw", "Dodo"];
// let furryAndScalyAnimals = [furryAnimals.concat(scalyAnimals)];
// console.log(furryAndScalyAnimals);
// let furryScalyAndFeatheredAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
// console.log(furryScalyAndFeatheredAnimals);

// let colors = ["red", "green", "blue"];
// console.log(colors.indexOf("blue"));
// console.log(colors.indexOf("green"));
// console.log(colors.indexOf("purple"));

// let insects = ["Bee", "Ant", "Bee", "Ant"];
// console.log("1st Bee is in index : " + insects.indexOf("Bee"));

// let boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
// let stringAnimals = boringAnimals.join("  "); //Join method converts array string
// console.log(stringAnimals);
// console.log(boringAnimals);

// console.log(Math.floor((Math.random() * 10 + 1)));

// let play = confirm("Play and stand a chance to win");
// let yourName = prompt("what is your name? ");

// let randomPrizes = ["Iphone", "PlayStation", "4k TV", "Laptop", "Free Course", "Trip To Dubai", "Flowers", "Chocolate", "unlucky ,try again next time ☹"];
// let randomIndex = Math.floor(Math.random() * randomPrizes.length);

// alert(yourName + " you got " + randomPrizes[randomIndex]);


let randomBodyParts = ["Tounge", "Eye", "Neck", "Knee",];
let randomAdjectives = ["Smelly", "Boring", "Stupid", "fuzzy"];
let randomAnimals = ["Monkey", "Donkey", "Bear", "Rat"];
let animalBodyPart = ["trunk", "hoove", "tail", "horn", "fang"];

let bodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
let adjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
let animal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
let animalPart = animalBodyPart[Math.floor(Math.random() * animalBodyPart.length)]

let insult = "Your " + bodyPart + " is more " + adjective + " than a " + animal + "'s " + animalPart;
console.log(insult);

let arrayInsult = ["Your", bodyPart, "is more", adjective, " than a", animal, "'s", animalPart];
let stringInsult = arrayInsult.join(" ");
console.log(stringInsult);

let numbers = [3, 2, 1, 0];
console.log(numbers.join(" is bigger than "));




