// API calls to OpenWeatherMap - handles fetch and error handling
import { buildWeatherUrl, buildGeoUrl, buildForecastUrl } from 'src/utils/buildUrl'
import type { CurrentWeather, ForecastResponse } from 'src/types/weather'
import type { GeoLocation } from 'src/types/geo'
import type { WeatherUnit } from 'src/types/units'

// Fetches a list of locations matching the search query
export const fetchGeoLocation = async (city: string): Promise<GeoLocation[]> => {
  const response = await fetch(buildGeoUrl(city))
  if (!response.ok) throw new Error(`Geocoding failed: ${response.status}`)
  return response.json()
}

// Fetches current weather for a given coordinate
export const fetchCurrentWeather = async (
  lat: number,
  lon: number,
  units: WeatherUnit
): Promise<CurrentWeather> => {
  const response = await fetch(buildWeatherUrl(lat, lon, units))
  if (!response.ok) throw new Error(`Weather fetch failed: ${response.status}`)
  return response.json()
}

// Fetches 5-day forecast in 3-hour intervals for a given coordinate
export const fetchForecast = async (
  lat: number,
  lon: number,
  units: WeatherUnit
): Promise<ForecastResponse> => {
  const response = await fetch(buildForecastUrl(lat, lon, units))
  if (!response.ok) throw new Error(`Forecast fetch failed: ${response.status}`)
  return response.json()
}

