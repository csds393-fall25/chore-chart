import Random from '../pages/Random.vue'
import { expect, test, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { useAppStore } from '@/stores/app.js';
import { createTestingPinia } from '@pinia/testing'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { useAppStore } from "@/stores/app.js";
import routesList from '../router/routes.js'
import routes from '../router/router.js'
import FetchService from '../FetchService.js'
import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'


// need this at the top
const vuetify = createVuetify({
    components,
    directives,
})

vi.stubGlobal('visualViewport', new EventTarget())

test("NOFT - Random renders correctly", () => {
    const wrapper = mount(Random, {
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
                                        assigneeId: 4,
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

    const store = useAppStore()

    expect(wrapper.text()).toContain('Random Assignment')
})

test("NOFT - userName returns correctly", () => {
    const wrapper = mount(Random, {
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
                                        assigneeId: 4,
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

    const store = useAppStore()

    expect(wrapper.vm.userName(4)).toBe('test')
})

test("RCAT-3 - cancel reroutes correctly", async () => {

    let router = createRouter({
        history: createWebHistory(),
        routes: routesList,
    })

    router.push('/random')
    await router.isReady()

    const spy = vi.spyOn(router, 'push');

    const wrapper = mount(Random, {
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
                [router],
            ],
        }
    })

    wrapper.vm.cancel()

    expect(spy).toHaveBeenCalledWith({ name: 'home' })
})

test("RCAT-1, RCAT-2 and RCAT-4 - randomize lists the chores correctly", async () => {
    const wrapper = mount(Random, {
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
                                        difficulty: 5,
                                        maxChoreTime: 20
                                    },
                                    {
                                        id: 6,
                                        name: "test2",
                                        role: "member",
                                        difficulty: 10,
                                        maxChoreTime: 5
                                    },
                                    {
                                        id: 8,
                                        name: "test3",
                                        role: "member",
                                        difficulty: 1,
                                        maxChoreTime: 60
                                    }
                                ],
                                chores: [
                                    {
                                        id: 1,
                                        name: "test name",
                                        difficulty: 10,
                                        estimatedTime: 20,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: 2,
                                        name: "test name",
                                        difficulty: 4,
                                        estimatedTime: 15,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: 3,
                                        name: "test name",
                                        difficulty: 3,
                                        estimatedTime: 10,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: 4,
                                        name: "test name multiple",
                                        difficulty: 1,
                                        estimatedTime: 20,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: 5,
                                        name: "test name multiple",
                                        difficulty: 1,
                                        estimatedTime: 20,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: 6,
                                        name: "test name multiple",
                                        difficulty: 1,
                                        estimatedTime: 20,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: 7,
                                        name: "test name",
                                        difficulty: 1,
                                        estimatedTime: 15,
                                        householdId: 1,
                                        assigneeId: 8,
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

    wrapper.vm.randomize()

    expect(wrapper.vm.assignedChores).toContainEqual({
        id: 2,
        name: "test name",
        difficulty: 4,
        estimatedTime: 15,
        assigneeId: 4,
    })
    expect(wrapper.vm.unassignedChores).toContainEqual({
        id: 1,
        name: "test name",
        difficulty: 10,
        estimatedTime: 20,
        assigneeId: null,
    })
    expect(wrapper.vm.unassignedChores).toContainEqual({
        id: 3,
        name: "test name",
        difficulty: 3,
        estimatedTime: 10,
        assigneeId: null,
    })
    expect(wrapper.vm.assignedChores.filter((chore) => chore.name == 'test name multiple').length).toBe(2)

    expect(wrapper.vm.unassignedChores.filter((chore) => chore.name == 'test name multiple').length).toBe(1)

    expect(wrapper.vm.assignedChores.length).toBe(3)
    expect(wrapper.vm.unassignedChores.length).toBe(3)
})

test("OMT-1 - randomize goes past maximum time if user has selected to override", async () => {
    const wrapper = mount(Random, {
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
                                        difficulty: 5,
                                        maxChoreTime: 20
                                    },
                                    {
                                        id: 6,
                                        name: "test2",
                                        role: "member",
                                        difficulty: 9,
                                        maxChoreTime: 5
                                    },
                                    {
                                        id: 8,
                                        name: "test3",
                                        role: "member",
                                        difficulty: 1,
                                        maxChoreTime: 60
                                    }
                                ],
                                chores: [
                                    {
                                        id: 1,
                                        name: "test name too difficult for anyone",
                                        difficulty: 10,
                                        estimatedTime: 20,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: 2,
                                        name: "test name",
                                        difficulty: 4,
                                        estimatedTime: 15,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: 3,
                                        name: "test name",
                                        difficulty: 3,
                                        estimatedTime: 10,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: 4,
                                        name: "test name multiple",
                                        difficulty: 1,
                                        estimatedTime: 20,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: 5,
                                        name: "test name multiple",
                                        difficulty: 1,
                                        estimatedTime: 20,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: 6,
                                        name: "test name multiple",
                                        difficulty: 1,
                                        estimatedTime: 20,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: 7,
                                        name: "test name",
                                        difficulty: 1,
                                        estimatedTime: 15,
                                        householdId: 1,
                                        assigneeId: 8,
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

    wrapper.vm.overrideMaxTime = true

    wrapper.vm.randomize()

    expect(wrapper.vm.assignedChores).toContainEqual({
        id: 2,
        name: "test name",
        difficulty: 4,
        estimatedTime: 15,
        assigneeId: 4,
    })
    expect(wrapper.vm.unassignedChores).toContainEqual({
        id: 1,
        name: "test name too difficult for anyone",
        difficulty: 10,
        estimatedTime: 20,
        assigneeId: null,
    })
    expect(wrapper.vm.assignedChores).toContainEqual({
        id: 3,
        name: "test name",
        difficulty: 3,
        estimatedTime: 10,
        assigneeId: expect.any(Number),
    })
    expect(wrapper.vm.assignedChores.filter((chore) => chore.name == 'test name multiple').length).toBe(3)

    expect(wrapper.vm.unassignedChores.filter((chore) => chore.name == 'test name multiple').length).toBe(0)

    expect(wrapper.vm.assignedChores.length).toBe(5)
    expect(wrapper.vm.unassignedChores.length).toBe(1)
})

test("RCAT-1 - assignChores assigns correctly", async () => {

    let router = createRouter({
        history: createWebHistory(),
        routes: routesList,
    })

    router.push('/random')
    await router.isReady()

    const spy = vi.spyOn(router, 'push');

    const wrapper = mount(Random, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 4,
                                householdId: 3,
                                role: "leader",
                                name: "test"
                            },
                            household: {
                                users: [
                                    {
                                        id: 4,
                                        name: "test",
                                        role: "member",
                                        difficulty: 5,
                                        maxChoreTime: 20
                                    }
                                ],
                                chores: [
                                    {
                                        id: 2,
                                        name: "test name",
                                        difficulty: 1,
                                        estimatedTime: 1,
                                        householdId: 3,
                                        assigneeId: null,
                                    },
                                    {
                                        id: 3,
                                        name: "test name",
                                        difficulty: 1,
                                        estimatedTime: 1,
                                        householdId: 3,
                                        assigneeId: null,
                                    },
                                ]
                            },
                        },
                    },
                }),
                [vuetify],
                [router],
            ],
        }
    })

    //flushPromises wouldn't work for some reason so I need to wait for a state to change at the end of onMounted manually
    while(!wrapper.vm.mounted) {
        await new Promise(resolve => setTimeout(resolve, 50))
    }

    wrapper.vm.assignedChores = [
        {
            id: 2,
            name: "test name",
            difficulty: 1,
            estimatedTime: 1,
            householdId: 3,
            assigneeId: 4,
        },
        {
            id: 3,
            name: "test name",
            difficulty: 1,
            estimatedTime: 1,
            householdId: 3,
            assigneeId: 4,
        },
    ];

    const store = useAppStore()

    await wrapper.vm.assignChores()

    expect(store.household.chores).toContainEqual({
        id: 2,
        name: "Unit test",
        description: "for random assignment unit tests",
        difficulty: 1,
        location: "Kitchen",
        dueDate: "2025-12-30T05:00:00.000Z",
        repeat: false,
        estimatedTime: 1,
        householdId: 3,
        assigneeId: 4,
    })
    expect(store.household.chores).toContainEqual({
        id: 3,
        name: "Unit test",
        description: "for random assignment unit tests",
        difficulty: 1,
        location: "Kitchen",
        dueDate: "2025-12-30T05:00:00.000Z",
        repeat: false,
        estimatedTime: 1,
        householdId: 3,
        assigneeId: 4,
    })

    expect(spy).toHaveBeenCalledWith({ name: 'home' })

    await FetchService.editChore(2, {assigneeId: null})
    await FetchService.editChore(3, {assigneeId: null})
})

