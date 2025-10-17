// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    user: {
      name: "",
      email: "",
      difficulty: 0,
      householdId: 0,
      role: "member",
      totalPoints: 0,
    },
    loggedIn: false,
    profileView: false,
  }),
})
