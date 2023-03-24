const Thermostat = require('./thermostat');

describe('Thermostat', () => {

  it('constructs a new thermostat with a starting temperature of 20', () => {
    const thermostat = new Thermostat();
    expect(thermostat).toBeInstanceOf(Thermostat);
    expect(thermostat.temperature).toBe(20);
  });

  it('constructs with power saving mode set to on', () => {
    const thermostat = new Thermostat();
    expect(thermostat.psm).toBe(true);
  });

  it('increases the temperature and returns the new value', () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });

  it('decreases the temperature and returns the new value', () => {
    const thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(19);
  });

  it('cannot decrease the temperature below 10', () => {
    const thermostat = new Thermostat();
    for (let i = 0 ; i <= 15 ; i++) {
      thermostat.down();
    };
    expect(thermostat.getTemperature()).toBe(10);
  });

  it('sets a maximum temperature of 25 when power saving mode is on', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true);
    for (let i = 0 ; i <= 10 ; i++) {
      thermostat.up();
    };
    expect(thermostat.getTemperature()).toBe(25);
  });

  it('reduces the temp to 25 when power saving mode is turned on whilst temp is over 25', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0 ; i <= 10 ; i++) {
      thermostat.up();
    };
    thermostat.setPowerSavingMode(true);
    expect(thermostat.getTemperature()).toBe(25);
  });

  it('sets a maximum of 32 when power saving mode is off', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0 ; i <= 15 ; i++) {
      thermostat.up();
    };
    expect(thermostat.getTemperature()).toBe(32);
  });

  it('resets the temperature to 20 when called', () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('returns "low-usage" when temperature is below 18', () => {
    const thermostat = new Thermostat();
    for (i = 0 ; i <= 5 ; i++) {
      thermostat.down();
    };
    expect(thermostat.getUsage()).toBe('low-usage');
  });

  it('returns "medium-usage" when temperature is between 18 and 25 inclusive', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getUsage()).toBe('medium-usage');
  });

  it('returns "high-usage" when temperature is above 25', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (i = 0 ; i <= 10 ; i++) {
      thermostat.up();
    };
    expect(thermostat.getUsage()).toBe('high-usage');
  });

});