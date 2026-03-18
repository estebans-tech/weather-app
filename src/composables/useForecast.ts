import { ref } from 'vue'
import { fetchForecast } from 'src/services/weatherApi'
import type { ForecastItem, ForecastResponse } from 'src/types/weather'
import type { WeatherUnit } from 'src/types/units'

// Returns one forecast item per day by filtering for 12:00:00 entries
const getDailyForecasts = (list: ForecastItem[]): ForecastItem[] =>
  list.filter((item) => item.dt_txt.includes('12:00:00'))

export const useForecast = () => {
  const forecast = ref<ForecastResponse>()
  const dailyForecasts = ref<ForecastItem[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const loadForecast = async (lat: number, lon: number, unit: WeatherUnit) => {
    isLoading.value = true
    error.value = null

    try {
      forecast.value = await fetchForecast(lat, lon, unit)
      dailyForecasts.value = getDailyForecasts(forecast.value.list)
    } catch (err) {
      if (err instanceof Error) error.value = err.message
    } finally {
      isLoading.value = false
    }
  }

  return { forecast, dailyForecasts, isLoading, error, loadForecast }
}
