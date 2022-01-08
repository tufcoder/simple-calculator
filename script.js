const buttons = document.querySelectorAll('.button');
const screen = document.querySelector('.screen');

buttons.forEach(button => button.addEventListener('click', clickButton));

resetScreen();

function clickButton() {
  let input = this.innerHTML;
  let expression = screen.innerHTML;

  //const operators = [".", "%", "/", "x", "-", "+"];
  
  if(input === "C") return resetScreen();
  else if(input === "&lt;=") return eraseInput(expression);
  else if(input === "+/-") return moreOrLess(expression);
  else if(input === "=") return calculator(expression);

  if(isScreenFull()) return;

  screen.innerHTML += input;
}

function resetScreen() {
  screen.innerHTML = "";
}

function isScreenFull() {
  if(screen.innerHTML.length > 11) return true;
  
  return false;
}

function eraseInput(value) {
  screen.innerHTML = value.slice(0,-1);
}

function moreOrLess(expression) {
  return screen.innerHTML = parseFloat(expression)*-1;
}

function calculator(expression) {
  return screen.innerHTML = Function('"use strict"; return (' + expression + ')')();
}