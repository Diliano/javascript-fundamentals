const Candy = require('./candy');

describe('Candy', () => {

  it('constructs a new candy with the given name and price', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy).toBeInstanceOf(Candy);
    expect(candy.name).toBe('Mars');
    expect(candy.price).toBe(4.99);
  });

  it('gets the name of a given candy', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getName()).toBe('Mars');
  });

  it('gets the price of a given candy', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getPrice()).toBe(4.99);
  });

});