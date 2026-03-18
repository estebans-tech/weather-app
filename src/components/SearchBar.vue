<script setup lang="ts">
import { ref } from 'vue'

// Local search query - will be emitted to parent when ready
const query = ref('')
</script>

<template>
  <q-input
    v-model="query"
    outlined
    placeholder="Search for a city..."
    debounce="300"
  >
    <template #prepend>
      <q-icon name="search" />
    </template>
    <template #append>
      <q-icon
        v-if="query"
        name="close"
        class="cursor-pointer"
        @click="query = ''"
      />
    </template>
  </q-input>
</template>

