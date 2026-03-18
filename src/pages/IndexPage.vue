<script setup lang="ts">
import { ref } from 'vue'
// Components
import SearchBar from 'components/SearchBar.vue'
import UnitToggle from 'components/UnitToggle.vue'
import WeatherCard from 'components/WeatherCard.vue'
// Types
import type { CurrentWeather } from 'src/types/weather'
import type { WeatherUnit } from 'src/types/units'

const unit = ref<WeatherUnit>('metric')

// Temporary test data
const weather = ref<CurrentWeather | null>({
  name: 'Stockholm',
  weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
  main: { temp: 12, feels_like: 9, temp_min: 8, temp_max: 14, humidity: 72 },
  wind: { speed: 5, deg: 180 },
  dt: Date.now(),
  sys: { country: 'SE', sunrise: 0, sunset: 0 },
})
</script>

<style scoped lang="scss">
.weather-app {
  width: 100%;
  max-width: 600px;
}
</style>

<template>
  <q-page class="column items-center q-pa-md">
    <div class="weather-app">
       <div class="row items-center q-mb-md">
        <SearchBar class="col" />
        <UnitToggle v-model="unit" class="q-ml-sm" />
      </div>

      <WeatherCard v-if="weather" :weather="weather" :unit="unit" />
    </div>
  </q-page>
</template>

