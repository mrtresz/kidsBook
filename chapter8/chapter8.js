"use strict";

// let ourFirstFunction = function () {
//     console.log("Hello World!!");
// }



// function ourFirstFunction() {
//     console.log("Hello World");
// }

// ourFirstFunction();
// ourFirstFunction();



// function sayHelloTo(name) {
//     console.log(`Hello ${name}`);
// }

// sayHelloTo("Nhlakanipho");
// sayHelloTo("Nomcebo");

// let randomKaomoji = ["(^人^)", "༼ つ ◕_◕ ༽つ", "¯\_( ͡° ͜ʖ ͡°)_/¯", "＞﹏＜", "(•ˋ _ ˊ•)"];
// let kaoMoji = randomKaomoji[Math.floor(Math.random() * randomKaomoji.length)];

// function drawBoxer(howManyTimes, whatToDraw) {
//     for (let i = 0; i < howManyTimes; i++) {
//         console.log(whatToDraw);
//     }
// }

// drawBoxer(1, kaoMoji);

// function add(num1, num2, num3) {
//     console.log(`sum: ${(num1 + num2 + num3)}`);
// }

// add(10, 20, 30);

// function double(num) {
//     return num * 2;
// }

// let answer = double(2);
// console.log(answer);

// function weatherAdvice(temperature) {
//     if (temperature < 20) {
//         return "It is cold today, wear something warm";
//     }
//     else if (temperature > 20 && temperature < 25) {
//         return "It is warm today, have a great day";
//     }
//     else {
//         return "It is hot today, stay hydrated";
//     }
// }

// console.log(weatherAdvice(22));

// let randomWords = ["planet", "worm", "flower", "computer"];

// function pickRandomWord(word) {
//     return word[Math.floor(Math.random() * randomWords.length)];

// }

// console.log(pickRandomWord(randomWords));funstion

// function generateInsult() {
//     let randomBodyParts = ["Face", "Nose", "Hair"];
//     let randomAdjectives = ["Smelly", "Boring", "Stupid"];
//     let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

//     let randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " +
//         pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";// Join all the random strings into a sentence:
//     console.log(randomString);
// }

// generateInsult();


// function fifthLetter(name) {
//     if (name.length < 5) {
//         return " No fifth letter"
//     }
//     return `The fifth letter of your name is ${name[4]}`;
// }

// console.log(fifthLetter("zuu"));

//                                          First Challenge

// function add(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// function multiply(num1, num2) {
//     let product = num1 * num2;
//     return product;
// }
// console.log(add(multiply(36325, 9824)), 777);



//                                         Second Challenge

// function areArraysSame(array1, array2) {
//     for (let i = 0; i < array1.length; i++) {


//         if (array1[i] === array2[i] && array1.length === array2.length) {

//             return true
//         }
//     } return false;

//     console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
//     console.log(areArraysSame([1, 2, 3], [1, 5, 8]));
//     console.log(areArraysSame([1, 2, 3], [1, 2, 8, 6]));
// }


//                                         Third Challenge


// function pickWord() {
//     let randomWords = ["javascript", "pancake", "monkey", "amazing"];
//     let word = randomWords[Math.floor(Math.random() * randomWords.length)];
//     return word;

// }

// function setUpAnswerArray() {
//     let answerArray = [];
//     for (let i = 0; i < randomWords.length; i++) {
//         answerArray[i] = "_";
//     }
//     return answerArray[i];
// }

// function showPlayerProgress() {

// }

// function getGuess() {

// }

// function updateGameState() {

// }

// function showAnswerAndCongradulatePlayer() {

// }

// console.log(answerArray);



function greet(name) {
    let message = `Hello ${name} , Have a nice day`;
    return message;
}
console.log(greet("nhlaks"));


function bakeCake() {
    console.log("baking a cake");
}

bakeCake();
