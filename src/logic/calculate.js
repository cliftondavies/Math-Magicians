import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  let { total, next, operation } = calculatorData;
  const operations = ['+', '-', 'x', '/', '%'];
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (digits.includes(buttonName)) {
    next = (next) ? next + buttonName : buttonName;
  } else if (buttonName === '=') {
    total = (operation && total && next) ? operate(total, next, operation) : next;
    next = null;
    operation = null;
  } else if (operations.includes(buttonName)) {
    if (operation !== '%') {
      if (buttonName === '%') {
        if (operation && total && next) { total = operate(total, next, operation, buttonName); }
        if (total && !next) { total = `${Number(total) / 100}`; }
        if (next && !total) { total = `${Number(next) / 100}`; }
      } else {
        total = (operation && total && next) ? operate(total, next, operation) : next;
      }
    }
    next = null;
    operation = buttonName;
  } else if (buttonName === '+/-') {
    if (next) { next = `${Number(next) * -1}`; }
    if (total) { total = `${Number(total) * -1}`; }
  }

  return { total, next, operation };
};

export default calculate;
