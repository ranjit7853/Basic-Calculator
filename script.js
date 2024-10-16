let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperator(selectedOperator) {
  operator = selectedOperator;
  previousInput = currentInput;
  currentInput = '';
}

function calculateResult() {
  let result;

  switch (operator) {
    case '+':
      result = parseFloat(previousInput) + parseFloat(currentInput);
      break;
    case '-':
      result = parseFloat(previousInput) - parseFloat(currentInput);
      break;
    case '*':
      result = parseFloat(previousInput) * parseFloat(currentInput);
      break;
    case '/':
      result = parseFloat(previousInput) / parseFloat(currentInput);
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  previousInput = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput || '0';
}