import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useWeather } from 'src/composables/useWeather'
// Mocks
import { mockWeather } from '../fixtures/weather'

// Mock the weatherApi service
vi.mock('src/services/weatherApi', () => ({
  fetchGeoLocation: vi.fn(),
  fetchCurrentWeather: vi.fn(),
}))

import { fetchGeoLocation, fetchCurrentWeather } from 'src/services/weatherApi'

const mockGeoLocation = { name: 'Stockholm', lat: 59.3, lon: 18.1, country: 'SE' }

beforeEach(() => {
  vi.clearAllMocks()
})

describe('useWeather', () => {
  it('starts with no weather data', () => {
    const { weather, isLoading, error } = useWeather()
    expect(weather.value).toBeUndefined()
    expect(isLoading.value).toBe(false)
    expect(error.value).toBeNull()
  })

  it('sets weather data after successful search', async () => {
    vi.mocked(fetchGeoLocation).mockResolvedValueOnce([mockGeoLocation])
    vi.mocked(fetchCurrentWeather).mockResolvedValueOnce(mockWeather)

    const { weather, search } = useWeather()
    await search('Stockholm')

    expect(weather.value?.name).toBe('Stockholm')
  })

  it('sets error when no locations found', async () => {
    vi.mocked(fetchGeoLocation).mockResolvedValueOnce([])

    const { error, search } = useWeather()
    await search('XYZ')

    expect(error.value).toBe('No locations found')
  })

  it('does nothing when search query is empty', async () => {
    const { weather, search } = useWeather()
    await search('')
    expect(weather.value).toBeUndefined()
  })
})
