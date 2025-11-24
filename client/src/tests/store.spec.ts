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

vi.stubGlobal('visualViewport', new EventTarget())

// example test format
test("temp test", () => {

    expect (1+1).toBe(2)
}) 

test("ST-3 and ST-4 - Store renders correctly", async () => {
    const wrapper = mount(Store, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 6,
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

    //TODO: remove once Fetching owned props is complete
    wrapper.vm.ownedProps = [{id: 1}]

    //flushPromises wouldn't work for some reason so I need to wait for a state to change at the end of onMounted manually
    while(!wrapper.vm.mounted) {
        await new Promise(resolve => setTimeout(resolve, 50))
    }

    expect(wrapper.text()).toContain('Store')

    expect(wrapper.text()).toContain("Equipped")

    expect(wrapper.text()).toContain("pts")
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
                                id: 6,
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
test("ST-1 and ST-5 - buyProps purchases correctly when user can afford the prop", async () => {
    const wrapper = mount(Store, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 6,
                                householdId: 1,
                                role: "leader",
                                totalPoints: 70,
                                currentPoints: 70,
                            },
                            household: {
                                users: [
                                    {
                                        id: 4,
                                        name: "test",
                                        role: "member",
                                        totalPoints: 70,
                                        currentPoints: 70,
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

    let result = await wrapper.vm.buyProp(store.allProps.find((prop) => prop.id == 10))

    expect(result).toBe(true)
    expect(wrapper.vm.ownedProps.some((prop) => prop.id == 10)).toBe(true)

    //TODO: add checks that involve something the database updated

    //TODO: check that the users current points were updated

    //TODO: reset the users to not have prop with id == 10
})

test("ST-2 - buyProps purchases correctly when user can't afford the prop", async () => {
    const wrapper = mount(Store, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 6,
                                householdId: 1,
                                role: "leader",
                            },
                            household: {
                                users: [
                                    {
                                        id: 4,
                                        name: "test",
                                        role: "member",
                                        totalPoints: 70,
                                        currentPoints: 70,
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

    await wrapper.vm.buyProp(store.allProps.find((prop) => prop.id == 9))

    expect(wrapper.vm.tooExpensiveDialogOpen).toBe(true)
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
                                id: 6,
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
    expect(store.avatars.find((avatar) => avatar.userId == 6).hat).toBe(store.allProps.find((prop) => prop.id == 8).url)

    //TODO: add checks that involve something the database updated

    //TODO: reset the users equiped avatar to have the hat with id == 2
})

//isEquipped
test("NOFT - isEquipped returns correctly", () => {
    const wrapper = mount(Store, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 6,
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
                                    userId: 6,
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

//v-models and buttons
test("NOFT - tooExpensiveDialog v-model works correctly", async () => {
    const wrapper = mount(Store, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 6,
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
                                    userId: 6,
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
            stubs: {
                VDialog: {
                    name: "VDialog",
                    template: '<div class="v-dialog-stub"><slot /></div>',
                    props: ['modelValue'],
                }
            },
        }
    })

    wrapper.vm.tooExpensiveDialogOpen = true;

    await nextTick()

    const dialog = wrapper.findComponent('[data-testid="tooExpensiveDialog"]')

    await dialog.setValue(false)

    await nextTick()

    expect(wrapper.vm.tooExpensiveDialogOpen).toBe(false);
})

test("NOFT - test cancelButton", async () => {
    const wrapper = mount(Store, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 6,
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
                                    userId: 6,
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
            stubs: {
                VDialog: {
                    name: "VDialog",
                    template: '<div class="v-dialog-stub"><slot /></div>',
                    props: ['modelValue'],
                }
            },
        }
    })

    wrapper.vm.tooExpensiveDialogOpen = true;

    await nextTick()

    await wrapper.find('#cancelButton').trigger("click")
    expect(wrapper.vm.tooExpensiveDialogOpen).toBe(false);
})

test("NOFT - test buyButton", async () => {
    const wrapper = mount(Store, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 6,
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
                                    userId: 6,
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
            stubs: {
                VDialog: {
                    name: "VDialog",
                    template: '<div class="v-dialog-stub"><slot /></div>',
                    props: ['modelValue'],
                }
            },
        }
    })

    //flushPromises wouldn't work for some reason so I need to wait for a state to change at the end of onMounted manually
    while(!wrapper.vm.mounted) {
        await new Promise(resolve => setTimeout(resolve, 50))
    }

    const spy = vi.spyOn(wrapper.vm, 'buyProp').mockImplementation((prop) => true);

    await wrapper.find('#buyButton').trigger("click")
    expect(spy).toHaveBeenCalled();
})

test("NOFT - test equipButton", async () => {
    const wrapper = mount(Store, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 6,
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
                                    userId: 6,
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
            stubs: {
                VDialog: {
                    name: "VDialog",
                    template: '<div class="v-dialog-stub"><slot /></div>',
                    props: ['modelValue'],
                }
            },
        }
    })

    //TODO: remove once Fetching owned props is complete
    wrapper.vm.ownedProps = [{id: 1}]

    //flushPromises wouldn't work for some reason so I need to wait for a state to change at the end of onMounted manually
    while(!wrapper.vm.mounted) {
        await new Promise(resolve => setTimeout(resolve, 50))
    }

    const spy = vi.spyOn(wrapper.vm, 'equipProp').mockImplementation((prop) => true);

    await wrapper.find('#equipButton').trigger("click")
    expect(spy).toHaveBeenCalled();
})