<script setup lang="ts">
// Components
import SearchBar from 'components/SearchBar.vue'
import UnitToggle from 'components/UnitToggle.vue'
import WeatherCard from 'components/WeatherCard.vue'

// Composable
import { useWeather } from 'src/composables/useWeather'

const { weather, unit, isLoading, error, search, refresh } = useWeather()
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
        <SearchBar class="col" @search="search" />
        <UnitToggle v-model="unit" class="q-ml-sm" />
      </div>

      <div v-if="isLoading" class="text-center q-mt-xl">
        <q-spinner size="40px" />
      </div>

      <div v-else-if="error" class="text-negative text-center q-mt-md">
        {{ error }}
      </div>

      <div v-else-if="!weather" class="text-center text-grey q-mt-xl">
        Search for a city to see the weather
      </div>

      <WeatherCard
        v-else
        :weather="weather"
        :unit="unit"
        @refresh="refresh"
      />
    </div>
  </q-page>
</template>

