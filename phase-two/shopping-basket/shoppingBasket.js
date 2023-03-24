class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  addItem(candy) {
    this.basket.push(candy);
  }

  getTotalPrice() {
    let price = 0;
    this.basket.forEach((candy) => {
      price += candy.getPrice();
    });
    return price;
  }

};

module.exports = ShoppingBasket;