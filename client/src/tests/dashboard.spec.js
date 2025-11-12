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

test("Dashboard renders correctly", () => {
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

    expect(wrapper.text()).toContain('Unassigned Chores')
})

//changeView()
test("changeView updates the view mode", () => {
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
test("user initials returns the correct initials for the userId", () => {
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
test("updateChore reroutes correctly", async () => {

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
test("promptDelete opens the delete dialog for the correct chore", () => {
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
test("cancelDelete closes the delete dialog", () => {
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
test("assignToSelfPrompt opens the assign dialog for the correct chore", () => {
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
test("choreAssignable correctly determines if the chore can be assigned to the current user", () => {
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
test("cancelAssign closes the assign dialog", () => {
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
test("completeChorePrompt opens the complete chore dialog with the correct chore", () => {
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
test("cancelComplete closes the complete dialog", () => {
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
test("filterChores filters correctly for assigned chores", () => {
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
                                        assigneeId: 2,
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

    expect(wrapper.vm.choreList.length).toBe(1)
    expect(wrapper.vm.choreList).toContainEqual(store.household.chores[0])
})

test("filterChores filters to the correctly with no filter", () => {
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
                                        assigneeId: 2,
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

    expect(wrapper.vm.choreList.length).toBe(1)
    expect(wrapper.vm.choreList).toContainEqual(store.household.chores[0])

    wrapper.vm.filterUserId = null;
    wrapper.vm.filterChores();

    expect(wrapper.vm.choreList.length).toBe(2)
    expect(wrapper.vm.choreList).toEqual(store.household.chores)
})

//async completeChore(chore)
test("completeChore deletes the completed chore from the database and gives points", async () => {
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

    expect(wrapper.vm.choreList.length).toBe(2)
    expect(wrapper.vm.choreList).not.toContainEqual(result)
    expect(store.household.chores).not.toContainEqual(result)
    expect(store.user.totalPoints).toBe(35)
    expect(store.household.users[1].totalPoints).toBe(35)

    await FetchService.updateUserPoints(1, -35)
})

let newChore = {}

//async assignToSelf(chore)
test("assignToSelf assigns the given chore to the current user", async () => {
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

    newChore = {...result}
    
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
    expect(wrapper.vm.choreList).not.toContainEqual(newChore)
    expect(store.household.chores).not.toContainEqual(newChore)
    expect(wrapper.vm.choreList).toContainEqual(result)
    expect(store.household.chores).toContainEqual(result)

    newChore.assigneeId = 1
})

//async deleteChore(choreId)
test("deleteChore deletes the chore from the database", async () => {
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
                                    newChore
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

    wrapper.vm.deleteDialogChore = newChore

    await wrapper.vm.deleteChore(newChore.id)

    expect(wrapper.vm.choreList.length).toBe(2)
    expect(wrapper.vm.choreList).not.toContainEqual(newChore)
    expect(store.household.chores).not.toContainEqual(newChore)
})

//chorePoints
test("chorePoints returns the correct value when curent date is after due date", async () => {
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

test("chorePoints returns the correct value when curent date is before due date", async () => {
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