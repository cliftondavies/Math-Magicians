import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const total = new Big(numberOne);
  const next = new Big(numberTwo);
  let result;

  if (operation === '+') {
    result = total.plus(next);
  } else if (operation === '-') {
    result = total.minus(next);
  } else if (operation === 'x') {
    result = total.times(next);
  } else if (operation === '/') {
    result = total.div(next);
  } else if (operation === '%') {
    result = next.div(100);
  }

  return result.toString();
};

export default operate;
