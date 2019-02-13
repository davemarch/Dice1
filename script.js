const heading = document.getElementById('heading');
const currentDice = document.getElementById('button');
const input = document.getElementById('input');
const myArray = ["one","two","three","four","five","six"];

// let getDiceRoll = myArray[randomNumber];

// for ( i=0; i<myArray.length; i++) {

if (getDiceRoll == myArray[0]){
    console.log('you got a ' + getDiceRoll + ' you lose')
} else { console.log('you got a ' + getDiceRoll)}


currentDice.addEventListener('click', () => {
 getDiceRoll();
})

const getDiceRoll = () => {
  let randomNumber = (Math.floor(Math.random() * 6));
  input.value=myArray[randomNumber];
 
}











