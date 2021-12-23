'use strict';

const firstNumInput = document.querySelector('#firstNum'),
  secondNumInput = document.querySelector('#secondNum'),
  operatorInput = document.querySelector('#operator'),
  formSubmit = document.querySelector('.form__submit'),
  resultOut = document.querySelector('.out');

formSubmit.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(+firstNumInput.value, operatorInput.value, +secondNumInput.value);
  showResult();
});

function showResult() {
  let result = 0;
  switch (operatorInput.value) {
    case 'plus':
      result = Math.round(+firstNumInput.value + +secondNumInput.value);
      break;

    case 'minus':
      result = Math.round(+firstNumInput.value - +secondNumInput.value);
      break;

    case 'multiply':
      result = Math.round(+firstNumInput.value * +secondNumInput.value);
      break;

    case 'divide':
      result = Math.round(+firstNumInput.value / +secondNumInput.value);
      break;

    default:
      result = 0;
  }

  resultOut.textContent = result;
}
