// Elements
const welcomeScreen = document.getElementById("welcome-screen");
const gameScreen = document.getElementById("game-screen");
const startGameButton = document.getElementById("start-game-button");
const userName = document.getElementById("username");
const userSelection = document.getElementById("user-selection");
const goButton = document.getElementById("go-button");
const scoreParagraph = document.getElementById("score");
const gameHistoryParagraph = document.getElementById("game-history");
const errorpara = document.getElementById("error");

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){

}

// updateGameHistoryUI
function updateGameHistoryUI(){

}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  //const username = username.value;
  game = new RockPaperScissors(userName.value);

  //welcomeScreen.classList.add("d-none");
  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  userschoice = userSelection.value;

  alert(" userchoice: " + userschoice);
  //errorpara.innerHTML += typeof game;
  game.play(userschoice);  
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 
  
// });