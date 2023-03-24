const Candy = require('./candy');
const ShoppingBasket = require('./shoppingBasket');

describe('ShoppingBasket', () => {

  it('constructs a new instance with an empty starting basket', () => {
    const basket = new ShoppingBasket();
    expect(basket).toBeInstanceOf(ShoppingBasket);
    expect(basket.basket).toEqual([]);
  });

  it('constructs with a starting value of 0', () => {
    const basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toBe(0);
  });

  it('adds an item to the basket', () => {
    const fakeCandy = {
      getName: () => 'Mars',
      getPrice: () => 4.99
    };
    const basket = new ShoppingBasket();
    basket.addItem(fakeCandy);
    expect(basket.basket).toContain(fakeCandy);
    expect(basket.basket.length).toBe(1);
  });

  it('totals the value of all items added', () => {
    const fakeCandy = {
      getName: () => 'Mars',
      getPrice: () => 4.99
    };
    const basket = new ShoppingBasket();
    basket.addItem(fakeCandy);
    basket.addItem(fakeCandy);
    expect(basket.getTotalPrice()).toBe(9.98);
  });

});