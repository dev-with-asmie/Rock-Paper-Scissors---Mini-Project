let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
         const options = ["rock", "paper", "scissors"];
         const randIdx = Math.floor(Math.random() * 3);
         return options[randIdx];

}
const drawGame = () =>{
       msg.innerText = "Draw Game...Play Again";
       msg.style.backgroundColor = "#462749";

}
const showWinner =(userWin,userChoice,compChoice) =>{
      if(userWin) {
         userScore++;
         userScorePara.innerText = userScore;
         console.log("You Win!!");
         msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
         msg.style.backgroundColor = "green";  
      }
      else{
         compScore++;
         compScorePara.innerText = compScore;
         msg.innerText = `You Lose :( ${compChoice} beats your ${userChoice}`;
         msg.style.backgroundColor = "red";
      }
}

const playGame = (userChoice) =>{
         //generate computer choice 
         const compChoice = genCompChoice();
         if(userChoice === compChoice){
                  //draw game 
                  drawGame();
         }
         else {
                  let userWin = true;
                  if(userChoice === "rock"){
                           //scissors, paper
                        userWin = compChoice === "paper" ? false : true;

                  }
                  else if (userChoice === "paper"){
                       //rock, scissors
                       userWin = compChoice === "scissors" ? false : true;    
                  }
                  else {
                         //rock, paper 
                        userWin = compChoice === "rock" ? false : true; 

                  }
                  showWinner(userWin, userChoice, compChoice);
         }

}


choices.forEach((choices) => {
         choices.addEventListener("click", () => {
                  const userChoice = choices.getAttribute("id");
                  playGame(userChoice);
         });
});