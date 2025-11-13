import Login from "@/components/Login.vue";
import { expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Household from "@/components/Household.vue";
import FetchService from "@/FetchService";
import ValidateLogin from "@/components/Login.vue"
import { useAppStore } from "@/stores/app.js";

const vuetify = createVuetify({
  components,
  directives,
})

// example test format
test("temp test", () => {

    expect (1+1).toBe(2)
}) 

test("VHT-1 View Household", () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 0,
                                householdId: 1,
                                role: "leader",
                            },
                            household: {
                                users: [
                                    {
                                        id: 4,
                                        name: "test",
                                        role: "member",
                                    },
                                 {
                                id: 482,
                                name: "test2",
                                householdId: 1,
                                role: "leader",
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

store.household = 1;

expect(wrapper.text()).toContain(wrapper.vm.members[0].name)
expect(wrapper.text()).toContain(wrapper.vm.members[1].name)

})