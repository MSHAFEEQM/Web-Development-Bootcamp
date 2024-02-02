var randomNumber1 = Math.floor(6 * (Math.random())) + 1;
var randomNumber2 = Math.floor(6 * (Math.random())) + 1;

var leftDice = document.getElementsByClassName("img1")[0];
var rightDice = document.getElementsByClassName("img2")[0];

leftDice.setAttribute("src", "./images/dice" + randomNumber1 + ".png")
rightDice.setAttribute("src", "./images/dice" + randomNumber2 + ".png")

var headMessage = document.querySelector(".container h1");

if (randomNumber1 > randomNumber2) {

    headMessage.innerHTML = "Player 1 Wins";

} else if (randomNumber1 < randomNumber2) {
    headMessage.innerHTML = "Player 2 Wins";

} else {
    headMessage.innerHTML = "Draw";
}