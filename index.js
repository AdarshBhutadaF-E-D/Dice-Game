let KanakScore = 0;
let DevuScore = 0;
let KanakTurn = true;

const Container = document.querySelector(".container");
const Message = document.getElementById("message");
const Msg = document.getElementById("msg");
const player1 = document.getElementById("player1Scoreboard");
const player2 = document.getElementById("player2Scoreboard");
const Players = document.querySelector(".players");
const player1Dice = document.getElementById("player1dice");
const player2Dice = document.getElementById("player2dice");
const RollDice = document.getElementById("RollBtn");
const ResetGame = document.getElementById("ResetBtn");
const ChangeDice = document.getElementById("dice");

// function anim(){

// }


function showDisplay() {
    ChangeDice.style.display = "none";
    RollDice.style.display = "none";
    ResetGame.style.display = "block";
    
    // H1.style.display = "none";
}

function changeImg(Random) {
    if (Random === 1) {
        ChangeDice.style.backgroundImage = "url('/dice-one-solid.svg')";
    }
    if (Random === 2) {
        ChangeDice.style.backgroundImage = "url('/dice-two-solid.svg')";
    }
    if (Random === 3) {
        ChangeDice.style.backgroundImage = "url('/dice-three-solid.svg')";
    }
    if (Random === 4) {
        ChangeDice.style.backgroundImage = "url('/dice-four-solid.svg')";
    }
    if (Random === 5) {
        ChangeDice.style.backgroundImage = "url('/dice-five-solid.svg')";
    }
    if (Random === 6) {
        ChangeDice.style.backgroundImage = "url('/dice-six-solid.svg')";
    }
}

RollDice.addEventListener("click", function () {
    //   anim();
      Msg.style.display = "none";
      let Random = Math.floor((Math.random() * 6) + 1);
      changeImg(Random);

    if (KanakTurn) {
      
        KanakScore += Random;
        player1.textContent = KanakScore;
        player1Dice.textContent = Random;
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
        Message.textContent = ("Devu's Turn");

    }
    else {
        // changeImg(Random);
        DevuScore += Random;
        player2.textContent = DevuScore;
        player2Dice.textContent = Random;
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active");
        Message.textContent = ("Kanak's Turn");
    }

    // if(player1Turn){
    //     player1Turn = false;
    // }
    // else{
    //     player1Turn = true;
    // }

    if (KanakScore >= 20) {
        Message.textContent = ("Congratulations Kanak, you have Won the game❤️🔥");
        showDisplay();
        Container.style.backgroundImage = "url('/Tophy1.jpeg')";


    }
    else if (DevuScore >= 20) {
        Message.textContent = ("Congratulations Devu, You have won the game👈🏻😉😎");
        showDisplay();
        Container.style.backgroundImage = "url('/Tophy1.jpeg')";

    }

    KanakTurn = !KanakTurn;
});

ResetGame.addEventListener("click", function () {
    KanakScore = 0;
    DevuScore = 0;
    KanakTurn = true;
    player1.textContent = 0;
    player2.textContent = 0;
    player1Dice.classList.add("active");
    player1Dice.textContent = "-";
    player2Dice.textContent = "-";
    Message.textContent = "Kanak's Turn";
    Container.style.backgroundImage = "url('/blue.webp')";
    Msg.style.display = "block";
    ResetBtn.style.display = "none";
    RollBtn.style.display = "block";
    ChangeDice.style.display = "block";
    ChangeDice.style.backgroundImage = "url('/dice-solid.svg')";
    // Players.style.display = "block";
    // player1.style.display = "block";
    // player2.style.display = "block";
    // player1Dice.style.display = "block";
    // player2Dice.style.display = "block";
    // H1.style.display = "block";
});


