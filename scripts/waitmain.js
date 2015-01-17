var operation;
var displayedNumber;

function numberPressed(number){
  var displayedNumber = Number(document.getElementById('result').textContent);

function plusPressed(){
  operation = '+';
}

if(operation == '+') {
      displayedNumber = displayedNumber + number;
  } else if(operation == '-') {

  } else {
    displayedNumber = number;
  }

/***
Display
***/

document.getElementById('display').textContent = displayedNumber;

/***
Button Zero
***/
function zeroPushed(event) {
  event.preventDefault();
  numberPressed(0)

  // document.getElementById('result').textContent = '0';

  // if(operation == "+") {
  //
  // } else {
  //   calcu
  // }


}
// var btn0 = document.getElementById('btn-0');
document.getElementById('btn-0').addEventListener('click', zeroPushed);


/***
Button One
***/
function btn1(event) {
  event.preventDefault();
  document.getElementById('result').textContent = '1';
  Number(btn1.value)
}

  document.getElementById('btn-1').addEventListener('click', btn1);

/***
Button Two Display
***/
function btn2(event) {
  event.preventDefault();
  document.getElementById('result').textContent = '2';
  var value = 2;
  Number(btn2.value)
}

document.getElementById('btn-2').addEventListener('click', btn2);

/***
Button Three Display
***/
function btn3(event) {
  event.preventDefault();
  document.getElementById('result').textContent = '3';
}

document.getElementById('btn-3').addEventListener('click', btn3);

/***
Button Four Display
***/
function btn4(event) {
  event.preventDefault();
  document.getElementById('result').textContent = '4';
}

document.getElementById('btn-4').addEventListener('click', btn4);

/***
Button Five Display
***/
function btn5(event) {
  event.preventDefault();
  document.getElementById('result').textContent = '5';
}

document.getElementById('btn-5').addEventListener('click', btn5);

/***
Button Six Display
***/
function btn6(event) {
  event.preventDefault();
  document.getElementById('result').textContent = '6';
}

document.getElementById('btn-6').addEventListener('click', btn6);

/***
Button Seven Display
***/
function btn7(event) {
  event.preventDefault();
  document.getElementById('result').textContent = '7';
}

document.getElementById('btn-7').addEventListener('click', btn7);

/***
Button Eight
***/
function btn8(event) {
  event.preventDefault();
  document.getElementById('result').textContent = '8';
}

document.getElementById('btn-8').addEventListener('click', btn8);

/***
Button Nine
***/
function btn9(event) {
  event.preventDefault();
  // document.getElementById('result').textContent = '9';
}

document.getElementById('btn-9').addEventListener('click', btn9);

/***
Button Plus
***/
function plusPushed(event) {
  event.preventDefault();
  operation = '+';
}

document.getElementById('btn-plus').addEventListener('click', plusPushed);
