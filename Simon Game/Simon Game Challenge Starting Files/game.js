
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var randomChosenColor;
var userClickedPattern = [];
var level = 0
var gameStarted = false

function nextSequence() {
    var randomNumber = Math.floor(4 * Math.random())

    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("h1").text("Level " + level)
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
    level++;
}

$(".btn").click(function (e) {

    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1)

})

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(() => { $("#" + currentColor).removeClass("pressed"); }, 100);
}

$(document).on("keypress", () => {
    if (!gameStarted) {
        nextSequence()
        gameStarted = true;
    }
})

function checkAnswer(currentLevel){
    if((level-1)==currentLevel){
     if(JSON.stringify(gamePattern)==JSON.stringify(userClickedPattern)){
        console.log("success")
        setTimeout(nextSequence,1000);
        userClickedPattern = []
     }else{
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(()=>{$("body").removeClass("game-over")},200);
        $("h1").text("Game Over, Press Any Key to Restart");
        gameStarted = false;
        userClickedPattern=[];
        gamePattern=[];
        level=0;
        console.log('error')
     }
    }

}