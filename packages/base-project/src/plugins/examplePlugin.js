import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      insjected: () => 'my injected function',
    },
  }
})
