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
      avatar: {
        skinTone: "",
        hat: "",
        hair: "",
        shirt: "",
        background: "",
        handProp: ""
      }
    },
    loggedIn: false,
    household: {
      id: -1,
      joinCode: 0,
    },
    avatars: []
  }),
})
