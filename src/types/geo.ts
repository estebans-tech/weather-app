// Single location result from the OpenWeatherMap geocoding endpoint. See: https://openweathermap.org/api/geocoding-api
export interface GeoLocation {
  name: string
  lat: number
  lon: number
  country: string
  state?: string // Not always present
}

