<script setup lang="ts">
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
    <div>💨 {{ props.windSpeed }} {{ props.unit === 'metric' ? 'm/s' : 'mph' }}</div>
  </div>
</template>
