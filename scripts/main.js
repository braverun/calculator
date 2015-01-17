/**** Operations and Display Config. ****/

  var operation;

function numberPressed(number){
  var displayedNumber = Number(document.getElementById('result').textContent);
  // var calculatedValue

  if(operation == 'btn-plus') {
      displayedNumber = displayedNumber + number;
  } else if(operation == 'btn-minus') {
      displayedNumber = displayedNumber - number;
     } else if(operation == 'btn-x') {
          displayedNumber = displayedNumber * number;
        } else if(operation == 'btn-divide') {
                displayedNumber = displayedNumber / number;

  } else {
    displayedNumber = number;
  }

document.getElementById('result').textContent = displayedNumber;
}

/*** Function Buttons ***/

function plusPressed(event){
  event.preventDefault();
  operation = 'btn-plus';
}

function minusPressed(event){
  event.preventDefault();
  operation = 'btn-minus';
}

function xPressed(event){
  event.preventDefault();
  operation = 'btn-x';
}

function dividePressed(event){
  event.preventDefault();
  operation = 'btn-divide';
}

function equalsPressed(event){
  event.preventDefault();
  operation = 'btn-equals';
}

document.getElementById('btn-plus').addEventListener('click', plusPressed);
document.getElementById('btn-minus').addEventListener('click', minusPressed);
document.getElementById('btn-x').addEventListener('click', xPressed);
document.getElementById('btn-divide').addEventListener('click', dividePressed);
document.getElementById('btn-equals').addEventListener('click', equalsPressed);


/*** Number Buttons ***/

function ninePressed(event) {
  event.preventDefault();
  numberPressed(9);
}

function eightPressed(event) {
  event.preventDefault();
  numberPressed(8);
}

function sevenPressed(event) {
  event.preventDefault();
  numberPressed(7);
}

function sixPressed(event) {
  event.preventDefault();
  numberPressed(6);
}

function fivePressed(event) {
  event.preventDefault();
  numberPressed(5);
}

function fourPressed(event) {
  event.preventDefault();
  numberPressed(4);
}

function threePressed(event) {
  event.preventDefault();
  numberPressed(3);
}

function twoPressed(event) {
  event.preventDefault();
  numberPressed(2);
}

function onePressed(event) {
  event.preventDefault();
  numberPressed(1);
}

function zeroPressed(event) {
  event.preventDefault();
  numberPressed(0);
}

document.getElementById('btn-9').addEventListener('click', ninePressed);
document.getElementById('btn-8').addEventListener('click', eightPressed);
document.getElementById('btn-7').addEventListener('click', sevenPressed);
document.getElementById('btn-6').addEventListener('click', sixPressed);
document.getElementById('btn-5').addEventListener('click', fivePressed);
document.getElementById('btn-4').addEventListener('click', fourPressed);
document.getElementById('btn-3').addEventListener('click', threePressed);
document.getElementById('btn-2').addEventListener('click', twoPressed);
document.getElementById('btn-1').addEventListener('click', onePressed);
document.getElementById('btn-0').addEventListener('click', zeroPressed);
