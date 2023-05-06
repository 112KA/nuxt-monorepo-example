import { defineNuxtRouteMiddleware } from '#app'

export default defineNuxtRouteMiddleware((to, from) => {
  console.log({ to, from })
})
