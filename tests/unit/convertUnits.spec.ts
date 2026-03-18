import { describe, it, expect } from 'vitest'
import { celsiusToFahrenheit, msToMph, roundTemp, roundWind } from 'src/utils/convertUnits'

describe('celsiusToFahrenheit', () => {
  it('converts 0°C to 32°F', () => {
    expect(celsiusToFahrenheit(0)).toBe(32)
  })

  it('converts 100°C to 212°F', () => {
    expect(celsiusToFahrenheit(100)).toBe(212)
  })
})

describe('msToMph', () => {
  it('converts 0 m/s to 0 mph', () => {
    expect(msToMph(0)).toBe(0)
  })

  it('converts 5 m/s to 11 mph', () => {
    expect(msToMph(5)).toBe(11)
  })
})

describe('roundTemp', () => {
  it('rounds 14.92 to 15', () => {
    expect(roundTemp(14.92)).toBe(15)
  })
})

describe('roundWind', () => {
  it('rounds 4.12 to 4.1', () => {
    expect(roundWind(4.12)).toBe(4.1)
  })
})

