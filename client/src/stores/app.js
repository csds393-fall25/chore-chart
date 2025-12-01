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
      currentPoints: 0,
      maxChoreTime: 0,
    },
    loggedIn: false,
    household: {
      id: -1,
      joinCode: 0,
      users: [],
    },
    bulletin:{
      items: [],

    },
    avatars: [],
    allProps: []
  }),
})
