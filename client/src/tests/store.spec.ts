import Login from "@/components/Login.vue";
import { expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Store from "../pages/Store.vue";
import { useAppStore } from "@/stores/app.js";
import routes from "../router/router.js";

const vuetify = createVuetify({
  components,
  directives,
})

// example test format
test("temp test", () => {

    expect (1+1).toBe(2)
}) 

test("VHT-1 View Household", () => {
    const wrapper = mount(Store, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                }),
                [vuetify],
                routes
            ],
        },

    })

    const store = useAppStore()
    let test = wrapper.vm.deleteDialogOpen


expect(wrapper.text()).toContain(wrapper.vm.propsList[1].name)

})

test("Login renders correctly", () => {
    // the wrapper creates a mock component that you can test with
    // I think this is all the same for every test besides the component name
    const wrapper = mount(Store, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})

wrapper.vm.assignDialogOpen
})

test("Dashboard renders correctly", () => {
    const wrapper = mount(Store, {
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
                                ],
                                chores: [
                                    {
                                        id: 1,
                                        name: "test name",
                                        description: "test description",
                                        difficulty: 10,
                                        location: "Kitchen",
                                        estimatedTime: 20,
                                        dueDate: new Date('2025-12-25'),
                                        repeat: false,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: 2,
                                        name: "test name result",
                                        description: "test description result",
                                        difficulty: 9,
                                        location: "Living Room",
                                        estimatedTime: 30,
                                        dueDate: new Date('2025-12-25'),
                                        repeat: false,
                                        householdId: 1,
                                        assigneeId: null,
                                    }
                                ]
                            },
                        },
                    },
                }),
                [vuetify],
                routes,
            ],
        }
    })

    wrapper.vm.propsList = []

    expect(wrapper.text()).toContain('Unassigned Chores')
})


