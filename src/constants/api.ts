// Base URL for the OpenWeatherMap API
export const OWM_BASE_URL = 'https://api.openweathermap.org'

// API versions
export const OWM_API_V25 = `${OWM_BASE_URL}/data/2.5`
export const OWM_GEO_V1 = `${OWM_BASE_URL}/geo/1.0`

// Named endpoints
export const OWM_ENDPOINTS = {
  currentWeather: `${OWM_API_V25}/weather`,
  forecast: `${OWM_API_V25}/forecast`,
  geocoding: `${OWM_GEO_V1}/direct`,
} as const
