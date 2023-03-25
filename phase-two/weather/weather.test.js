const Weather = require('./weather');
const WeatherClient = require('./weatherClient');

describe('Weather', () => {

  it('constructs', () => {
    const weatherClient = new WeatherClient();
    const weather = new Weather(weatherClient);
    expect(weather).toBeInstanceOf(Weather);
  });

});