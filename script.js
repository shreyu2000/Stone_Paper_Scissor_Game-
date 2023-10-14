// const choice = document.getElementsByClassName('.choice-btn');

const handOptions = {
  rock: "./assets/rock1.png",
  scissor: "./assets/scissors.png",
  paper: "./assets/paper1.png",
};

let mySCORE = 0;
let pcSCORE = 0;

let nextButton = document.querySelector("#next-btn");
//your choice
const yourChoice = (choice) => {
  let choices = document.querySelector(".game");
  choices.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  //set the user pick
  document.getElementById("userPickImage").src = handOptions[choice];
  computerChoice(choice);
};

//computer choice
const computerChoice = (choice) => {
  let options = ["rock", "paper", "scissor"]; //array

  let pcHand = options[Math.floor(Math.random() * 3)]; //random number
  document.getElementById("computerPickImage").src = handOptions[pcHand];

  referee(choice, pcHand);
};

const referee = (userchoice, pcchoice) => {
  if (
    (userchoice == "paper" && pcchoice == "rock") ||
    (userchoice == "scissor" && pcchoice == "paper") ||
    (userchoice == "rock" && pcchoice == "scissor")
  ) {
    setDecision("YOU WIN");
    myscore(mySCORE + 1);
    // nextButton.style.display = "inline";
  }

  if (
    (userchoice == "paper" && pcchoice == "paper") ||
    (userchoice == "rock" && pcchoice == "rock") ||
    (userchoice == "scissor" && pcchoice == "scissor")
  ) {
    setDecision("TIE UP");
  }

  if (
    (userchoice == "paper" && pcchoice == "scissor") ||
    (userchoice == "rock" && pcchoice == "paper") ||
    (userchoice == "scissor" && pcchoice == "rock")
  ) {
    setDecision("YOU  LOST");
    pcscore(pcSCORE + 1);
  }
};

// play  again
const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".game");
  hands.style.display = "flex";

  nextButton.style.display = "none";
};

//restart after winning

const playAgain = () => {
  // let contest = document.querySelector(".contest");
  // contest.style.display = "none";

  let header = document.querySelector(".header");
  header.style.display = "flex";

  let winner = document.querySelector(".winner");
  winner.style.display = "none";

  let hands = document.querySelector(".game");
  hands.style.display = "flex";

  nextButton.style.display = "none";
};

// decision
const setDecision = (decision) => {
  if (decision == "TIE UP") {
    document.querySelector(".decision").innerHTML = `<h1>${decision}</h1>`;
  } else {
    document.querySelector(
      ".decision"
    ).innerHTML = `<h1>${decision}</h1> &nbsp <h2>Against PC</h2>`;
  }

  if(decision == "YOU WIN"){
    nextButton.style.display = "inline";
  }
  else{
    nextButton.style.display = "none";
  }


};

// score
const myscore = (mynewScore) => {
  mySCORE = mynewScore;
  document.getElementById("myscore").innerHTML = mySCORE;
};

const pcscore = (pcnewScore) => {
  pcSCORE = pcnewScore;
  document.getElementById("pcscore").innerHTML = pcSCORE;
};

// Celebrate page
let celebrate = (nextButton) => {
  hurray();
};

function hurray() {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let header = document.querySelector(".header");
  header.style.display = "none";

  let winner = document.querySelector(".winner");
  winner.style.display = "flex";

  nextButton.style.display = "none";
}


// Rules

const openButton = document.querySelector('#openButton');
const popup = document.querySelector('.game-rules');
const closeButton = document.getElementById('closeButton');

openButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});


