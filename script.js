const heading = document.getElementById('heading');
const currentDice = document.getElementById('button');
const input = document.getElementById('input');
const hideDice = document.getElementById('diceimg');
const scoredisplay = document.getElementById('scoredisplay');

diceimg.style.display = "none";

currentDice.addEventListener('click', () => {
 getDiceRoll();
})

const getDiceRoll = () => {
  let randomNumber = (Math.floor(Math.random() * 6)+ 1);
  diceimg.style.display = "show";
  scoredisplay.innerHTML=randomNumber;
  document.getElementById('diceimg').src=`img/dice${randomNumber}.png`;
}












