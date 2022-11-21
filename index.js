// function $(x) {
//     return document.getElementById(x);
// }
// let drum_1=$('.w');
// console.log(drum_1);
// drum_1.on("click", function(){handleClick(0);});


let drum = document.getElementsByClassName("drum");
let sounds=[];
sounds.push(new Audio("sounds/crash.mp3"));
sounds.push(new Audio("sounds/kick-bass.mp3"));
sounds.push(new Audio("sounds/snare.mp3"));
sounds.push(new Audio("sounds/tom-1.mp3"));
sounds.push(new Audio("sounds/tom-2.mp3"));
sounds.push(new Audio("sounds/tom-3.mp3"));
sounds.push(new Audio("sounds/tom-4.mp3"));




function handleClick(order) {

    sounds[order].play();
    drum[order].classList.add('pressed');
    setTimeout(function(){
        drum[order].classList.remove('pressed',100);
    })
}

function handleKeypress(key) {
    switch(key){
        case 'w':handleClick(0);
        case 'a':handleClick(1);
        case 's':handleClick(2);
        case 'd':handleClick(3);
        case 'j':handleClick(4);
        case 'k':handleClick(5);
        case 'l':handleClick(6);
    }
}

for (let i=0;i<7;i++){
    drum[i].addEventListener("click", function(){handleClick(i);});
}

document.addEventListener("keypress",function (event){
    handleKeypress(event.key);

})