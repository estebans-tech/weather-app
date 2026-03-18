<script setup lang="ts">
// Components
import WeatherDetails from 'components/WeatherDetails.vue'

// Utils
import { roundTemp } from 'src/utils/convertUnits'

// Types
import type { CurrentWeather } from 'src/types/weather'
import type { WeatherUnit } from 'src/types/units'

defineProps<{
  weather: CurrentWeather
  unit: WeatherUnit
}>()

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
        <div class="text-h4">
          {{ roundTemp(weather.main.temp) }}{{ unit === 'metric' ? '°C' : '°F' }}
        </div>
        <div class="text-caption">
          Feels like {{ roundTemp(weather.main.feels_like) }}{{ unit === 'metric' ? '°C' : '°F' }}
        </div>
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
