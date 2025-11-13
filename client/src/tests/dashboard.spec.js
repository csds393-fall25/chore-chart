import Dashboard from '../pages/Dashboard.vue'
import { expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
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

test("VACT-1 - Dashboard renders correctly", () => {
    const wrapper = mount(Dashboard, {
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

    expect(wrapper.text()).toContain('test name')
    expect(wrapper.text()).toContain('test name result')

    expect(wrapper.vm.choreList).toContain(store.household.chores[1])
    expect(wrapper.vm.choreList.length).toBe(1)

    expect(wrapper.vm.unassignedList).toContain(store.household.chores[0])
    expect(wrapper.vm.unassignedList.length).toBe(1)

    expect(wrapper.html()).toContain('v-list')
    expect(wrapper.html()).not.toContain('v-card')

    expect(wrapper.text()).toContain('Unassigned Chores')
})

test("VACT-2 - Dashboard renders tile view correctly", async () => {
    const wrapper = mount(Dashboard, {
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

    wrapper.vm.listMode = false

    await nextTick()

    const store = useAppStore()

    expect(wrapper.text()).toContain('test name')
    expect(wrapper.text()).toContain('test name result')

    expect(wrapper.vm.choreList).toContain(store.household.chores[1])
    expect(wrapper.vm.choreList.length).toBe(1)

    expect(wrapper.vm.unassignedList).toContain(store.household.chores[0])
    expect(wrapper.vm.unassignedList.length).toBe(1)

    expect(wrapper.html()).not.toContain('v-list')
    expect(wrapper.html()).toContain('v-card')

    expect(wrapper.text()).toContain('Unassigned Chores')
})

test("VACT-3 - Dashboard renders tile view correctly", async () => {
    const wrapper = mount(Dashboard, {
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

    wrapper.vm.listMode = false

    await nextTick()

    wrapper.vm.listMode = true

    await nextTick()

    const store = useAppStore()

    expect(wrapper.text()).toContain('test name')
    expect(wrapper.text()).toContain('test name result')

    expect(wrapper.vm.choreList).toContain(store.household.chores[1])
    expect(wrapper.vm.choreList.length).toBe(1)

    expect(wrapper.vm.unassignedList).toContain(store.household.chores[0])
    expect(wrapper.vm.unassignedList.length).toBe(1)

    expect(wrapper.html()).toContain('v-list')
    expect(wrapper.html()).not.toContain('v-card')

    expect(wrapper.text()).toContain('Unassigned Chores')
})

//changeView()
test("VACT-2 and VACT-3 - changeView updates the view mode", () => {
    const wrapper = mount(Dashboard, {
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

    expect(wrapper.vm.listMode).toBe(true);

    wrapper.vm.changeView();

    expect(wrapper.vm.listMode).toBe(false);

    wrapper.vm.changeView();

    expect(wrapper.vm.listMode).toBe(true);
})

//userInitials(userId)
test("NOFT - user initials returns the correct initials for the userId", () => {
    const wrapper = mount(Dashboard, {
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

    expect(wrapper.vm.userInitials(4)).toEqual("t");
    expect(wrapper.vm.userInitials(0)).toEqual("N/A");
})


//updateChore(choreId)
test("NOFT - updateChore reroutes correctly", async () => {

    let router = createRouter({
        history: createWebHistory(),
        routes: routesList,
    })

    router.push('/chore/1/edit')
    await router.isReady()

    const spy = vi.spyOn(router, 'push');

    const wrapper = mount(Dashboard, {
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

    wrapper.vm.updateChore(1)

    expect(spy).toHaveBeenCalledWith({ name: 'editChore', params: {id: 1}})
})

//promptDelete(chore)
test("NOFT - promptDelete opens the delete dialog for the correct chore", () => {
    const wrapper = mount(Dashboard, {
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

    const store = useAppStore()

    wrapper.vm.promptDelete(store.household.chores[0]);

    expect(wrapper.vm.deleteDialogOpen).toBe(true)
    expect(wrapper.vm.deleteDialogChore).toEqual(store.household.chores[0])
})

// //cancelDelete()
test("CDT-2 - cancelDelete closes the delete dialog", () => {
    const wrapper = mount(Dashboard, {
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

    const store = useAppStore()

    wrapper.vm.promptDelete(store.household.chores[0]);

    expect(wrapper.vm.deleteDialogOpen).toBe(true)
    expect(wrapper.vm.deleteDialogChore).toEqual(store.household.chores[0])

    wrapper.vm.cancelDelete();

    expect(wrapper.vm.deleteDialogOpen).toBe(false)
    expect(wrapper.vm.deleteDialogChore).toBeNull()
})

//assignToSelfPrompt(chore)
test("NOFT - assignToSelfPrompt opens the assign dialog for the correct chore", () => {
    const wrapper = mount(Dashboard, {
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

    const store = useAppStore()

    wrapper.vm.assignToSelfPrompt(store.household.chores[0]);

    expect(wrapper.vm.assignDialogOpen).toBe(true)
    expect(wrapper.vm.assignDialogChore).toEqual(store.household.chores[0])
})

//choreAssignable(difficulty)
test("CAT-1 and CAT-2 - choreAssignable correctly determines if the chore can be assigned to the current user", () => {
    const wrapper = mount(Dashboard, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 1,
                                householdId: 1,
                                role: "member",
                                difficulty: 5
                            },
                            household: {
                                users: [
                                    {
                                        id: 4,
                                        name: "test",
                                        role: "member",
                                        difficulty: 5,
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

    const store = useAppStore()

    expect(wrapper.vm.choreAssignable(5)).toBe(true)
    expect(wrapper.vm.choreAssignable(10)).toBe(false)
    expect(wrapper.vm.choreAssignable(2)).toBe(true)
})

//cancelAssign()
test("CAT-3 - cancelAssign closes the assign dialog", () => {
    const wrapper = mount(Dashboard, {
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

    const store = useAppStore()

    wrapper.vm.assignToSelfPrompt(store.household.chores[0]);

    expect(wrapper.vm.assignDialogOpen).toBe(true)
    expect(wrapper.vm.assignDialogChore).toEqual(store.household.chores[0])

    wrapper.vm.cancelAssign();

    expect(wrapper.vm.assignDialogOpen).toBe(false)
    expect(wrapper.vm.assignDialogChore).toBeNull()
})

//completeChorePrompt(chore)
test("NOFT - completeChorePrompt opens the complete chore dialog with the correct chore", () => {
    const wrapper = mount(Dashboard, {
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

    const store = useAppStore()

    wrapper.vm.completeChorePrompt(store.household.chores[0]);

    expect(wrapper.vm.completeDialogOpen).toBe(true)
    expect(wrapper.vm.completeDialogChore).toEqual(store.household.chores[0])
})

//cancelComplete()
test("CCoT-3 - cancelComplete closes the complete dialog", () => {
    const wrapper = mount(Dashboard, {
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

    const store = useAppStore()

    wrapper.vm.completeChorePrompt(store.household.chores[0]);

    expect(wrapper.vm.completeDialogOpen).toBe(true)
    expect(wrapper.vm.completeDialogChore).toEqual(store.household.chores[0])

    wrapper.vm.cancelComplete();

    expect(wrapper.vm.completeDialogOpen).toBe(false)
    expect(wrapper.vm.completeDialogChore).toBeNull()
})

//filterChores()
test("VACT-5 - filterChores filters correctly for assigned chores", async () => {
    const wrapper = mount(Dashboard, {
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
                                        assigneeId: 1,
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
                                    }, 
                                    {
                                        id: 3,
                                        name: "test name 2",
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

    const store = useAppStore()
    wrapper.vm.filterUserId = 1;
    wrapper.vm.filterChores();

    await nextTick()

    expect(wrapper.vm.choreList.length).toBe(1)
    expect(wrapper.vm.choreList).toContainEqual(store.household.chores[0])

    expect(wrapper.text()).toContain('test name')
    expect(wrapper.text()).not.toContain('test name result')
    expect(wrapper.text()).toContain('test name 2')

    expect(wrapper.vm.unassignedList).toContain(store.household.chores[2])
    expect(wrapper.vm.unassignedList.length).toBe(1)

    expect(wrapper.text()).toContain('Unassigned Chores')
})

test("VACT-6 - filterChores filters to the correctly with no filter", async () => {
    const wrapper = mount(Dashboard, {
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
                                        assigneeId: 1,
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
                                    },
                                    {
                                        id: 3,
                                        name: "test name 2",
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

    const store = useAppStore()
    wrapper.vm.filterUserId = 1;
    wrapper.vm.filterChores();

    await nextTick()

    expect(wrapper.vm.choreList.length).toBe(1)
    expect(wrapper.vm.choreList).toContainEqual(store.household.chores[0])

    wrapper.vm.filterUserId = null;
    wrapper.vm.filterChores();

    await nextTick()

    expect(wrapper.vm.choreList.length).toBe(2)
    expect(wrapper.vm.choreList).toContain(store.household.chores[0])
    expect(wrapper.vm.choreList).toContain(store.household.chores[1])

    expect(wrapper.text()).toContain('test name')
    expect(wrapper.text()).toContain('test name result')
    expect(wrapper.text()).toContain('test name 2')

    expect(wrapper.vm.unassignedList).toContain(store.household.chores[2])
    expect(wrapper.vm.unassignedList.length).toBe(1)

    expect(wrapper.text()).toContain('Unassigned Chores')
})

//async completeChore(chore)
test("CCoT-1 - completeChore deletes the completed chore from the database and gives points when not overdue", async () => {
    const result = await FetchService.createChore({
        name: "new test name",
        description: "new test description",
        difficulty: 7,
        location: "Basement",
        estimatedTime: 20,
        dueDate: new Date("2025-12-30 EST"),
        repeat: false,
        householdId: 1,
        assigneeId: null,
    })
    
    const wrapper = mount(Dashboard, {
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
                                totalPoints: 0,
                            },
                            household: {
                                users: [
                                    {
                                        id: 4,
                                        name: "test",
                                        role: "member",
                                    },
                                    {
                                        id: 1,
                                        name: "current user",
                                        householdId: 1,
                                        role: "leader",
                                        totalPoints: 0,
                                    }
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
                                        assigneeId: 1,
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
                                        assigneeId: 2,
                                    },
                                    result
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

    wrapper.vm.completeDialogChore = result

    await wrapper.vm.completeChore(result)

    await nextTick()

    expect(wrapper.vm.choreList.length).toBe(2)
    expect(wrapper.vm.choreList).not.toContainEqual(result)
    expect(store.household.chores).not.toContainEqual(result)
    expect(store.user.totalPoints).toBe(35)
    expect(store.household.users[1].totalPoints).toBe(35)

    await nextTick()

    const pointsResult = await FetchService.updateUserPoints(1, -35)
    expect(pointsResult.totalPoints).toBe(0)
})

test("CCoT-2 - completeChore deletes the completed chore from the database and gives points when overdue", async () => {
    const result = await FetchService.createChore({
        name: "new test name",
        description: "new test description",
        difficulty: 7,
        location: "Basement",
        estimatedTime: 20,
        dueDate: new Date("2015-12-30 EST"),
        repeat: false,
        householdId: 1,
        assigneeId: 3,
    })
    
    const wrapper = mount(Dashboard, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 3,
                                householdId: 1,
                                role: "leader",
                                totalPoints: 0,
                            },
                            household: {
                                users: [
                                    {
                                        id: 4,
                                        name: "test",
                                        role: "member",
                                    },
                                    {
                                        id: 3,
                                        name: "current user",
                                        householdId: 1,
                                        role: "leader",
                                        totalPoints: 0,
                                    }
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
                                        assigneeId: 1,
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
                                        assigneeId: 2,
                                    },
                                    result
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

    wrapper.vm.completeDialogChore = result

    await wrapper.vm.completeChore(result)

    await nextTick()

    expect(wrapper.vm.choreList.length).toBe(2)
    expect(wrapper.vm.choreList).not.toContainEqual(result)
    expect(store.household.chores).not.toContainEqual(result)
    expect(store.user.totalPoints).toBe(14)
    expect(store.household.users[1].totalPoints).toBe(14)

    await nextTick()

    const pointsResult = await FetchService.updateUserPoints(3, -14)

    await nextTick()

    expect(pointsResult.totalPoints).toBe(0)
})

//async assignToSelf(chore)
test("CAT-1 - assignToSelf assigns the given chore to the current user", async () => {
    const result = await FetchService.createChore({
        name: "new test name",
        description: "new test description",
        difficulty: 7,
        location: "Basement",
        estimatedTime: 20,
        dueDate: new Date("2025-12-30 EST"),
        repeat: false,
        householdId: 1,
        assigneeId: null,
    })

    let testChore = {...result}
    
    const wrapper = mount(Dashboard, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 1,
                                name: "test2",
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
                                        id: 1,
                                        householdId: 1,
                                        name: "test2",
                                        role: "leader",
                                    }
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
                                        assigneeId: 1,
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
                                        assigneeId: 2,
                                    },
                                    result
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

    wrapper.vm.assignDialogChore = result

    await wrapper.vm.assignToSelf(result)

    expect(wrapper.vm.choreList.length).toBe(3)
    expect(wrapper.vm.choreList).not.toContainEqual(testChore)
    expect(store.household.chores).not.toContainEqual(testChore)
    expect(wrapper.vm.choreList).toContainEqual(result)
    expect(store.household.chores).toContainEqual(result)

    testChore.assigneeId = 1

    await FetchService.deleteChore(result.id)
})

//async deleteChore(choreId)
test("CDT-1 - deleteChore deletes the chore from the database", async () => {
    const result = await FetchService.createChore({
        name: "new test name",
        description: "new test description",
        difficulty: 7,
        location: "Basement",
        estimatedTime: 20,
        dueDate: new Date("2025-12-30 EST"),
        repeat: false,
        householdId: 1,
        assigneeId: null,
    })

    const wrapper = mount(Dashboard, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 1,
                                name: "test2",
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
                                        id: 1,
                                        householdId: 1,
                                        name: "test2",
                                        role: "leader",
                                    }
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
                                        assigneeId: 1,
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
                                        assigneeId: 2,
                                    },
                                    result
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

    wrapper.vm.deleteDialogChore = result

    await wrapper.vm.deleteChore(result.id)

    expect(wrapper.vm.choreList.length).toBe(2)
    expect(wrapper.vm.choreList).not.toContainEqual(result)
    expect(store.household.chores).not.toContainEqual(result)
})

//chorePoints
test("CCoT-1 - chorePoints returns the correct value when curent date is after due date", async () => {
    const wrapper = mount(Dashboard, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 1,
                                name: "test2",
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
                                        id: 1,
                                        householdId: 1,
                                        name: "test2",
                                        role: "leader",
                                    }
                                ],
                                chores: [
                                    {
                                        id: 1,
                                        name: "test name",
                                        description: "test description",
                                        difficulty: 10,
                                        location: "Kitchen",
                                        estimatedTime: 20,
                                        dueDate: new Date('2035-12-25'),
                                        repeat: false,
                                        householdId: 1,
                                        assigneeId: 1,
                                    },
                                    {
                                        id: 2,
                                        name: "test name result",
                                        description: "test description result",
                                        difficulty: 9,
                                        location: "Living Room",
                                        estimatedTime: 30,
                                        dueDate: new Date('2015-12-25'),
                                        repeat: false,
                                        householdId: 1,
                                        assigneeId: 2,
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

    const store = useAppStore()

    const result = wrapper.vm.chorePoints(store.household.chores[0])

    expect(result).toBe(50)
})

test("CCoT-2 - chorePoints returns the correct value when curent date is before due date", async () => {
    const wrapper = mount(Dashboard, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 1,
                                name: "test2",
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
                                        id: 1,
                                        householdId: 1,
                                        name: "test2",
                                        role: "leader",
                                    }
                                ],
                                chores: [
                                    {
                                        id: 1,
                                        name: "test name",
                                        description: "test description",
                                        difficulty: 10,
                                        location: "Kitchen",
                                        estimatedTime: 20,
                                        dueDate: new Date('2035-12-25'),
                                        repeat: false,
                                        householdId: 1,
                                        assigneeId: 1,
                                    },
                                    {
                                        id: 2,
                                        name: "test name result",
                                        description: "test description result",
                                        difficulty: 9,
                                        location: "Living Room",
                                        estimatedTime: 30,
                                        dueDate: new Date('2015-12-25'),
                                        repeat: false,
                                        householdId: 1,
                                        assigneeId: 2,
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

    const store = useAppStore()

    const result = wrapper.vm.chorePoints(store.household.chores[1])

    expect(result).toBe(18)
})

//v-models
test("NOFT - test filterUserId v-model", async () => {
    const wrapper = mount(Dashboard, {
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
                                        assigneeId: 4,
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
                                    },
                                    {
                                        id: 3,
                                        name: "test name 2",
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
        },
    })

    const select = wrapper.findComponent('[data-testid="filteruserid"]');
    await select.setValue(4)
    expect(wrapper.vm.filterUserId).toBe(4)
})

test("NOFT - test delete dialog v-model", async () => {
    const wrapper = mount(Dashboard, {
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
                                        assigneeId: 4,
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
                                    },
                                    {
                                        id: 3,
                                        name: "test name 2",
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
            stubs: {
                VDialog: {
                    name: "VDialog",
                    template: '<div class="v-dialog-stub"><slot /></div>',
                    props: ['modelValue'],
                }
            },
        },
    })

    wrapper.vm.deleteDialogOpen = true;

    await nextTick()

    const dialog = wrapper.findComponent('[data-testid="deleteDialog"]')

    await dialog.setValue(false)

    await nextTick()

    expect(wrapper.vm.deleteDialogOpen).toBe(false);
})

test("NOFT - test assign dialog v-model", async () => {
    const wrapper = mount(Dashboard, {
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
                                        assigneeId: 4,
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
                                    },
                                    {
                                        id: 3,
                                        name: "test name 2",
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
            stubs: {
                VDialog: {
                    name: "VDialog",
                    template: '<div class="v-dialog-stub"><slot /></div>',
                    props: ['modelValue'],
                }
            },
        },
    })

    wrapper.vm.assignDialogOpen = true;

    await nextTick()

    const dialog = wrapper.findComponent('[data-testid="assignDialog"]')

    await dialog.setValue(false)

    await nextTick()

    expect(wrapper.vm.assignDialogOpen).toBe(false);
})

test("NOFT - test complete dialog v-model", async () => {
    const wrapper = mount(Dashboard, {
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
                                        assigneeId: 4,
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
                                    },
                                    {
                                        id: 3,
                                        name: "test name 2",
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
            stubs: {
                VDialog: {
                    name: "VDialog",
                    template: '<div class="v-dialog-stub"><slot /></div>',
                    props: ['modelValue'],
                }
            },
        },
    })

    wrapper.vm.completeDialogOpen = true;

    await nextTick()

    const dialog = wrapper.findComponent('[data-testid="completeDialog"]')

    await dialog.setValue(false)

    await nextTick()

    expect(wrapper.vm.completeDialogOpen).toBe(false);
})

//Button Clicks
test("VACT-5 and VACT-6 - test filter button click", async () => {
    const wrapper = mount(Dashboard, {
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
                                        assigneeId: 4,
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
                                    },
                                    {
                                        id: 3,
                                        name: "test name 2",
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
        },
    })

    const spy = vi.spyOn(wrapper.vm, 'filterChores');

    await wrapper.find('#filterbutton').trigger("click")
    expect(spy).toHaveBeenCalled();
})

test("NOFT - test tile view button click", async () => {
    const wrapper = mount(Dashboard, {
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
                                        assigneeId: 4,
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
                                    },
                                    {
                                        id: 3,
                                        name: "test name 2",
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
        },
    })

    const spy = vi.spyOn(wrapper.vm, 'changeView');

    await wrapper.find('#tilebutton').trigger("click")
    expect(spy).toHaveBeenCalled();
})

test("NOFT - test list view button click", async () => {
    const wrapper = mount(Dashboard, {
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
                                        assigneeId: 4,
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
                                    },
                                    {
                                        id: 3,
                                        name: "test name 2",
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
        },
    })

    wrapper.vm.changeView()
    await nextTick()

    const spy = vi.spyOn(wrapper.vm, 'changeView');

    await wrapper.find('#listbutton').trigger("click")
    expect(spy).toHaveBeenCalled();
})

test("VACT-4 - test my chores button click", async () => {
    const wrapper = mount(Dashboard, {
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
                                        id: 1,
                                        name: 'current user',
                                        role: 'leader',
                                        householdId: 1
                                    },
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
                                        assigneeId: 1,
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
                                    },
                                    {
                                        id: 3,
                                        name: "test name 2",
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
        },
    })

    const spy = vi.spyOn(wrapper.vm, 'filterChores');

    await wrapper.find('#mychoresbutton').trigger("click")
    expect(wrapper.vm.filterUserId).toBe(1)
    expect(spy).toHaveBeenCalled();

    const store = useAppStore()

    expect(wrapper.text()).toContain('test name')
    expect(wrapper.text()).toContain('test name result')
    expect(wrapper.text()).not.toContain('test name 2')

    expect(wrapper.vm.choreList).toContain(store.household.chores[0])
    expect(wrapper.vm.choreList.length).toBe(1)

    expect(wrapper.vm.unassignedList).toContain(store.household.chores[1])
    expect(wrapper.vm.unassignedList.length).toBe(1)

    expect(wrapper.text()).toContain('Unassigned Chores')
})

test("CDT-2 -  test cancel delete button click", async () => {
    const wrapper = mount(Dashboard, {
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
                                        assigneeId: 4,
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
                                    },
                                    {
                                        id: 3,
                                        name: "test name 2",
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
            stubs: {
                VDialog: {
                    name: "VDialog",
                    template: '<div class="v-dialog-stub"><slot /></div>',
                    props: ['modelValue'],
                }
            },
        },
    })

    wrapper.vm.deleteDialogOpen = true;

    await nextTick()

    const spy = vi.spyOn(wrapper.vm, 'cancelDelete');

    await wrapper.find('#cancelDeleteButton').trigger("click")
    expect(spy).toHaveBeenCalled();
})

test("VDT-1 - test deleteChore button click", async () => {
    const result = await FetchService.createChore({
        name: "new test name",
        description: "new test description",
        difficulty: 7,
        location: "Basement",
        estimatedTime: 20,
        dueDate: new Date("2025-12-30 EST"),
        repeat: false,
        householdId: 1,
        assigneeId: null,
    })

    const wrapper = mount(Dashboard, {
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
                                        assigneeId: 4,
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
                                    },
                                    {
                                        id: 3,
                                        name: "test name 2",
                                        description: "test description result",
                                        difficulty: 9,
                                        location: "Living Room",
                                        estimatedTime: 30,
                                        dueDate: new Date('2025-12-25'),
                                        repeat: false,
                                        householdId: 1,
                                        assigneeId: 4,
                                    },
                                    result
                                ]
                            },
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
        },
    })

    wrapper.vm.deleteDialogOpen = true;
    wrapper.vm.deleteDialogChore = result

    await nextTick()

    const spy = vi.spyOn(wrapper.vm, 'deleteChore');

    await wrapper.find('#deleteChoreButton').trigger("click")
    expect(spy).toHaveBeenCalled();
})

test("CAT-3 - test cancel assign button click", async () => {
    const wrapper = mount(Dashboard, {
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
                                        assigneeId: 4,
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
                                    },
                                    {
                                        id: 3,
                                        name: "test name 2",
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
            stubs: {
                VDialog: {
                    name: "VDialog",
                    template: '<div class="v-dialog-stub"><slot /></div>',
                    props: ['modelValue'],
                }
            },
        },
    })

    wrapper.vm.assignDialogOpen = true;

    await nextTick()

    const spy = vi.spyOn(wrapper.vm, 'cancelAssign');

    await wrapper.find('#cancelAssignButton').trigger("click")
    expect(spy).toHaveBeenCalled();
})

test("CAT-1 - test assignChore button click", async () => {
    const result = await FetchService.createChore({
        name: "new test name",
        description: "new test description",
        difficulty: 7,
        location: "Basement",
        estimatedTime: 20,
        dueDate: new Date("2025-12-30 EST"),
        repeat: false,
        householdId: 1,
        assigneeId: null,
    })

    const wrapper = mount(Dashboard, {
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
                                        assigneeId: 4,
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
                                    },
                                    {
                                        id: 3,
                                        name: "test name 2",
                                        description: "test description result",
                                        difficulty: 9,
                                        location: "Living Room",
                                        estimatedTime: 30,
                                        dueDate: new Date('2025-12-25'),
                                        repeat: false,
                                        householdId: 1,
                                        assigneeId: 4,
                                    },
                                    result
                                ]
                            },
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
        },
    })

    wrapper.vm.assignDialogOpen = true;
    wrapper.vm.assignDialogChore = result

    await nextTick()

    const spy = vi.spyOn(wrapper.vm, 'assignToSelf');

    await wrapper.find('#assignChoreButton').trigger("click")
    expect(spy).toHaveBeenCalled();

    await FetchService.deleteChore(result.id)
})

test("CCoT-3 - test cancel complete button click", async () => {
    const wrapper = mount(Dashboard, {
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
                                        assigneeId: 4,
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
                                    },
                                    {
                                        id: 3,
                                        name: "test name 2",
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
            stubs: {
                VDialog: {
                    name: "VDialog",
                    template: '<div class="v-dialog-stub"><slot /></div>',
                    props: ['modelValue'],
                }
            },
        },
    })

    wrapper.vm.completeDialogOpen = true;

    await nextTick()

    const spy = vi.spyOn(wrapper.vm, 'cancelComplete');

    await wrapper.find('#cancelCompleteButton').trigger("click")
    expect(spy).toHaveBeenCalled();
})

test("CCoT-1 - test completeChore button click", async () => {
    const result = await FetchService.createChore({
        name: "new test name",
        description: "new test description",
        difficulty: 7,
        location: "Basement",
        estimatedTime: 20,
        dueDate: new Date("2025-12-30 EST"),
        repeat: false,
        householdId: 1,
        assigneeId: null,
    })
    
    const wrapper = mount(Dashboard, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 2,
                                householdId: 1,
                                role: "leader",
                                totalPoints: 0,
                            },
                            household: {
                                users: [
                                    {
                                        id: 4,
                                        name: "test",
                                        role: "member",
                                    },
                                    {
                                        id: 2,
                                        name: "current user",
                                        householdId: 1,
                                        role: "leader",
                                        totalPoints: 0,
                                    }
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
                                        assigneeId: 1,
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
                                        assigneeId: 2,
                                    },
                                    result
                                ]
                            },
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

    const store = useAppStore()

    wrapper.vm.completeDialogChore = result

    await nextTick()

    wrapper.vm.completeDialogOpen = true;

    await nextTick()

    const spy = vi.spyOn(wrapper.vm, 'completeChore');

    await wrapper.find('#completeChoreButton').trigger("click")
    expect(spy).toHaveBeenCalledWith(result);
})

test("CAT-2 - test assign dialog when too difficult for user", async () => {
    const wrapper = mount(Dashboard, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 1,
                                householdId: 1,
                                role: "member",
                                difficulty: 2
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
                                        assigneeId: 4,
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
                                    },
                                    {
                                        id: 3,
                                        name: "test name 2",
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
            stubs: {
                VDialog: {
                    name: "VDialog",
                    template: '<div class="v-dialog-stub"><slot /></div>',
                    props: ['modelValue'],
                }
            },
        },
    })

    const store = useAppStore()

    wrapper.vm.assignDialogChore = store.household.chores[1]
    wrapper.vm.assignDialogOpen = true;

    await nextTick()

    expect(wrapper.text()).toContain("This chore is too difficult for you. If you would like to complete this chore please talk to a household leader.");
    expect(wrapper.find("#assignChoreButton").exists()).toBe(false)
})