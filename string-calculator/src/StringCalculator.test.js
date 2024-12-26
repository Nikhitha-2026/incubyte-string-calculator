import StringCalculator from './StringCalculator'; 
describe('StringCalculator - GetCalledCount method', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator(); 
  });

  test('returns 0 when Add() has not been called', () => {
    expect(calculator.GetCalledCount()).toBe(0); 
  });

  test('returns 1 after calling Add() once', () => {
    calculator.Add('1,2'); 
    expect(calculator.GetCalledCount()).toBe(1); 
  });

  test('returns correct count after multiple calls to Add()', () => {
    calculator.Add('1,2');
    calculator.Add('3,4');
    expect(calculator.GetCalledCount()).toBe(2); 
  });
});
