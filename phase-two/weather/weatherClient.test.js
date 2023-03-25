const WeatherClient = require('./weatherClient');

describe('WeatherClient', () => {

  it('constructs a new WeatherClient', () => {
    const weatherClient = new WeatherClient();
    expect(weatherClient).toBeInstanceOf(WeatherClient);
  });

  it('fetches the current weather for a given city and returns a promise of data', async () => {
    const weatherClient = new WeatherClient();
    const weatherData = await weatherClient.fetchWeatherData('London');
    expect(weatherData).toHaveProperty('name', 'London');
    expect(weatherData).toHaveProperty('main');
    expect(weatherData).toHaveProperty('weather');
  });

});