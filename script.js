let turn = "X";

let matrix = [[],[],[]];


let playsound = new Audio("click.wav");
let divsOfplay = document.querySelectorAll(".item");
let playTurn = document.querySelector(".turn");
let reset = document.querySelector(".reset");

for(i = 0; i<divsOfplay.length; i++){
    divsOfplay[i].addEventListener("click", function(event){
        playsound.play();
        if(turn == "X"){
            event.target.innerHTML = "X";
            playTurn.innerHTML = "Turn: 0";
            turn = 0;
        }else{
            event.target.innerHTML = 0;
            playTurn.innerHTML = "Turn: X";
            turn = "X";
        }
    });
}

reset.addEventListener("click", function(){
    for(i = 0; i<divsOfplay.length; i++){
        divsOfplay[i].innerHTML = "";
    }
});

