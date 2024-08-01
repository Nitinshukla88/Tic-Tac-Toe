let turn = "X";

let matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];

function normalise(mat){
    let start = 1;
    for(i = 0; i<mat.length; i++){
        for(j = 0; j<mat[i].length; j++){
            mat[i][j] = start;
            start++;
        }
    }
}

let playsound = new Audio("click.wav");
let winSound = new Audio("win.wav");
let divsOfplay = document.querySelectorAll(".item");
let playTurn = document.querySelector(".turn");
let reset = document.querySelector(".reset");
let imgElement = document.getElementsByTagName("img");
let line = document.querySelector(".line");

function mainlogic(tx, ty, angle){
    winSound.play();
    imgElement[0].style.width = "100%";
    line.style.width = "270px"
    line.style.transform = `translate(${tx}px, ${ty}px) rotate(${angle}deg)`;
}

for(i = 0; i<divsOfplay.length; i++){
    divsOfplay[i].addEventListener("click", function(event){
        let indexes = event.target.id;
        playsound.play();
        if(turn == "X"){
            event.target.innerHTML = "X";
            matrix[indexes[0]][indexes[1]] = "X";
            playTurn.innerHTML = "Turn: 0";
            turn = 0;
        }else{
            event.target.innerHTML = 0;
            matrix[indexes[0]][indexes[1]] = 0;
            playTurn.innerHTML = "Turn: X";
            turn = "X";
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
    });
}

reset.addEventListener("click", function(){
    normalise(matrix);
    playsound.play();
    line.style.width = "0";
    imgElement[0].style.width = "0";
    for(i = 0; i<divsOfplay.length; i++){
        divsOfplay[i].innerHTML = "";
    }
    turn = "X";
    playTurn.innerHTML = "Turn: X";
});

