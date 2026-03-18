<script setup lang="ts">
// Utils
import { roundWind } from 'src/utils/convertUnits'

// Types
import type { WeatherUnit } from 'src/types/units'

const props = defineProps<{
  humidity: number
  windSpeed: number
  unit: WeatherUnit
}>()
</script>

<template>
  <div class="row q-gutter-md">
    <div>💧 {{ props.humidity }}%</div>
    <div>💨 {{ roundWind(windSpeed) }} {{ unit === 'metric' ? 'm/s' : 'mph' }}</div>
  </div>
</template>
