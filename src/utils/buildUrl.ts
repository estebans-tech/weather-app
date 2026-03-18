// Utility functions for building OpenWeatherMap API URLs
import { OWM_ENDPOINTS } from 'src/constants/api'
import type { WeatherUnit } from 'src/types/units'

// Generic URL builder
// Returns: 'https://api.example.com/weather?lat=59.3&lon=18.1'
const buildUrl = (endpoint: string, params: Record<string, string>): string => {
  const query = new URLSearchParams(params)
  return `${endpoint}?${query.toString()}`
}

// Builds coordinate-based params used by both weather and forecast endpoints
// Returns: { lat: '59.3', lon: '18.1', units: 'metric', appid: '...' }
const buildCoordParams = (lat: number, lon: number, units: WeatherUnit): Record<string, string> => ({
  lat: String(lat),
  lon: String(lon),
  units,
  appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
})

// Builds the params object for the geocoding endpoint
// Returns: { q: 'Stockholm', limit: '5', appid: '...' }
const buildGeoParams = (city: string, limit: number): Record<string, string> => ({
  q: city,
  limit: String(limit),
  appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
})

// Public API
export const buildWeatherUrl = (lat: number, lon: number, units: WeatherUnit): string =>
  buildUrl(OWM_ENDPOINTS.currentWeather, buildCoordParams(lat, lon, units))

// limit defaults to 5 but can be overridden by the caller
export const buildGeoUrl = (city: string, limit: number = 5): string =>
  buildUrl(OWM_ENDPOINTS.geocoding, buildGeoParams(city, limit))

export const buildForecastUrl = (lat: number, lon: number, units: WeatherUnit): string =>
  buildUrl(OWM_ENDPOINTS.forecast, buildCoordParams(lat, lon, units))

