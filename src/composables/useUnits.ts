import { computed } from 'vue'
import type { WeatherUnit } from 'src/types/units'
import { celsiusToFahrenheit, msToMph, roundTemp, roundWind } from 'src/utils/convertUnits'

export const useUnits = (unit: () => WeatherUnit) => {
  const tempUnit = computed(() => unit() === 'metric' ? '°C' : '°F')
  const windUnit = computed(() => unit() === 'metric' ? 'm/s' : 'mph')

  const displayTemp = (temp: number) =>
    unit() === 'metric' ? roundTemp(temp) : celsiusToFahrenheit(temp)

  const displayWind = (speed: number) =>
    unit() === 'metric' ? roundWind(speed) : msToMph(speed)

  return { tempUnit, windUnit, displayTemp, displayWind }
}
