<template>
  <div>
    <h1>a index page</h1>
    <BaseComponentExample />
    <p><img src="/image.png" alt="" /></p>
    <p>{{ exampleValue }}</p>
    <NuxtLink to="/second/">second page</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { useApplicationStore } from 'base-project/stores/index'
const applicationStore = useApplicationStore(),
  exampleValue = computed(() => applicationStore.exampleValue)
</script>
