import Big from 'big.js';

const operate = (numberOne, numberTwo, operation, percent = '') => {
  const total = new Big(numberOne);
  let next = new Big(numberTwo);
  let result;
  if (percent) { next = next.div(100); }

  if (operation === '+') {
    result = total.plus(next);
  } else if (operation === '-') {
    result = total.minus(next);
  } else if (operation === 'x') {
    result = total.times(next);
  } else if (operation === '/') {
    result = (next > 0 || next < 0) ? total.div(next) : 'undefined';
  }

  return result.toString();
};

export default operate;
