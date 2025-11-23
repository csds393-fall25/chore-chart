import { expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Store from "../pages/Store.vue";
import { useAppStore } from "@/stores/app.js";
import routes from "../router/router.js";
import routesList from "../router/routes.js"
import { nextTick } from 'vue'

const vuetify = createVuetify({
  components,
  directives,
})

// example test format
test("temp test", () => {

    expect (1+1).toBe(2)
}) 

test("Store renders correctly", () => {
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

    expect(wrapper.text()).toContain('Store')
})

//isOwned
test("ST-3 - isOwned returns correctly", () => {
    const wrapper = mount(Store, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 1,
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

    //TODO: Remove this once ownedProps are able to be populated correctly
    wrapper.vm.ownedProps = [{id: 7, name: "YellowFace", type: "skinTone"}]

    expect(wrapper.vm.isOwned({id: 7, name: "YellowFace", type: "skinTone"})).toBe(true)
    expect(wrapper.vm.isOwned({id: -1, name: "FakeProp"})).toBe(false)
})

//buyProp
test("ST-1 and ST-5 - buyProps purchases correctly", async () => {
    const wrapper = mount(Store, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 1,
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
                            avatars: []
                        },
                    },
                }),
                [vuetify],
                routes,
            ],
        }
    })

    const store = useAppStore()

    //flushPromises wouldn't work for some reason so I need to wait for a state to change at the end of onMounted manually
    while(!wrapper.vm.mounted) {
        await new Promise(resolve => setTimeout(resolve, 50))
    }

    await wrapper.vm.buyProp(store.allProps.find((prop) => prop.id == 10))


    expect(wrapper.vm.ownedProps.some((prop) => prop.id == 10)).toBe(true)

    //TODO: add checks that involve something the database updated

    //TODO: reset the users to not have prop with id == 10
})

//equipProp
test("ACT-1 and ACT-2 - equipProp equips correctly", async () => {
    const wrapper = mount(Store, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 1,
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
                            avatars: []
                        },
                    },
                }),
                [vuetify],
                routes,
            ],
        }
    })

    const store = useAppStore()

    //flushPromises wouldn't work for some reason so I need to wait for a state to change at the end of onMounted manually
    while(!wrapper.vm.mounted) {
        await new Promise(resolve => setTimeout(resolve, 50))
    }

    await wrapper.vm.equipProp(store.allProps.find((prop) => prop.id == 8))


    expect(wrapper.vm.usersAvatar.hat).toEqual(store.allProps.find((prop) => prop.id == 8).url)
    expect(store.avatars.find((avatar) => avatar.userId == 1).hat).toBe(store.allProps.find((prop) => prop.id == 8).url)

    //TODO: add checks that involve something the database updated

    //TODO: reset the users equiped avatar to have the hat with id == 2
})

//isEquipped
test("isEquipped returns correctly", () => {
    const wrapper = mount(Store, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 1,
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
                            avatars: [
                                {
                                    userId: 1,
                                    skinTone: "skinToneURL",
                                    hat: "hatURL",
                                    hair: "hairURL",
                                    shirt: "shirtURL",
                                    background: "backgroundURL",
                                    handProp: "handPropURL"
                                }
                            ]
                        },
                    },
                }),
                [vuetify],
                routes,
            ],
        }
    })

    expect(wrapper.vm.isEquipped({id: 7, name: "YellowFace", type: "skinTone", url: "skinToneURL"})).toBe(true)
    expect(wrapper.vm.isEquipped({id: -1, name: "FakeProp", type: "skinTone", url: "fakeURL"})).toBe(false)
})