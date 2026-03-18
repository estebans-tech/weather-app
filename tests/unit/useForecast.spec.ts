import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useForecast } from 'src/composables/useForecast'

vi.mock('src/services/weatherApi', () => ({
  fetchForecast: vi.fn(),
}))

import { fetchForecast } from 'src/services/weatherApi'

const mockForecastResponse = {
  city: { name: 'Stockholm', country: 'SE' },
  list: [
    { dt: 1, main: { temp: 10, feels_like: 8, temp_min: 8, temp_max: 12, humidity: 70 }, weather: [], wind: { speed: 3, deg: 180 }, dt_txt: '2024-03-19 09:00:00' },
    { dt: 2, main: { temp: 12, feels_like: 10, temp_min: 10, temp_max: 14, humidity: 65 }, weather: [], wind: { speed: 4, deg: 180 }, dt_txt: '2024-03-19 12:00:00' },
    { dt: 3, main: { temp: 11, feels_like: 9, temp_min: 9, temp_max: 13, humidity: 68 }, weather: [], wind: { speed: 3, deg: 180 }, dt_txt: '2024-03-20 12:00:00' },
  ]
}

beforeEach(() => {
  vi.clearAllMocks()
})

describe('useForecast', () => {
  it('starts with no forecast data', () => {
    const { forecast, isLoading, error } = useForecast()
    expect(forecast.value).toBeUndefined()
    expect(isLoading.value).toBe(false)
    expect(error.value).toBeNull()
  })

  it('loads forecast and filters daily entries at 12:00:00', async () => {
    vi.mocked(fetchForecast).mockResolvedValueOnce(mockForecastResponse)
    const { dailyForecasts, loadForecast } = useForecast()
    await loadForecast(59.3, 18.1, 'metric')
    expect(dailyForecasts.value).toHaveLength(2)
  })

  it('sets error on failed fetch', async () => {
    vi.mocked(fetchForecast).mockRejectedValueOnce(new Error('Forecast fetch failed: 404'))
    const { error, loadForecast } = useForecast()
    await loadForecast(59.3, 18.1, 'metric')
    expect(error.value).toBe('Forecast fetch failed: 404')
  })
})
