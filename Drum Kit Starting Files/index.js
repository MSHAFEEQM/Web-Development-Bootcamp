var noOfDrums = document.querySelectorAll(".drum").length;


for (let index = 0; index < noOfDrums; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function (e) {

        makeSound(this.innerHTML);
        buttonAnim(this.innerHTML);

    })

}

document.addEventListener("keypress", function (event) {

    makeSound(event.key);
    buttonAnim(event.key)


})

function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom1 = new Audio('sounds/tom-2.mp3');
            tom1.play();
            break;
        case "s":
            var tom1 = new Audio('sounds/tom-3.mp3');
            tom1.play();
            break;
        case "d":
            var tom1 = new Audio('sounds/tom-4.mp3');
            tom1.play();
            break;
        case "j":
            var tom1 = new Audio('sounds/snare.mp3');
            tom1.play();
            break;
        case "k":
            var tom1 = new Audio('sounds/crash.mp3');
            tom1.play();
            break;
        case "l":
            var tom1 = new Audio('sounds/kick-bass.mp3');
            tom1.play();
            break;
        default:
            break;
    }
}

function buttonAnim(key) {

    document.querySelector("."+key).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("."+key).classList.remove("pressed")
    }, 100);

    
}