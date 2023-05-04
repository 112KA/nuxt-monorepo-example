export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
        insjected: () => 'my injected function',
    },
  }
})