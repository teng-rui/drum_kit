


let drum = document.getElementsByClassName("drum");

function buttonAnimation(order) {

    var activeButton = drum[order];
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}





function makeSound(key) {
    switch (key) {
        case 'w':
            let sound_crash = new Audio('./sounds/crash.mp3');
            sound_crash.play();
            buttonAnimation(0);
            break;
        case 'a':
            let sound_kick = new Audio('./sounds/kick-bass.mp3');
            sound_kick.play();
            buttonAnimation(1);
            break;
        case 's':
            let sound_snare = new Audio('./sounds/snare.mp3');
            sound_snare.play();
            buttonAnimation(2);
            break;
        case 'd':
            let sound_tom1 = new Audio('./sounds/tom-1.mp3');
            sound_tom1.play();
            buttonAnimation(3);
            break;

        case 'j':
            let sound_tom2 = new Audio('./sounds/tom-2.mp3');
            sound_tom2.play();
            buttonAnimation(4);
            break;

        case 'k':
            let sound_tom3 = new Audio('./sounds/tom-3.mp3');
            sound_tom3.play();
            buttonAnimation(5);
            break;

        case 'l':
            let sound_tom4 = new Audio('./sounds/tom-4.mp3');
            sound_tom4.play();
            buttonAnimation(6);
            break;
    }


}


document.addEventListener("keypress", function (event) {
    makeSound(event.key);
})

for (let i = 0; i < 7; i++) {
    drum[i].addEventListener("click", function () {
        makeSound(drum[i].innerHTML);

    });
}




