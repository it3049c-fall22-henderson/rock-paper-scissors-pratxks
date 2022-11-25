// Elements
const welcomeScreen = document.getElementById("welcome-screen");
const gameScreen = document.getElementById("game-screen");
const startGameButton = document.getElementById("start-game-button");
const userName = document.getElementById("username");
const userSelection = document.getElementById("user-selection");
const goButton = document.getElementById("go-button");
const resetButton = document.getElementById("reset-button");
const scoreParagraph = document.getElementById("score");
const gameHistoryParagraph = document.getElementById("game-history");
const errorpara = document.getElementById("error");

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide game screen
gameScreen.classList.add("d-none");

// updateScoreTallyUI
function updateScoreTallyUI(){
  scoreParagraph.innerHTML = game.username + ": " + game.score.user + " CPU: " + game.score.cpu;
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  let historystr = "";
  
  game.gameHistoryLog.forEach(function generateHistoryString(value, index, array) {
    historystr += value + "<br>";
  });

  gameHistoryParagraph.innerHTML = historystr;
}

// start-game-button EventListener
startGameButton.addEventListener("click", function () {
  //const username = username.value;
  game = new RockPaperScissors(userName.value);

  gameScreen.classList.remove("d-none");
  welcomeScreen.classList.add("d-none");
  // Complete

  updateScoreTallyUI();
  updateGameHistoryUI();  
});

// go-button EventListener
goButton.addEventListener("click", function () {
  userschoice = userSelection.value;

  game.play(userschoice);
  
  updateScoreTallyUI();
  updateGameHistoryUI();
});

resetButton.addEventListener("click", function () {
  game.resetGame();

  updateScoreTallyUI();
  updateGameHistoryUI();
});
// If you're doing the extra-credit, uncomment the below: reset-game-button
//resetGameButton.addEventListener(`click`, function(e) { 
  
// });