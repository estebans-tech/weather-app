import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WeatherCard from 'src/components/WeatherCard.vue'
// Mocks
import { mockWeather } from '../fixtures/weather'

describe('WeatherCard', () => {
  it('displays temperature in celsius when unit is metric', () => {
    const wrapper = mount(WeatherCard, { props: { weather: mockWeather, unit: 'metric' } })
    expect(wrapper.text()).toContain('0°C')
  })

  it('converts and displays temperature in fahrenheit when unit is imperial', () => {
    const wrapper = mount(WeatherCard, { props: { weather: mockWeather, unit: 'imperial' } })
    expect(wrapper.text()).toContain('32°F')
    expect(wrapper.text()).not.toContain('0°F')
  })
})
