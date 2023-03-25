const apiKey = require('./apiKey');

class WeatherClient {

  async fetchWeatherData(city) {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl)
    const data = await response.json();
    console.log(`Weather data for ${data.name}:`);
    console.log(data);
    return data;
  };

};

module.exports = WeatherClient;