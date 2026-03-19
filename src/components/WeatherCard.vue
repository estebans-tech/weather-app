<script setup lang="ts">
// Components
import WeatherDetails from 'components/WeatherDetails.vue'
// Composables
import { useUnits } from 'src/composables/useUnits'
// Types
import type { CurrentWeather } from 'src/types/weather'
import type { WeatherUnit } from 'src/types/units'

const props = defineProps<{
  weather: CurrentWeather
  unit: WeatherUnit
}>()

const { displayTemp, tempUnit } = useUnits(() => props.unit)
</script>

<template>
  <q-card flat bordered class="q-mt-md">
    <q-card-section>
      <div class="row items-center justify-between">
        <div class="text-h6">{{ weather.name }}, {{ weather.sys.country }}</div>
        <q-btn flat round icon="refresh" />
      </div>
    </q-card-section>

    <q-card-section class="row items-center q-pt-none">
      <img
        :src="`https://openweathermap.org/img/wn/${weather.weather[0]?.icon}@2x.png`"
        :alt="weather.weather[0]?.description"
      />
      <div>
        <div class="text-h4">{{ displayTemp(props.weather.main.temp) }}{{ tempUnit }}</div>
        <div class="text-caption">Feels like {{ displayTemp(props.weather.main.feels_like) }}{{ tempUnit }}</div>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <WeatherDetails
        :humidity="weather.main.humidity"
        :wind-speed="weather.wind.speed"
        :unit="unit"
      />
    </q-card-section>
  </q-card>
</template>
