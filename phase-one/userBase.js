class UserBase {
  constructor(names) {
    this.names = names;
  }

  count() {
    return this.names.length;
  }

  getNames() {
    return this.names.map((name) => {
      return name.getName();
    });
  }

  getIntroductions() {
    return this.names.map((name) => {
      return name.getIntroduction();
    });
  }
};

module.exports = UserBase;