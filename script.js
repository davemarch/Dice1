const heading = document.getElementById('heading');
const currentDice = document.getElementById('button');
const input = document.getElementById('input');
const hideDice = document.getElementById('diceimg');
const scoredisplay = document.getElementById('scoredisplay');
let totalScore = 0;


diceimg.style.visibility = "hidden";
scoredisplay.style.visibility = "hidden";

currentDice.addEventListener('click', () => {
 getDiceRoll();
 diceimg.style.visibility = "visible";
 scoredisplay.style.visibility = "visible";
})

const getDiceRoll = () => {
  let randomNumber = (Math.floor(Math.random() * 6)+ 1);
  totalScore = totalScore + randomNumber;
  scoredisplay.innerHTML='Your Score is' + ' ' + totalScore;
  document.getElementById('diceimg').src=`img/dice${randomNumber}.png`;
}








