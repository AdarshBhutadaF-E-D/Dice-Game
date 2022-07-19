let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const Message = document.getElementById("message");
const player1 = document.getElementById("player1Scoreboard");
const player2 = document.getElementById("player2Scoreboard");
const player1Dice = document.getElementById("player1dice");
const player2Dice = document.getElementById("player2dice");
const RollDice = document.getElementById("RollBtn");
const ResetGame = document.getElementById("ResetBtn");

RollDice.addEventListener("click" , function(){
   let Random = Math.floor((Math.random() * 6)+ 1);
     if(player1Turn)
     {
        player1Score += Random;
        player1.textContent = player1Score;
        player1Dice.textContent = Random;
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
        Message.textContent = ("Player 2 Turn");

    }
    else 
    {
        player2Score += Random;
        player2.textContent = player2Score;
        player2Dice.textContent = Random;
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active");
        Message.textContent = ("Player 1 Turn");
    }

    // if(player1Turn){
    //     player1Turn = false;
    // }
    // else{
    //     player1Turn = true;
    // }

      if(player1Score >= 20){
        Message.textContent = ("Player 1 Won");
        RollDice.style.display = "none"; 
        ResetGame.style.display = "block";
      }
      else if(player2Score >= 20){
        Message.textContent = ("Player 2 Won");
        RollDice.style.display = "none"; 
        ResetGame.style.display = "block";
      }

    player1Turn = !player1Turn;
});

ResetGame.addEventListener("click" , function(){
   player1Score = 0;
   player2Score = 0;
   player1.textContent = player1Score;
   player2.textContent = player2Score;
   player1Dice.classList.add("active");
   player1Dice.textContent ="-";
   player2Dice.textContent ="-";
   Message.textContent = "Player 1 Turn" ;
});

