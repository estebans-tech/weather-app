<script setup lang="ts">
import { ref, watch } from 'vue'
import { SEARCH_MIN_CHARS, SEARCH_DEBOUNCE_MS } from 'src/constants/search'

const emit = defineEmits<{
  search: [query: string]
}>()

const query = ref('')

// Debounce is handled by q-input's built-in debounce prop
watch(query, (val) => {
  if (val.length >= SEARCH_MIN_CHARS) {
    emit('search', val)
  }
})
</script>
<template>
  <q-input
    v-model="query"
    outlined
    placeholder="Search for a city..."
    :debounce="SEARCH_DEBOUNCE_MS"
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

