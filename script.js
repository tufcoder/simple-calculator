const buttons = document.querySelectorAll('.button');
const screen = document.querySelector('.screen');

buttons.forEach(button => button.addEventListener('click', clickCalcButton));

resetScreen();

function clickCalcButton() {
  console.log(this.innerHTML);
}

function resetScreen() {
  screen.innerHTML = "";
}