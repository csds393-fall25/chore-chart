import { expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { useAppStore } from "@/stores/app.js";
import Leaderboard from "@/components/leaderboard.vue";
import { nextTick } from 'vue'
const vuetify = createVuetify({
  components,
  directives,
})

// example test format
test("temp test", () => {

    expect (1+1).toBe(2)
}) 

test("LT-1 View a leaderboard in correct order. ", () => {
    const wrapper = mount(Leaderboard, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 8,
                                householdId: 4,
                                role: "leader",
                            },
                            household: {
                                users: [
                                    {
                                        id: 8,
                                        name: "xx",
                                        totalPoints: 20
                                    },
                                 {
                                id: 5,
                                name: "yy",
                                totalPoints: 10
                            },
                                ],
                            },
                        },
                    },
                }),
                [vuetify],
            
            ],
        },
       
    })
    expect(wrapper.text()).toContain(wrapper.vm.members[0].name)
    expect(wrapper.text()).toContain(wrapper.vm.members[1].name)
    expect(wrapper.vm.members[0].name).toBe("xx")
    expect(wrapper.vm.members[1].name).toBe("yy")
})


test("LT-2 Users change spots on the leaderboard. ", async () => {
    const wrapper = mount(Leaderboard, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 8,
                                householdId: 4,
                                role: "leader",
                            },
                            household: {
                                users: [
                                    {
                                        id: 8,
                                        name: "xx",
                                        totalPoints: 20
                                    },
                                 {
                                id: 5,
                                name: "yy",
                                totalPoints: 10
                            },
                                ],
                            },
                        },
                    },
                }),
                [vuetify],
            
            ],
        },
       
    })

    const store = useAppStore()
    expect(wrapper.vm.members[0].name).toBe("xx")
    expect(wrapper.vm.members[1].name).toBe("yy")
    store.household.users[1].totalPoints = 30
    console.log(store.household.users[1].name)
    await nextTick()
    expect(wrapper.vm.members[1].name).toBe("xx") //yy
    expect(wrapper.vm.members[0].name).toBe("yy") //xx
})