test("RCAT-3 - test cancelButton", async () => {

    const wrapper = mount(Random, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 4,
                                householdId: 3,
                                role: "leader",
                                name: "test"
                            },
                            household: {
                                users: [
                                    {
                                        id: 4,
                                        name: "test",
                                        role: "member",
                                        difficulty: 5,
                                        maxChoreTime: 20
                                    }
                                ],
                                chores: [
                                    {
                                        id: 2,
                                        name: "test name",
                                        difficulty: 1,
                                        estimatedTime: 1,
                                        householdId: 3,
                                        assigneeId: null,
                                    },
                                    {
                                        id: 3,
                                        name: "test name",
                                        difficulty: 1,
                                        estimatedTime: 1,
                                        householdId: 3,
                                        assigneeId: null,
                                    },
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

    //flushPromises wouldn't work for some reason so I need to wait for a state to change at the end of onMounted manually
    while(!wrapper.vm.mounted) {
        await new Promise(resolve => setTimeout(resolve, 50))
    }

    const spy = vi.spyOn(wrapper.vm, 'cancel')

    await wrapper.find('#cancelButton').trigger("click")

    expect(spy).toHaveBeenCalled()
})

test("RCAT-2 - test randomizeButton", async () => {

    const wrapper = mount(Random, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 4,
                                householdId: 3,
                                role: "leader",
                                name: "test"
                            },
                            household: {
                                users: [
                                    {
                                        id: 4,
                                        name: "test",
                                        role: "member",
                                        difficulty: 5,
                                        maxChoreTime: 20
                                    }
                                ],
                                chores: [
                                    {
                                        id: 2,
                                        name: "test name",
                                        difficulty: 1,
                                        estimatedTime: 1,
                                        householdId: 3,
                                        assigneeId: null,
                                    },
                                    {
                                        id: 3,
                                        name: "test name",
                                        difficulty: 1,
                                        estimatedTime: 1,
                                        householdId: 3,
                                        assigneeId: null,
                                    },
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

    //flushPromises wouldn't work for some reason so I need to wait for a state to change at the end of onMounted manually
    while(!wrapper.vm.mounted) {
        await new Promise(resolve => setTimeout(resolve, 50))
    }

    const spy = vi.spyOn(wrapper.vm, 'randomize')

    await wrapper.find('#randomizeButton').trigger("click")

    expect(spy).toHaveBeenCalled()
})

test("RCAT-1 - test assignButton", async () => {

    const wrapper = mount(Random, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 4,
                                householdId: 3,
                                role: "leader",
                                name: "test"
                            },
                            household: {
                                users: [
                                    {
                                        id: 4,
                                        name: "test",
                                        role: "member",
                                        difficulty: 5,
                                        maxChoreTime: 20
                                    }
                                ],
                                chores: [
                                    {
                                        id: 2,
                                        name: "test name",
                                        difficulty: 1,
                                        estimatedTime: 1,
                                        householdId: 3,
                                        assigneeId: null,
                                    },
                                    {
                                        id: 3,
                                        name: "test name",
                                        difficulty: 1,
                                        estimatedTime: 1,
                                        householdId: 3,
                                        assigneeId: null,
                                    },
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

    //flushPromises wouldn't work for some reason so I need to wait for a state to change at the end of onMounted manually
    while(!wrapper.vm.mounted) {
        await new Promise(resolve => setTimeout(resolve, 50))
    }

    const fetchSpy = vi.spyOn(wrapper.vm.FetchService, 'editChore').mockImplementation((id, chore) => chore)

    const spy = vi.spyOn(wrapper.vm, 'assignChores')

    await wrapper.find('#assignChoresButton').trigger("click")

    expect(spy).toHaveBeenCalled()
})

test("OMT-1 - test overrideMaxTimeCheckbox", async () => {

    const wrapper = mount(Random, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 4,
                                householdId: 3,
                                role: "leader",
                                name: "test"
                            },
                            household: {
                                users: [
                                    {
                                        id: 4,
                                        name: "test",
                                        role: "member",
                                        difficulty: 5,
                                        maxChoreTime: 20
                                    }
                                ],
                                chores: [
                                    {
                                        id: 2,
                                        name: "test name",
                                        difficulty: 1,
                                        estimatedTime: 1,
                                        householdId: 3,
                                        assigneeId: null,
                                    },
                                    {
                                        id: 3,
                                        name: "test name",
                                        difficulty: 1,
                                        estimatedTime: 1,
                                        householdId: 3,
                                        assigneeId: null,
                                    },
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

    //flushPromises wouldn't work for some reason so I need to wait for a state to change at the end of onMounted manually
    while(!wrapper.vm.mounted) {
        await new Promise(resolve => setTimeout(resolve, 50))
    }

    const checkbox = await wrapper.find('#overrideMaxTimeCheckbox')

    checkbox.setValue(true)

    expect(wrapper.vm.overrideMaxTime).toBe(true)
})

test("NOFT - reroutes correctly when a member tries to access", async () => {

    let router = createRouter({
        history: createWebHistory(),
        routes: routesList,
    })

    router.push('/random')
    await router.isReady()

    const spy = vi.spyOn(router, 'push');

    const wrapper = mount(Random, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 4,
                                householdId: 3,
                                role: "member",
                                name: "test"
                            },
                            household: {
                                users: [
                                    {
                                        id: 4,
                                        name: "test",
                                        role: "member",
                                        difficulty: 5,
                                        maxChoreTime: 20
                                    }
                                ],
                                chores: [
                                    {
                                        id: 2,
                                        name: "test name",
                                        difficulty: 1,
                                        estimatedTime: 1,
                                        householdId: 3,
                                        assigneeId: null,
                                    },
                                    {
                                        id: 3,
                                        name: "test name",
                                        difficulty: 1,
                                        estimatedTime: 1,
                                        householdId: 3,
                                        assigneeId: null,
                                    },
                                ]
                            },
                        },
                    },
                }),
                [vuetify],
                [router],
            ],
        }
    })

    expect(spy).toHaveBeenCalledWith({name: 'home'})
})