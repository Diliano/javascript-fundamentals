const WeatherClient = require('./weatherClient');

class Weather {

  constructor(weatherClient) {
    this.weatherClient = weatherClient;
    this.weatherData = null;
  }

  async load(city) {
    const weatherData = await this.weatherClient.fetchWeatherData(city);
    this.weatherData = weatherData;
  };
 
};

module.exports = Weather;