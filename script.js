let gamePlayed = document.getElementById("gamePlayed");
const pick = ["stone", "paper", "scissor"];
let startP = document.getElementById("startPlaying");
let started = document.getElementById("started")
let choice = document.getElementById("compChoice");
let compLate = document.getElementById("comLate");
let btns = document.getElementById("bottom")
let add = document.getElementById('add')
let gamPs = document.getElementById('gamePs')
let gamPL = document.getElementById('gamePL')
let scoreOn = document.getElementById('scoreOn')
let winlos = document.getElementById('winlos')
let reset = document.getElementById('reset')




let scores = 0;
let gameP = 0;


startP.addEventListener("click", function(){
startP.style.display = "none"
started.style.display = "none";
choice.style.display = "block"
 btns.style.display = "flex";
 gamPL.style.display = "block";
 scoreOn.style.display = "block";
 reset.style.display = "block"

})

function play(playerChoice){
  choice.style.display ='none'
  compLate.style.display = "block"
 const computerChoice = pick[Math.floor(Math.random() * 3)]
 compLate.innerText + computerChoice;


let result = '';

gameP++;
gamePs.textContent = gameP;


 if(playerChoice === computerChoice){
    result = `computer choose : ${computerChoice}`;
    winlos.innerText = "It's a tie"
   console.log(result)
   compLate.innerHTML = result;
  }


  else if(playerChoice === "stone" && computerChoice === "scissor" || playerChoice === "paper" && computerChoice === "stone" || playerChoice === "scissor" && computerChoice === "paper"){
    result = `computer choose : ${computerChoice} `;
    winlos.innerText = "YOU WIN!!"
  console.log(result);
  compLate.innerHTML = result;
 scores++;
 console.log(scores)
 add.textContent = scores;
  }
  else{
    result = `computer choose : ${computerChoice}`;
    winlos.innerHTML = "You loss!"
   scores--;
   if(scores < 0){
    scores = 0;
   }
   else{
    console.log("fine")
   }
   add.textContent = scores;
   console.log(result)
   console.log(scores)
   compLate.innerHTML = result
   
  }
  
}
reset.addEventListener("click", function(){
  //window.location.reload();
  add.textContent = 0
  gamPs.textContent = 0;
  gameP = 0;
  startP.style.display = "block"
started.style.display = "block";
choice.style.display = "none"
 btns.style.display = "none";
 gamPL.style.display = "none";
 scoreOn.style.display = "none";
  console.log("clicked")
})

