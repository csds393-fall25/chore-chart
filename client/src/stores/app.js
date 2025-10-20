// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    user: {
      id: 0,
      name: "",
      email: "",
      difficulty: 0,
      householdId: 0,
      role: "member",
      totalPoints: 0,
      maxChoreTime: 0,
    },
    loggedIn: false,
    profileView: false,
    household: {
      id: -1,
    }
  }),
})
