let turn = "X";
let validator = 0;

let matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];

function normalise(mat, conBoxes){
    let start = 1;
    for(i = 0; i<mat.length; i++){
        for(j = 0; j<mat[i].length; j++){
            mat[i][j] = start;
            conBoxes[start-1].style.backgroundColor = "black";
            start++;
        }
        
    }
}

let playsound = new Audio("click.wav");
let winSound = new Audio("win.wav");
let drawSound = new Audio("gameover.wav");
console.log(drawSound);
let divsOfplay = document.querySelectorAll(".item");
let playTurn = document.querySelector(".turn");
let reset = document.querySelector(".reset");
let imgElement = document.getElementsByTagName("img");
let line = document.querySelector(".line");
let message = document.querySelector(".wonMsg");

function mainlogic(tx, ty, angle, winner){
    playTurn.innerHTML = "";
    winSound.play();
    imgElement[0].style.width = "100%";
    line.style.width = "270px"
    line.style.transform = `translate(${tx}px, ${ty}px) rotate(${angle}deg)`;
    message.style.fontSize = "3rem";
    if(turn == "X"){
        message.innerHTML = "Hurrah! 0 has won the Game:)";
    }else{
        message.innerHTML = "Hurrah! X has won the Game:)";
    }
}

for(i = 0; i<divsOfplay.length; i++){
    divsOfplay[i].addEventListener("click", function(event){
        let indexes = event.target.id;
        playsound.play();
        if(turn == "X"){
            event.target.innerHTML = "X";
            event.target.style.backgroundColor = "rgb(13, 13, 13)";
            matrix[indexes[0]][indexes[1]] = "X";
            playTurn.innerHTML = "Turn: 0";
            turn = 0;
            validator++;
        }else{
            event.target.innerHTML = 0;
            event.target.style.backgroundColor = "rgb(13, 13, 13)";
            matrix[indexes[0]][indexes[1]] = 0;
            playTurn.innerHTML = "Turn: X";
            turn = "X";
            validator++;
        }
        if((matrix[0][0] == matrix[0][1] && matrix[0][1] == matrix[0][2])) {
            mainlogic(0, 43, -180);
        }else if((matrix[0][0] == matrix[1][0] && matrix[1][0] == matrix[2][0])){
            mainlogic(-90, 132, -90);
        }else if((matrix[2][0] == matrix[2][1] && matrix[2][1] == matrix[2][2])){
            mainlogic(0, 218, 0);
        }else if((matrix[0][2] == matrix[1][2] && matrix[1][2] == matrix[2][2])){
            mainlogic(90, 134, 90);
        }else if((matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2])){
            mainlogic(5, 137, 45);
        }else if((matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0])){
            mainlogic(3, 132, -45);
        }else if((matrix[1][0] == matrix[1][1] && matrix[1][1] == matrix[1][2])){
            mainlogic(3, 132, 0);
        }else if((matrix[0][1] == matrix[1][1] && matrix[1][1] == matrix[2][1])){
            mainlogic(3, 132, -90);
        }

        if(validator == 9){
            drawSound.play();
            message.innerHTML = "Oops! khichdi pak gyi:(";
            message.style.fontSize = "3rem";
        }
    });
}

reset.addEventListener("click", function(){
    message.style.fontSize = "0";
    validator = 0;
    normalise(matrix, divsOfplay);
    playsound.play();
    line.style.width = "0";
    imgElement[0].style.width = "0";
    for(i = 0; i<divsOfplay.length; i++){
        divsOfplay[i].innerHTML = "";
    }
    turn = "X";
    playTurn.innerHTML = "Turn: X";
});

