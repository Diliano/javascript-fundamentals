class Thermostat {
  constructor() {
    this.temperature = 20;
    this.psm = true;
  }

  setPowerSavingMode(boolean) {
    if (boolean === true) {
      if (this.temperature > 25) {
        this.psm = true;
        this.temperature = 25;
      } else {
        this.psm = true;
      };
    } else if (boolean === false) {
      this.psm = false;
    };
  };

  up() {
    if (this.psm === true) {
      if (this.temperature < 25) {
        this.temperature += 1;
      };
    } else if (this.psm === false) {
      if (this.temperature < 32) {
        this.temperature += 1;
      };
    };
  }

  down() {
    if (this.temperature > 10) {
      this.temperature -= 1;
    };
  }

  reset() {
    this.temperature = 20;
  }

  getTemperature() {
    return this.temperature;
  }

  getUsage() {
    if (this.temperature < 18) {
      return 'low-usage';
    } else if (this.temperature >= 18 && this.temperature <= 25) {
      return 'medium-usage';
    } else if (this.temperature > 25) {
      return 'high-usage';
    };
  }

};

module.exports = Thermostat;