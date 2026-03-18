import type { CurrentWeather } from 'src/types/weather'

export const mockWeather: CurrentWeather = {
  name: 'Stockholm',
  weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
  main: { temp: 0, feels_like: -2, temp_min: -3, temp_max: 2, humidity: 72 },
  wind: { speed: 5, deg: 180 },
  dt: Date.now(),
  sys: { country: 'SE', sunrise: 0, sunset: 0 },
}
