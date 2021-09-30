// 4-math

function divideBy(firstNumber) {
  return (secondNumber) => secondNumber / firstNumber;
}

function addBy(firstNumber) {
  return (secondNumber) => secondNumber + firstNumber;
}

const addBy100 = (n) => addBy(100)(n);
const addBy1000 = (n) => addBy(1000)(n);
const divideBy10 = (n) => divideBy(10)(n);
const divideBy100 = (n) => divideBy(100)(n);
