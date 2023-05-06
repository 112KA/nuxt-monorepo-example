import { defineStore } from 'pinia'

interface State {
  exampleValue: string
}

export const useApplicationStore = defineStore('application', {
  // convert to a function
  state: (): State => ({
    exampleValue: 'example pinia value',
  }),
})
