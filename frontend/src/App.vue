<script setup lang="ts">
import { ref } from 'vue'

const randomNumber = ref<number>()
const err = ref<string>()
const loading = ref(false)

// useFetch at home:
function fetchRandomNumber() {
  if (loading.value) return
  loading.value = true

  fetch('/api/randomNumber')
    .then((res) => res.json())
    .then((data) => {
      randomNumber.value = data.result
      err.value = undefined
    })
    .catch((e) => {
      err.value = e.message || 'An error occurred'
      randomNumber.value = undefined
    })
    .finally(() => (loading.value = false))
}
</script>

<template>
  <h1>Sync CI/CD test</h1>

  <button @click="fetchRandomNumber" :disabled="loading">
    {{ loading ? 'Loading...' : 'Fetch Big Random Number' }}
  </button>

  <div v-if="randomNumber !== undefined">
    <strong>Big Random Number:</strong> {{ randomNumber }}
  </div>

  <div v-if="err" style="color: red"><strong>Error:</strong> {{ err }}</div>
</template>

<style scoped>
* {
  font-family: monospace;
}
</style>
