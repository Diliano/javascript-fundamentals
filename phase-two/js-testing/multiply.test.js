const multiply = require('./multiply');

describe('multiply', () => {

  it('multiplies 3 by 5', () => {
    expect(multiply(3, 5)).toBe(15);
  });

  it('multiplies 6 by 8', () => {
    expect(multiply(6, 8)).toBe(48);
  });
});