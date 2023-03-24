const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {

  it('returns "Fizz" when number is divisible by 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  });

  it('returns "Fizz" when number is divisible by 3', () => {
    expect(fizzbuzz(18)).toBe('Fizz');
  });

  it('returns "Buzz" when number is divisible by 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
  });

  it('returns "Buzz" when number is divisible by 5', () => {
    expect(fizzbuzz(20)).toBe('Buzz');
  });

  it('returns "FizzBuzz" when number is divisible by 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  });

});