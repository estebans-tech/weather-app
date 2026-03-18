<script setup lang="ts">
// Composables
import { useUnits } from 'src/composables/useUnits'
// Types
import type { ForecastItem } from 'src/types/weather'
import type { WeatherUnit } from 'src/types/units'

const props = defineProps<{
  forecasts: ForecastItem[]
  unit: WeatherUnit
}>()

const { displayTemp, tempUnit } = useUnits(() => props.unit)
</script>

<template>
  <div class="row justify-between q-mt-md">
    <q-card
      v-for="item in props.forecasts"
      :key="item.dt"
      flat
      bordered
      class="forecast-item text-center"
    >
      <q-card-section>
        <div class="text-caption">{{ item.dt_txt.slice(0, 10) }}</div>
        <img
          :src="`https://openweathermap.org/img/wn/${item.weather[0]?.icon}@2x.png`"
          :alt="item.weather[0]?.description"
          width="50"
        />
        <div class="text-subtitle1">{{ displayTemp(item.main.temp) }}{{ tempUnit }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped lang="scss">
.forecast-item {
  min-width: 90px;
}
</style>
