import { describe, it, expect } from 'vitest'
import { useUnits } from 'src/composables/useUnits'

describe('useUnits', () => {
  describe('metric', () => {
    const { tempUnit, windUnit, displayTemp, displayWind } = useUnits(() => 'metric')

    it('shows °C', () => {
      expect(tempUnit.value).toBe('°C')
    })

    it('shows m/s', () => {
      expect(windUnit.value).toBe('m/s')
    })

    it('rounds temperature', () => {
      expect(displayTemp(14.92)).toBe(15)
    })

    it('rounds wind speed', () => {
      expect(displayWind(4.12)).toBe(4.1)
    })
  })

  describe('imperial', () => {
    const { tempUnit, windUnit, displayTemp, displayWind } = useUnits(() => 'imperial')

    it('shows °F', () => {
      expect(tempUnit.value).toBe('°F')
    })

    it('shows mph', () => {
      expect(windUnit.value).toBe('mph')
    })

    it('converts celsius to fahrenheit', () => {
      expect(displayTemp(0)).toBe(32)
    })

    it('converts m/s to mph', () => {
      expect(displayWind(5)).toBe(11)
    })

    it('never returns same value for 0°C in fahrenheit as in celsius', () => {
      const metric = useUnits(() => 'metric')
      const imperial = useUnits(() => 'imperial')
      expect(metric.displayTemp(0)).not.toBe(imperial.displayTemp(0))
      expect(imperial.displayTemp(0)).toBe(32)
    })
  })
})
