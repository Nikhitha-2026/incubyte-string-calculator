import add from './AddCalculator';

describe('AddCalculator - add function', () => {
  test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('returns the number itself for a single number input', () => {
    expect(add("1")).toBe(1);
  });

  test('adds two numbers separated by a comma', () => {
    expect(add("1,5")).toBe(6);
  });

  test('adds numbers with mixed delimiters (comma and newline)', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('handles custom single-character delimiter', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test('handles custom multi-character delimiter', () => {
    expect(add("//[***]\n1***2***3")).toBe(6); 
  });

  test('handles custom delimiter that matches the default delimiter', () => {
    expect(add("//[,]\n1,2,3")).toBe(6); 
  });

  test('handles multiple custom delimiters', () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
  });

  test('throws an error if negative numbers are present', () => {
    expect(() => add("-1,2")).toThrow('Negative numbers not allowed: -1');
  });

  test('includes the negative numbers in the error message', () => {
    try {
      add("-1,-2,3");
    } catch (error) {
      expect(error.message).toBe('Negative numbers not allowed: -1, -2');
    }
  });

  test('ignores numbers greater than 1000', () => {
    expect(add("2,1001")).toBe(2); 
  });

  test('ignores numbers greater than 1000 and adds smaller ones', () => {
    expect(add("1001,2,3")).toBe(5);
  });

  test('returns 0 when all numbers are greater than 1000', () => {
    expect(add("1001,1002,1003")).toBe(0);
  });
});

