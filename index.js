const buttons = document.querySelectorAll('button');
const screenDisplay = document.querySelector('.screen');

console.log(buttons);

let calculation = [];
let accumulativeCalculation;

const calculate = (button) => {
  console.log(button);
  const value = button.textContent;

  if (value === 'CLEAR') {
    calculation = [];
    screenDisplay.textContent = '.';
  } else if (value === '=') {
    console.log(accumulativeCalculation);
    screenDisplay.textContent = eval(accumulativeCalculation);
  } else {
    calculation.push(value);
    accumulativeCalculation = calculation.join('');
    screenDisplay.textContent = accumulativeCalculation;
  }
};

buttons.forEach((button) =>
  button.addEventListener('click', () => calculate(button)),
);
