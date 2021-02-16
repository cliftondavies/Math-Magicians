import calculate from '../logic/calculate';

test('AC input on calculator', () => {
  const calculatorData = { total: '10', next: '5', operation: '+' };
  const buttonName = 'AC';
  const expectedResult = { total: null, next: null, operation: null };
  const result = calculate(calculatorData, buttonName);
  expect(result).toEqual(expectedResult);
});

describe('Digit input on calculator', () => {
  test('when next value is not null', () => {
    const calculatorData = { total: '10', next: '5', operation: '+' };
    const buttonName = '1';
    const expectedResult = { total: '10', next: '51', operation: '+' };
    const result = calculate(calculatorData, buttonName);
    expect(result).toEqual(expectedResult);
  });

  test('when next value is null', () => {
    const calculatorData = { total: '10', next: null, operation: '+' };
    const buttonName = '1';
    const expectedResult = { total: '10', next: '1', operation: '+' };
    const result = calculate(calculatorData, buttonName);
    expect(result).toEqual(expectedResult);
  });
});

describe('Equal to input on calculator', () => {
  test('when total, next and operation are not null', () => {
    const calculatorData = { total: '10', next: '5', operation: '+' };
    const buttonName = '=';
    const expectedResult = { total: '15', next: null, operation: null };
    const result = calculate(calculatorData, buttonName);
    expect(result).toEqual(expectedResult);
  });

  test('when total, next or operation are null', () => {
    const calculatorData = { total: null, next: '5', operation: '+' };
    const buttonName = '=';
    const expectedResult = { total: '5', next: null, operation: null };
    const result = calculate(calculatorData, buttonName);
    expect(result).toEqual(expectedResult);
  });
});

describe('Operation input on calculator', () => {
  test('when previous operation is %', () => {
    const calculatorData = { total: '10', next: null, operation: '%' };
    const buttonName = 'x';
    const expectedResult = { total: '10', next: null, operation: 'x' };
    const result = calculate(calculatorData, buttonName);
    expect(result).toEqual(expectedResult);
  });

  test('when previous operation is not %', () => {
    const calculatorData = { total: '10', next: '5', operation: '-' };
    const buttonName = '+';
    const expectedResult = { total: '5', next: null, operation: '+' };
    const result = calculate(calculatorData, buttonName);
    expect(result).toEqual(expectedResult);
  });
});

describe('+/- input on calculator', () => {
  test('when next value is not null', () => {
    const calculatorData = { total: null, next: '-5', operation: null };
    const buttonName = '+/-';
    const expectedResult = { total: null, next: '5', operation: null };
    const result = calculate(calculatorData, buttonName);
    expect(result).toEqual(expectedResult);
  });

  test('when next value is null', () => {
    const calculatorData = { total: '10', next: null, operation: null };
    const buttonName = '+/-';
    const expectedResult = { total: '-10', next: null, operation: null };
    const result = calculate(calculatorData, buttonName);
    expect(result).toEqual(expectedResult);
  });
});
