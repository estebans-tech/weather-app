import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetchGeoLocation, fetchCurrentWeather } from 'src/services/weatherApi'

// Mock the global fetch function
const mockFetch = vi.fn()
vi.stubGlobal('fetch', mockFetch)

beforeEach(() => {
  mockFetch.mockReset()
})

describe('fetchGeoLocation', () => {
  it('returns a list of locations', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [{ name: 'Stockholm', lat: 59.3, lon: 18.1, country: 'SE' }],
    })

    const result = await fetchGeoLocation('Stockholm')
    expect(result).toHaveLength(1)
    expect(result[0]?.name).toBe('Stockholm')
  })

  it('throws an error on failed request', async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 401 })
    await expect(fetchGeoLocation('Stockholm')).rejects.toThrow('Geocoding failed: 401')
  })
})

describe('fetchCurrentWeather', () => {
  it('returns weather data', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ name: 'Stockholm', main: { temp: 12 } }),
    })

    const result = await fetchCurrentWeather(59.3, 18.1, 'metric')
    expect(result.name).toBe('Stockholm')
  })

  it('throws an error on failed request', async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 404 })
    await expect(fetchCurrentWeather(59.3, 18.1, 'metric')).rejects.toThrow('Weather fetch failed: 404')
  })
})
