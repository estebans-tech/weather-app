// Weather data from the OpenWeatherMap current weather endpoint
// See: https://openweathermap.org/current

export interface WeatherCondition {
  id: number
  main: string        // e.g. "Rain", "Clear"
  description: string // e.g. "light rain"
  icon: string        // e.g. "10d"
}

export interface WeatherMain {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  humidity: number
}

export interface WeatherWind {
  speed: number
  deg: number
}

export interface CurrentWeather {
  name: string
  weather: WeatherCondition[]
  main: WeatherMain
  wind: WeatherWind
  dt: number          // Unix timestamp
  sys: {
    country: string
    sunrise: number   // Unix timestamp
    sunset: number    // Unix timestamp
  }
}
