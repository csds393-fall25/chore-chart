// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    user: {
      name: "",
      points: 0,
    },
    loggedIn: true,
  }),
})
