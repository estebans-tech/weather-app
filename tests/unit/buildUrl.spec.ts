import { describe, it, expect } from 'vitest'
import { buildWeatherUrl, buildGeoUrl } from 'src/utils/buildUrl'

describe('buildWeatherUrl', () => {
  it('includes lat, lon and units in the URL', () => {
    const url = buildWeatherUrl(59.3, 18.1, 'metric')
    expect(url).toContain('lat=59.3')
    expect(url).toContain('lon=18.1')
    expect(url).toContain('units=metric')
  })
})

describe('buildGeoUrl', () => {
  it('includes city name in the URL', () => {
    const url = buildGeoUrl('Stockholm')
    expect(url).toContain('q=Stockholm')
  })

  it('uses default limit of 5', () => {
    const url = buildGeoUrl('Stockholm')
    expect(url).toContain('limit=5')
  })

  it('uses custom limit when provided', () => {
    const url = buildGeoUrl('Stockholm', 3)
    expect(url).toContain('limit=3')
  })
})
