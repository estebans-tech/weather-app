<script setup lang="ts">
// Components
import SearchBar from 'components/SearchBar.vue'
import UnitToggle from 'components/UnitToggle.vue'
import WeatherCard from 'components/WeatherCard.vue'
import ForecastList from 'components/ForecastList.vue'

// Composable
import { useWeather } from 'src/composables/useWeather'
import { useForecast } from 'src/composables/useForecast'

const { weather, location, unit, isLoading, error, search, refresh } = useWeather()
const { dailyForecasts, loadForecast } = useForecast()

// Load both weather and forecast when search is triggered
const handleSearch = async (city: string) => {
  await search(city)
  if (location.value) {
    await loadForecast(location.value.lat, location.value.lon, unit.value)
  }
}

const handleClear = () => {
  weather.value = undefined
  dailyForecasts.value = []
}

const handleRefresh = async () => {
  await refresh()
  if (location.value) {
    await loadForecast(location.value.lat, location.value.lon, unit.value)
  }
}
</script>
<template>
  <q-page class="column items-center q-pa-md">
      <div class="weather-app">
        <div class="row items-center q-mb-md">
          <SearchBar class="col" @search="handleSearch" @clear="handleClear" />
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
        <template v-else>
          <WeatherCard :weather="weather" :unit="unit" @refresh="handleRefresh" />
          <ForecastList v-if="dailyForecasts.length" :forecasts="dailyForecasts" :unit="unit" />
        </template>
      </div>
  </q-page>
</template>
<style scoped lang="scss">
.weather-app {
  width: 100%;
  max-width: 600px;
}
</style>


