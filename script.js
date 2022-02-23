const buttons = document.querySelectorAll('.button');
const screen = document.querySelector('.screen');
const SCREEN_LENGTH = 12;

buttons.forEach(button => button.addEventListener('click', clickButton));

resetScreen();

function clickButton() {
  const input = this.innerHTML;
  const expression = screen.innerHTML;
  
  if(input === "C") return resetScreen();
  else if(input === "&lt;=") return eraseInput(expression);
  else if(input === "+/-") return plusOrMinus(expression);
  else if(input === "=") return calculator(expression);

  if(isScreenFull()) return;

  screen.innerHTML += input;
}

function resetScreen() {
  screen.innerHTML = "";
}

function isScreenFull() {
  if(screen.innerHTML.length >= SCREEN_LENGTH) return true;
  
  return false;
}

function eraseInput(value) {
  screen.innerHTML = value.slice(0,-1);
}

function plusOrMinus(expression) {
  screen.innerHTML = parseFloat(expression)*-1;
}

function calculator(expression) {
  if(expression !== "") {
    const result = Function('"use strict"; return (' + expression + ')')();
    screen.innerHTML = sliceResult(result);
  }
}

function sliceResult(result) {
  return result.toString().length >= SCREEN_LENGTH ? result.toString().slice(0,12) : result;
}