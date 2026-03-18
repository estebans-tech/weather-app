<script setup lang="ts">
import { ref } from 'vue'
import type { WeatherUnit } from 'src/types/units'

const unit = ref<WeatherUnit>('metric')
</script>

<template>
  <q-btn-toggle
    v-model="unit"
    outlined
    rounded
    toggle-color="primary"
    color="white"
    text-color="primary"
    :options="[
      { label: '°C', value: 'metric' },
      { label: '°F', value: 'imperial' },
    ]"
  />
</template>
