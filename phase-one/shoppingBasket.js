class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  getTotalPrice() {
    let price = 0;
    this.basket.map((item) => {
      price += item.getPrice();
    });
    return price;
  }

  addItem(item) {
    this.basket.push(item);
  }
};

module.exports = ShoppingBasket;