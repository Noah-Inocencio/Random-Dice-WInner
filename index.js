var randomNumber1 = Math.floor(Math.random()*6) + 1; //random number from 1 - 6
const image1 = document.querySelectorAll("img")[0];

var randomNumber2 = Math.floor(Math.random()*6) + 1; //random number from 1 - 6
const image2 = document.querySelectorAll("img")[1];

const whoWon = document.querySelector("h1");

/* code below randomizes dice 1 */
var randomDice1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomDice1;
image1.setAttribute("src", randomImageSource1);

/* code below randomizes dice 2 */
var randomDice2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDice2;
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){
    whoWon.innerHTML = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
    whoWon.innerHTML = "Player 2 Wins";
} else if (randomNumber1 == randomNumber2) {
    whoWon.innerHTML = "DRAW";
}