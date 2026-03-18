<script setup lang="ts">
import SearchBar from 'components/SearchBar.vue'
import UnitToggle from 'components/UnitToggle.vue'

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
        <UnitToggle class="q-ml-sm" />
      </div>
      <!-- WeatherCard will go here -->
    </div>
  </q-page>
</template>

