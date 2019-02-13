const heading = document.getElementById('heading');
const currentDice = document.getElementById('button');
const newGameButton = document.getElementById('newgamebutton');
const input = document.getElementById('input');
const hideDice = document.getElementById('diceimg');
const scoredisplay = document.getElementById('scoredisplay');
let totalScore = 0;
let randomNumber = 0;

const resetGame = () => {
diceimg.style.visibility = "hidden";
scoredisplay.style.visibility = "hidden";
currentDice.style.visibility = "hidden";
newGameButton.style.visibility = "visible";
totalScore = 0;
}

const getDiceRoll = () => {
  let randomNumber = (Math.floor(Math.random() * 6)+ 1);
  totalScore = totalScore + randomNumber;
  scoredisplay.innerHTML='Your Score is' + ' ' + totalScore;
  document.getElementById('diceimg').src=`img/dice${randomNumber}.png`;
  if (randomNumber == 1){
    let gameWon = false;
    endGame(gameWon)
    return 
  }
  checkScore();
}

diceimg.style.visibility = "hidden";
scoredisplay.style.visibility = "hidden";
newGameButton.style.visibility = "hidden";

currentDice.addEventListener('click', () => {
 getDiceRoll();
 diceimg.style.visibility = "visible";
 scoredisplay.style.visibility = "visible";
}
)

newGameButton.addEventListener('click', () => {
  newGameButton.style.visibility = "hidden";
  currentDice.style.visibility = "visible";
  scoredisplay.textContent = "";
  diceimg.style.visibility = "hidden";
 }
 )

const checkScore = () => {
  if (totalScore >= 20){
    let gameWon = true;
    endGame(gameWon);
  }
}

const endGame = (gameWon) => {
if (gameWon){
  scoredisplay.textContent='YOU HAVE WON!!!'
} else {
  scoredisplay.textContent='YOU HAVE LOST!!'
}
newGameButton.style.visibility = "visible";
currentDice.style.visibility = "hidden";
resetGame();
}