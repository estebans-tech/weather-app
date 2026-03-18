// Composable that manages weather state and search logic
import { ref } from 'vue'
import { fetchGeoLocation, fetchCurrentWeather } from 'src/services/weatherApi'

import type { CurrentWeather } from 'src/types/weather'
import type { GeoLocation } from 'src/types/geo'
import type { WeatherUnit } from 'src/types/units'

import { DEFAULT_WEATHER_UNIT } from 'src/constants/units'

export const useWeather = () => {
  const weather = ref<CurrentWeather>()
  const location = ref<GeoLocation>()
  const unit = ref<WeatherUnit>(DEFAULT_WEATHER_UNIT)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Abort controller to cancel in-flight requests
  let abortController: AbortController | null = null

  const search = async (city: string) => {
    if (!city) return

    // Cancel any previous in-flight request
    abortController?.abort()
    abortController = new AbortController()

    isLoading.value = true
    error.value = null

    try {
      const locations = await fetchGeoLocation(city)
      if (!locations.length) {
        error.value = 'No locations found'
        return
      }

      // Use the first result
      location.value = locations[0] ?? undefined
      if (!location.value) return

      weather.value = await fetchCurrentWeather(
        location.value.lat,
        location.value.lon,
        unit.value
      )
    } catch (err) {
      if (err instanceof Error && err.name !== 'AbortError') {
        error.value = err.message
      }
    } finally {
      isLoading.value = false
    }
  }

  // Refreshes weather for the current location
  const refresh = async () => {
    if (!location.value) return
    await fetchCurrentWeather(location.value.lat, location.value.lon, unit.value)
      .then((data) => (weather.value = data))
      .catch((err) => (error.value = err.message))
  }

  return { weather, location, unit, isLoading, error, search, refresh }
}

