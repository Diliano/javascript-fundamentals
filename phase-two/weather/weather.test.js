const Weather = require('./weather');
const WeatherClient = require('./weatherClient');

describe('Weather', () => {
  
  it('constructs', () => {
    const weatherClient = new WeatherClient();
    const weather = new Weather(weatherClient);
    expect(weather).toBeInstanceOf(Weather);
  });

  it('loads a city from the WeatherClient', async () => {
    const mockWeatherClient = {
      fetchWeatherData: jest.fn(),
    };
    mockWeatherClient.fetchWeatherData.mockResolvedValueOnce({
      name: 'London',
    });
    const weather = new Weather(mockWeatherClient);
    await weather.load('London');
    expect(mockWeatherClient.fetchWeatherData).toHaveBeenCalledWith('London');
  });

  it('returns weather data for the loaded city', async () => {
    const mockWeatherClient = {
      fetchWeatherData: jest.fn(),
    };
    mockWeatherClient.fetchWeatherData.mockResolvedValueOnce({
      name: 'London',
    });
    const weather = new Weather(mockWeatherClient);
    await weather.load('London');
    expect(weather.getWeatherData().name).toEqual('London');
  });

});