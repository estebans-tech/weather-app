<script setup lang="ts">
// Composables
import { useUnits } from 'src/composables/useUnits'
// Types
import type { WeatherUnit } from 'src/types/units'

const props = defineProps<{
  humidity: number
  windSpeed: number
  unit: WeatherUnit
}>()

const { displayWind, windUnit } = useUnits(() => props.unit)
</script>

<template>
  <div class="row q-gutter-md">
    <div>💧 {{ props.humidity }}%</div>
    <div>💨 {{ displayWind(props.windSpeed) }} {{ windUnit }}</div>
  </div>
</template>
