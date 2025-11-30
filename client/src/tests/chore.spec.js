import Chore from '../pages/Chore.vue'
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
import { createRouter, createWebHistory } from 'vue-router'
import FetchService from '../FetchService.js'
import { nextTick } from 'vue'


// need this at the top
const vuetify = createVuetify({
    components,
    directives,
})

vi.stubGlobal('visualViewport', new EventTarget())

test("NOFT - Chore renders correctly", () => {
    const wrapper = mount(Chore, {
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
        },
        props: {
            viewMode: 'create',
            choreId: 0,
        }
    })

    expect(wrapper.text()).toContain('Name')
})

test("VCDT-2 - Chore renders edit button when a leader views a chore", () => {
    const wrapper = mount(Chore, {
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
        },
        props: {
            viewMode: 'view',
            choreId: 2,
        }
    })

    const editButton = wrapper.find("#editButton")

    expect(editButton.text()).toBe("Edit")
})

test("CET-15 - Chore reroutes to view if a member opens it in edit", async () => {
    let router = createRouter({
        history: createWebHistory(),
        routes: routesList,
    })

    router.push('/chore/1/edit')
    await router.isReady()

    const spy = vi.spyOn(router, 'push');

    const wrapper = mount(Chore, {
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
        },
        props: {
            viewMode: 'edit',
            choreId: 1,
        }
    })

    expect(spy).toHaveBeenCalledWith({
      name: 'viewChore',
      params: { id: 1 }
    });
})



//retrieveChore(viewMode, choreId)
test("NOFT - retrieveChore uses the correct value for create", () => {
    const wrapper = mount(Chore, {
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
        },
        props: {
            viewMode: 'create',
            choreId: 0,
        }
    })

    const store = useAppStore()

    const result = wrapper.vm.retrieveChore('create', 0)
    expect(wrapper.vm.chore).toEqual({
        name: '',
        description: '',
        difficulty: 10,
        location: "",
        estimatedTime: 0,
        dueDate: '',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    })
    expect(result).toEqual({
        name: '',
        description: '',
        difficulty: 10,
        location: '',
        estimatedTime: 0,
        dueDate: '',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    })
})

test("CET-14 - retrieveChore uses the correct value for update (chore not present)", () => {
    const wrapper = mount(Chore, {
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
        },
        props: {
            viewMode: 'edit',
            choreId: -1,
        }
    })

    const store = useAppStore()

    const result = wrapper.vm.retrieveChore('edit', -1)
    expect(wrapper.vm.chore).toEqual({})
    expect(result).toEqual({})
})

test("NOFT - retrieveChore uses the correct value for update (chore present)", () => {
    const wrapper = mount(Chore, {
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
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
        },
        props: {
            viewMode: 'edit',
            choreId: 2,
        }
    })

    const store = useAppStore()

    store.household.chores[1].dueDate = new Date('2025-12-25 EST')

    const result = wrapper.vm.retrieveChore('edit', 2)
    expect(wrapper.vm.chore).toEqual({
        id: 2,
        name: "test name result",
        description: "test description result",
        difficulty: 9,
        location: "Living Room",
        estimatedTime: 30,
        dueDate: '2025-12-25',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    })
    expect(result).toEqual({
        id: 2,
        name: "test name result",
        description: "test description result",
        difficulty: 9,
        location: "Living Room",
        estimatedTime: 30,
        dueDate: '2025-12-25',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    })
})

test("VCDT-3 - retrieveChore uses the correct value for view (chore not present)", () => {
    const wrapper = mount(Chore, {
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
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
        },
        props: {
            viewMode: 'view',
            choreId: 0,
        }
    })

    const store = useAppStore()

    const result = wrapper.vm.retrieveChore('view', 0)
    expect(wrapper.vm.chore).toEqual({})
    expect(result).toEqual({})
})

test("VCDT-1 - retrieveChore uses the correct value for view (chore present and unassigned)", () => {
    const wrapper = mount(Chore, {
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
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
        },
        props: {
            viewMode: 'view',
            choreId: 2,
        }
    })

    const store = useAppStore()

    store.household.chores[1].dueDate = new Date('2025-12-25 EST')

    const result = wrapper.vm.retrieveChore('view', 2)
    expect(wrapper.vm.chore).toEqual({
        id: 2,
        name: "test name result",
        description: "test description result",
        difficulty: 9,
        location: "Living Room",
        estimatedTime: 30,
        dueDate: '2025-12-25',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    })
    expect(result).toEqual({
        id: 2,
        name: "test name result",
        description: "test description result",
        difficulty: 9,
        location: "Living Room",
        estimatedTime: 30,
        dueDate: '2025-12-25',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    })
})

test("VCDT-1 - retrieveChore uses the correct value for view (chore present and assigned)", () => {
    const wrapper = mount(Chore, {
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
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
        props: {
            viewMode: 'view',
            choreId: 2,
        }
    })

    const store = useAppStore()

    store.household.chores[1].dueDate = new Date('2025-12-25 EST')

    const result = wrapper.vm.retrieveChore('view', 2)
    expect(wrapper.vm.chore).toEqual({
        id: 2,
        name: "test name result",
        description: "test description result",
        difficulty: 9,
        location: "Living Room",
        estimatedTime: 30,
        dueDate: '2025-12-25',
        repeat: false,
        householdId: 1,
        assigneeId: 4,
    })
    expect(result).toEqual({
        id: 2,
        name: "test name result",
        description: "test description result",
        difficulty: 9,
        location: "Living Room",
        estimatedTime: 30,
        dueDate: '2025-12-25',
        repeat: false,
        householdId: 1,
        assigneeId: 4,
    })
    expect(wrapper.vm.viewAssignee).toEqual('test')
})

test("CET-14 - retrieveChore reroutes when the chore is not in the household", async () => {
    let router = createRouter({
        history: createWebHistory(),
        routes: routesList,
    })

    router.push('/chore/1')
    await router.isReady()

    const spy = vi.spyOn(router, 'push');
    
    const wrapper = mount(Chore, {
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
                                        dueDate: new Date('2025-12-25 EST'),
                                        repeat: false,
                                        householdId: 2,
                                        assigneeId: null,
                                    },
                                    {
                                        id: 2,
                                        name: "test name result",
                                        description: "test description result",
                                        difficulty: 9,
                                        location: "Living Room",
                                        estimatedTime: 30,
                                        dueDate: new Date('2025-12-25 EST'),
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
        },
        props: {
            viewMode: 'view',
            choreId: 1,
        }
    })

    expect(spy).toHaveBeenCalledWith({ name: 'home' })
})

//validateChore()
test("CCT-2 and CET-2 - validateChore returns correctly for missing name", () => {
    const wrapper = mount(Chore, {
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
        },
        props: {
            viewMode: 'create',
            choreId: 2,
        }
    })

    const store = useAppStore()
    
    wrapper.vm.chore = {
        id: 1,
        name: "",
        description: "test description",
        difficulty: 10,
        location: "Kitchen",
        estimatedTime: 20,
        dueDate: '2025-12-25',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    }

    const result = wrapper.vm.validateChore()
    expect(result).toBe(false)
})

test("CCT-3 and CET-3 - validateChore returns correctly for missing difficulty", () => {
    const wrapper = mount(Chore, {
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
        },
        props: {
            viewMode: 'create',
            choreId: 0,
        }
    })

    const store = useAppStore()
    
    wrapper.vm.chore = {
        id: 1,
        name: "test name",
        description: "test description",
        difficulty: null,
        location: "Kitchen",
        estimatedTime: 20,
        dueDate: '2025-12-25',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    }

    const result = wrapper.vm.validateChore()
    expect(result).toBe(false)
})

test("CCT-4 and CET-4 - validateChore returns correctly for difficulty not between 1-10", () => {
    const wrapper = mount(Chore, {
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
        },
        props: {
            viewMode: 'create',
            choreId: 0,
        }
    })

    const store = useAppStore()
    
    wrapper.vm.chore = {
        id: 1,
        name: "test name",
        description: "test description",
        difficulty: -1,
        location: "Kitchen",
        estimatedTime: 20,
        dueDate: '2025-12-25',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    }

    const result = wrapper.vm.validateChore()
    expect(result).toBe(false)
})

test("CCT-7 and CET-7 - validateChore returns correctly for missing location", () => {
    const wrapper = mount(Chore, {
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
        },
        props: {
            viewMode: 'create',
            choreId: 0,
        }
    })

    const store = useAppStore()
    
    wrapper.vm.chore = {
        id: 1,
        name: "test name",
        description: "test description",
        difficulty: 10,
        location: "",
        estimatedTime: 20,
        dueDate: '2025-12-25',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    }

    const result = wrapper.vm.validateChore()
    expect(result).toBe(false)
})

test("CCT-5 and CET-5 - validateChore returns correctly for missing estimated time", () => {
    const wrapper = mount(Chore, {
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
        },
        props: {
            viewMode: 'create',
            choreId: 0,
        }
    })

    const store = useAppStore()
    
    wrapper.vm.chore = {
        id: 1,
        name: "test name",
        description: "test description",
        difficulty: 10,
        location: "Kitchen",
        estimatedTime: null,
        dueDate: '2025-12-25',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    }

    const result = wrapper.vm.validateChore()
    expect(result).toBe(false)
})

test("CCT-6 and CET-6 - validateChore returns correctly for negative estimated time", () => {
    const wrapper = mount(Chore, {
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
        },
        props: {
            viewMode: 'create',
            choreId: 0,
        }
    })

    const store = useAppStore()
    
    wrapper.vm.chore = {
        id: 1,
        name: "test name",
        description: "test description",
        difficulty: 10,
        location: "Kitchen",
        estimatedTime: -20,
        dueDate: '2025-12-25',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    }

    const result = wrapper.vm.validateChore()
    expect(result).toBe(false)
})

test("CCT-8 and CET-8 - validateChore returns correctly for missing due date", () => {
    const wrapper = mount(Chore, {
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
        },
        props: {
            viewMode: 'create',
            choreId: 0,
        }
    })

    const store = useAppStore()
    
    wrapper.vm.chore = {
        id: 1,
        name: "test name",
        description: "test description",
        difficulty: 10,
        location: "Kitchen",
        estimatedTime: 20,
        dueDate: '',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    }

    const result = wrapper.vm.validateChore()
    expect(result).toBe(false)
})

test("CCT-9 and CET-9 - validateChore returns correctly for due date before current date", () => {
    const wrapper = mount(Chore, {
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
        },
        props: {
            viewMode: 'create',
            choreId: 1,
        }
    })

    const store = useAppStore()
    
    wrapper.vm.chore = {
        id: 1,
        name: "test name",
        description: "test description",
        difficulty: 10,
        location: "Kitchen",
        estimatedTime: 20,
        dueDate: '2025-10-10',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    }

    const result = wrapper.vm.validateChore()
    expect(result).toBe(false)
})

test("CCT-1 and CET-1 - validateChore returns correctly for correct chore", () => {
    const wrapper = mount(Chore, {
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
        },
        props: {
            viewMode: 'create',
            choreId: 1,
        }
    })

    const store = useAppStore()
    
    wrapper.vm.chore = {
        id: 1,
        name: "test name",
        description: "test description",
        difficulty: 10,
        location: "Kitchen",
        estimatedTime: 20,
        dueDate: '2025-12-30',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    }

    const result = wrapper.vm.validateChore()
    expect(result).toBe(true)
})

test("CCT-14 and CET-16 - error messages are removed after information is corrected", () => {
    const wrapper = mount(Chore, {
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
        },
        props: {
            viewMode: 'create',
            choreId: 1,
        }
    })

    const store = useAppStore()
    
    wrapper.vm.chore = {
        id: 1,
        name: "",
        description: "test description",
        difficulty: null,
        location: "",
        estimatedTime: -1,
        dueDate: '',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    }

    const result = wrapper.vm.validateChore()

    expect(wrapper.vm.errorMessages).toEqual({
        name: "Please enter a name for the chore",
        description: "",
        difficulty: "Please enter a difficulty level",
        location: "Please enter a location",
        estimatedTime: "Please enter a positive value for the amount of time it will take to complete the chore",
        dueDate: "Please enter a due date",
        assignee: ""
    })

    wrapper.vm.chore = {
        id: 1,
        name: "test name",
        description: "test description",
        difficulty: 3,
        location: "Kitchen",
        estimatedTime: 20,
        dueDate: '2035-12-30',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    }

    wrapper.vm.validateChore()

    expect(wrapper.vm.errorMessages).toEqual({
        name: "",
        description: "",
        difficulty: "",
        location: "",
        estimatedTime: "",
        dueDate: "",
        assignee: ""
    })
})

//The id of the chore we create so that we can edit it in the update method and then delete it
let choreId = 0;

//createChore()
test("CCT-1 - createChore returns correctly", async () => {
    const wrapper = mount(Chore, {
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
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
        },
        props: {
            viewMode: 'create',
            choreId: 1,
        }
    })

    const store = useAppStore()
    
    wrapper.vm.chore = {
        name: "new test name",
        description: "new test description",
        difficulty: 7,
        location: "Basement",
        estimatedTime: 20,
        dueDate: '2025-12-30',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    }

    const result = await wrapper.vm.createChore()

    choreId = result.id;

    expect(result).toEqual({
        id: choreId,
        name: "new test name",
        description: "new test description",
        difficulty: 7,
        location: "Basement",
        estimatedTime: 20,
        dueDate: "2025-12-30T05:00:00.000Z",
        repeat: false,
        householdId: 1,
        assigneeId: null,
    })

    expect(store.household.chores).toContainEqual({
        id: choreId,
        name: "new test name",
        description: "new test description",
        difficulty: 7,
        location: "Basement",
        estimatedTime: 20,
        dueDate: "2025-12-30T05:00:00.000Z",
        repeat: false,
        householdId: 1,
        assigneeId: null,
    })
})

//updateChore()
test("CET-1 - updateChore returns correctly", async () => {
    const wrapper = mount(Chore, {
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
                                        repeat: false,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: choreId,
                                        name: "new test name",
                                        description: "new test description",
                                        difficulty: 7,
                                        location: "Basement",
                                        estimatedTime: 20,
                                        dueDate: new Date('2025-12-30 EST'),
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
        },
        props: {
            viewMode: 'create',
            choreId: choreId,
        }
    })

    const store = useAppStore()
    
    wrapper.vm.chore = {
        id: choreId,
        name: "update test name",
        description: "update test description",
        difficulty: 3,
        location: "Outside",
        estimatedTime: 120,
        dueDate: '2025-12-25',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    }

    const result = await wrapper.vm.updateChore()
    expect(result).toEqual({
        id: choreId,
        name: "update test name",
        description: "update test description",
        difficulty: 3,
        location: "Outside",
        estimatedTime: 120,
        dueDate: "2025-12-25T05:00:00.000Z",
        repeat: false,
        householdId: 1,
        assigneeId: null,
    })
    expect(store.household.chores).toContainEqual({
        id: choreId,
        name: "update test name",
        description: "update test description",
        difficulty: 3,
        location: "Outside",
        estimatedTime: 120,
        dueDate: new Date('2025-12-25 EST'),
        repeat: false,
        householdId: 1,
        assigneeId: null,
    })
    expect(store.household.chores).not.toContainEqual({
        id: choreId,
        name: "new test name",
        description: "new test description",
        difficulty: 7,
        location: "Basement",
        estimatedTime: 20,
        dueDate: new Date('2025-12-30 EST'),
        repeat: false,
        householdId: 1,
        assigneeId: null,
    })

    FetchService.deleteChore(choreId)
})

//cancel()
test("CET-13 - cancel when chore is in edit mode", async () => {
    let router = createRouter({
        history: createWebHistory(),
        routes: routesList,
    })

    router.push('/chore/1/edit')
    await router.isReady()

    const spy = vi.spyOn(router, 'push');
    
    const wrapper = mount(Chore, {
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
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
        },
        props: {
            viewMode: 'edit',
            choreId: 1,
        }
    })

    wrapper.vm.cancel()

    expect(spy).toHaveBeenCalledWith({ name: 'viewChore', params: {id: 1}})
})

test("CCT- 13 - cancel when chore is not in edit mode", async () => {
    let router = createRouter({
        history: createWebHistory(),
        routes: routesList,
    })

    router.push('/chore/create')
    await router.isReady()

    const spy = vi.spyOn(router, 'push');
    
    const wrapper = mount(Chore, {
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
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
        },
        props: {
            viewMode: 'create',
            choreId: 1,
        }
    })

    wrapper.vm.cancel()

    expect(spy).toHaveBeenCalledWith({ name: 'home'})
})
    
//enterEdit()
test("VCDT-3 - enter edit reroutes properly", async () => {
    let router = createRouter({
        history: createWebHistory(),
        routes: routesList,
    })

    router.push('/chore/1')
    await router.isReady()

    const spy = vi.spyOn(router, 'push');
    
    const wrapper = mount(Chore, {
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
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
        },
        props: {
            viewMode: 'view',
            choreId: 1,
        }
    })

    wrapper.vm.enterEdit()

    expect(spy).toHaveBeenCalledWith({ name: 'editChore', params: {id: 1}})
})

//checkChore
test("checkChore invalid chore", async () => {
    const wrapper = mount(Chore, {
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
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
        },
        props: {
            viewMode: 'view',
            choreId: 1,
        }
    })

    const createSpy = vi.spyOn(wrapper.vm.FetchService, 'createChore').mockImplementation((input) => input)
    const updateSpy = vi.spyOn(wrapper.vm.FetchService, 'editChore').mockImplementation((id, chore) => chore)

    wrapper.vm.chore = {
        id: 0,
        name: "",
        description: "update test description",
        difficulty: -3,
        location: "",
        estimatedTime: -10,
        dueDate: '',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    }

    const result = await wrapper.vm.checkChore()

    expect(result).toBe('invalid')
    expect(createSpy).not.toHaveBeenCalled()
    expect(updateSpy).not.toHaveBeenCalled()
    expect(wrapper.vm.difficultyDialogOpen).toBe(false)
})

test("checkChore too difficult", async () => {
    const wrapper = mount(Chore, {
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
                                        difficulty: 3
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
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
        },
        props: {
            viewMode: 'view',
            choreId: 1,
        }
    })

    const createSpy = vi.spyOn(wrapper.vm.FetchService, 'createChore').mockImplementation((input) => input)
    const updateSpy = vi.spyOn(wrapper.vm.FetchService, 'editChore').mockImplementation((id, chore) => chore)

    wrapper.vm.chore = {
        id: 0,
        name: "test chore",
        description: "update test description",
        difficulty: 9,
        location: "Kitchen",
        estimatedTime: 10,
        dueDate: '2035-10-10',
        repeat: false,
        householdId: 1,
        assigneeId: 4,
    }

    const result = await wrapper.vm.checkChore()

    expect(result).toBe('too difficult')
    expect(createSpy).not.toHaveBeenCalled()
    expect(updateSpy).not.toHaveBeenCalled()
    expect(wrapper.vm.difficultyDialogOpen).toBe(true)
})

test("checkChore not too difficult create", async () => {
    const wrapper = mount(Chore, {
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
                                        difficulty: 3
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
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
        },
        props: {
            viewMode: 'create',
            choreId: 1,
        }
    })

    const createSpy = vi.spyOn(wrapper.vm.FetchService, 'createChore').mockImplementation((input) => input)
    const updateSpy = vi.spyOn(wrapper.vm.FetchService, 'editChore').mockImplementation((id, chore) => chore)

    wrapper.vm.chore = {
        id: 0,
        name: "test chore",
        description: "update test description",
        difficulty: 9,
        location: "Kitchen",
        estimatedTime: 10,
        dueDate: '2035-10-10',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    }

    const result = await wrapper.vm.checkChore()

    expect(result).toBe('create')
    expect(wrapper.vm.difficultyDialogOpen).toBe(false)
    expect(createSpy).toHaveBeenCalled()
    expect(updateSpy).not.toHaveBeenCalled()
})

test("checkChore not too difficult create", async () => {
    const wrapper = mount(Chore, {
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
                                        difficulty: 3
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
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
        },
        props: {
            viewMode: 'edit',
            choreId: 1,
        }
    })

    const createSpy = vi.spyOn(wrapper.vm.FetchService, 'createChore').mockImplementation((input) => input)
    const updateSpy = vi.spyOn(wrapper.vm.FetchService, 'editChore').mockImplementation((id, chore) => chore)

    wrapper.vm.chore = {
        id: 0,
        name: "test chore",
        description: "update test description",
        difficulty: 9,
        location: "Kitchen",
        estimatedTime: 10,
        dueDate: '2035-10-10',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    }

    const result = await wrapper.vm.checkChore()

    expect(result).toBe('edit')
    expect(wrapper.vm.difficultyDialogOpen).toBe(false)
    expect(createSpy).not.toHaveBeenCalled()
    expect(updateSpy).toHaveBeenCalled()
})

//assignChoreAnyway
test("CET-10 - assignChoreAnyway edit", async () => {
    const wrapper = mount(Chore, {
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
                                        difficulty: 3
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
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
        },
        props: {
            viewMode: 'edit',
            choreId: 1,
        }
    })

    const createSpy = vi.spyOn(wrapper.vm.FetchService, 'createChore').mockImplementation((input) => input)
    const updateSpy = vi.spyOn(wrapper.vm.FetchService, 'editChore').mockImplementation((id, chore) => chore)

    wrapper.vm.chore = {
        id: 0,
        name: "test chore",
        description: "update test description",
        difficulty: 9,
        location: "Kitchen",
        estimatedTime: 10,
        dueDate: '2035-10-10',
        repeat: false,
        householdId: 1,
        assigneeId: 4,
    }

    wrapper.vm.difficultyDialogOpen = true

    const result = await wrapper.vm.assignChoreAnyway()

    expect(wrapper.vm.difficultyDialogOpen).toBe(false)
    expect(createSpy).not.toHaveBeenCalled()
    expect(updateSpy).toHaveBeenCalled()
    expect(updateSpy).toHaveLastReturnedWith({
        id: 0,
        name: "test chore",
        description: "update test description",
        difficulty: 9,
        location: "Kitchen",
        estimatedTime: 10,
        dueDate: new Date('2035-10-10 EST'),
        repeat: false,
        householdId: 1,
        assigneeId: 4,
    })
})

test("CCT-10 assignChoreAnyway create", async () => {
    const wrapper = mount(Chore, {
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
                                        difficulty: 3
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
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
        },
        props: {
            viewMode: 'create',
            choreId: 1,
        }
    })

    const createSpy = vi.spyOn(wrapper.vm.FetchService, 'createChore').mockImplementation((input) => input)
    const updateSpy = vi.spyOn(wrapper.vm.FetchService, 'editChore').mockImplementation((id, chore) => chore)

    wrapper.vm.chore = {
        name: "test chore",
        description: "update test description",
        difficulty: 9,
        location: "Kitchen",
        estimatedTime: 10,
        dueDate: '2035-10-10',
        repeat: false,
        householdId: 1,
        assigneeId: 4,
    }

    wrapper.vm.difficultyDialogOpen = true

    const result = await wrapper.vm.assignChoreAnyway()

    expect(wrapper.vm.difficultyDialogOpen).toBe(false)
    expect(createSpy).toHaveBeenCalled()
    expect(updateSpy).not.toHaveBeenCalled()
    expect(createSpy).toHaveLastReturnedWith({
        name: "test chore",
        description: "update test description",
        difficulty: 9,
        location: "Kitchen",
        estimatedTime: 10,
        dueDate: new Date('2035-10-10 EST'),
        repeat: false,
        householdId: 1,
        assigneeId: 4,
    })
})

//leaveUnassigned
test("CET-11 - leaveUnassigned edit", async () => {
    const wrapper = mount(Chore, {
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
                                        difficulty: 3
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
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
        },
        props: {
            viewMode: 'edit',
            choreId: 1,
        }
    })

    const createSpy = vi.spyOn(wrapper.vm.FetchService, 'createChore').mockImplementation((input) => input)
    const updateSpy = vi.spyOn(wrapper.vm.FetchService, 'editChore').mockImplementation((id, chore) => chore)

    wrapper.vm.chore = {
        id: 0,
        name: "test chore",
        description: "update test description",
        difficulty: 9,
        location: "Kitchen",
        estimatedTime: 10,
        dueDate: '2035-10-10',
        repeat: false,
        householdId: 1,
        assigneeId: 4,
    }

    wrapper.vm.difficultyDialogOpen = true

    const result = await wrapper.vm.leaveUnassigned()

    expect(wrapper.vm.difficultyDialogOpen).toBe(false)
    expect(createSpy).not.toHaveBeenCalled()
    expect(updateSpy).toHaveBeenCalled()
    expect(updateSpy).toHaveLastReturnedWith({
        id: 0,
        name: "test chore",
        description: "update test description",
        difficulty: 9,
        location: "Kitchen",
        estimatedTime: 10,
        dueDate: new Date('2035-10-10 EST'),
        repeat: false,
        householdId: 1,
        assigneeId: null,
    })
})

test("CCT-11 - leaveUnassigned create", async () => {
    const wrapper = mount(Chore, {
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
                                        difficulty: 3
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
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
        },
        props: {
            viewMode: 'create',
            choreId: 1,
        }
    })

    const createSpy = vi.spyOn(wrapper.vm.FetchService, 'createChore').mockImplementation((input) => input)
    const updateSpy = vi.spyOn(wrapper.vm.FetchService, 'editChore').mockImplementation((id, chore) => chore)

    wrapper.vm.chore = {
        name: "test chore",
        description: "update test description",
        difficulty: 9,
        location: "Kitchen",
        estimatedTime: 10,
        dueDate: '2035-10-10',
        repeat: false,
        householdId: 1,
        assigneeId: 4,
    }

    wrapper.vm.difficultyDialogOpen = true

    const result = await wrapper.vm.leaveUnassigned()

    expect(wrapper.vm.difficultyDialogOpen).toBe(false)
    expect(createSpy).toHaveBeenCalled()
    expect(updateSpy).not.toHaveBeenCalled()
    expect(createSpy).toHaveLastReturnedWith({
        name: "test chore",
        description: "update test description",
        difficulty: 9,
        location: "Kitchen",
        estimatedTime: 10,
        dueDate: new Date('2035-10-10 EST'),
        repeat: false,
        householdId: 1,
        assigneeId: null,
    })
})

//cancelDifficulty
test("CCT-12 and CET-12 - cancelDifficulty closes the dialog", async () => {
    const wrapper = mount(Chore, {
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
                                        difficulty: 3
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
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
        },
        props: {
            viewMode: 'create',
            choreId: 1,
        }
    })

    wrapper.vm.difficultyDialogOpen = true

    wrapper.vm.cancelDifficulty()

    expect(wrapper.vm.difficultyDialogOpen).toBe(false)
})

//Test v-models
test("test the difficulty warning dialog v-model", async () => {
    const wrapper = mount(Chore, {
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
                                        difficulty: 3
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
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
            stubs: {
                VDialog: {
                    name: "VDialog",
                    template: '<div class="v-dialog-stub"><slot /></div>',
                    props: ['modelValue'],
                }
            },
        },
        props: {
            viewMode: 'create',
            choreId: 1,
        }
    })

    wrapper.vm.difficultyDialogOpen = true;

    await nextTick()

    const dialog = wrapper.findComponent('[data-testid="difficultyDialog"]')

    await dialog.setValue(false)

    await nextTick()

    expect(wrapper.vm.difficultyDialogOpen).toBe(false);
})

test("NOFT - test v-model chore.name", async () => {
    const wrapper = mount(Chore, {
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
                                        repeat: false,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: choreId,
                                        name: "new test name",
                                        description: "new test description",
                                        difficulty: 7,
                                        location: "Basement",
                                        estimatedTime: 20,
                                        dueDate: new Date('2025-12-30 EST'),
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
        },
        props: {
            viewMode: 'create',
            choreId: 0,
        }
    })

    const store = useAppStore()

    await wrapper.find("#name").setValue("test name");
    expect(wrapper.vm.chore.name).toBe("test name");
})

test("NOFT - test v-model chore.description", async () => {
    const wrapper = mount(Chore, {
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
                                        repeat: false,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: choreId,
                                        name: "new test name",
                                        description: "new test description",
                                        difficulty: 7,
                                        location: "Basement",
                                        estimatedTime: 20,
                                        dueDate: new Date('2025-12-30 EST'),
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
        },
        props: {
            viewMode: 'create',
            choreId: 0,
        }
    })

    const store = useAppStore()

    await wrapper.find("#description").setValue("test description");
    expect(wrapper.vm.chore.description).toBe("test description");
})

test("NOFT - test v-model chore.difficulty", async () => {
    const wrapper = mount(Chore, {
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
                                        repeat: false,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: choreId,
                                        name: "new test name",
                                        description: "new test description",
                                        difficulty: 7,
                                        location: "Basement",
                                        estimatedTime: 20,
                                        dueDate: new Date('2025-12-30 EST'),
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
        },
        props: {
            viewMode: 'create',
            choreId: 0,
        }
    })

    const store = useAppStore()

    const select = wrapper.findComponent('[data-testid="difficulty"]');
    await select.setValue(4)
    expect(wrapper.vm.chore.difficulty).toBe(4)
})

test("NOFT - test v-model chore.location", async () => {
    const wrapper = mount(Chore, {
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
                                        repeat: false,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: choreId,
                                        name: "new test name",
                                        description: "new test description",
                                        difficulty: 7,
                                        location: "Basement",
                                        estimatedTime: 20,
                                        dueDate: new Date('2025-12-30 EST'),
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
        },
        props: {
            viewMode: 'create',
            choreId: 0,
        }
    })

    const store = useAppStore()

    const select = wrapper.findComponent('[data-testid="location"]');
    await select.setValue("Office")
    expect(wrapper.vm.chore.location).toBe("Office")
})

test("NOFT - test v-model chore.estimatedTime", async () => {
    const wrapper = mount(Chore, {
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
                                        repeat: false,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: choreId,
                                        name: "new test name",
                                        description: "new test description",
                                        difficulty: 7,
                                        location: "Basement",
                                        estimatedTime: 20,
                                        dueDate: new Date('2025-12-30 EST'),
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
        },
        props: {
            viewMode: 'create',
            choreId: 0,
        }
    })

    const store = useAppStore()

    await wrapper.find("#estimatedTime").setValue(120);
    expect(wrapper.vm.chore.estimatedTime).toBe(120);
})

test("NOFT - test v-model chore.dueDate", async () => {
    const wrapper = mount(Chore, {
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
                                        repeat: false,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: choreId,
                                        name: "new test name",
                                        description: "new test description",
                                        difficulty: 7,
                                        location: "Basement",
                                        estimatedTime: 20,
                                        dueDate: new Date('2025-12-30 EST'),
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
        },
        props: {
            viewMode: 'create',
            choreId: 0,
        }
    })

    const store = useAppStore()

    await wrapper.find("#dueDate").setValue('2025-12-30');
    expect(wrapper.vm.chore.dueDate).toBe('2025-12-30');
})

test("NOFT - test v-model chore.assigneeId", async () => {
    const wrapper = mount(Chore, {
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
                                        repeat: false,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: choreId,
                                        name: "new test name",
                                        description: "new test description",
                                        difficulty: 7,
                                        location: "Basement",
                                        estimatedTime: 20,
                                        dueDate: new Date('2025-12-30 EST'),
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
        },
        props: {
            viewMode: 'create',
            choreId: 0,
        }
    })

    const store = useAppStore()

    const select = wrapper.findComponent('[data-testid="assigneeId"]');
    await select.setValue(4)
    expect(wrapper.vm.chore.assigneeId).toBe(4)
})

//Test button triggers
test("CCT-1 - test create button", async () => {
    const wrapper = mount(Chore, {
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
                                        repeat: false,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: choreId,
                                        name: "new test name",
                                        description: "new test description",
                                        difficulty: 7,
                                        location: "Basement",
                                        estimatedTime: 20,
                                        dueDate: new Date('2025-12-30 EST'),
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
        },
        props: {
            viewMode: 'create',
            choreId: 0,
        }
    })

    const store = useAppStore()

    const spy = vi.spyOn(wrapper.vm, 'checkChore')
    await wrapper.find("#createButton").trigger('click')
    expect(spy).toHaveBeenCalled()
})

test("CET-1 - test update button", async () => {
    const wrapper = mount(Chore, {
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
                                        repeat: false,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: choreId,
                                        name: "new test name",
                                        description: "new test description",
                                        difficulty: 7,
                                        location: "Basement",
                                        estimatedTime: 20,
                                        dueDate: new Date('2025-12-30 EST'),
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
        },
        props: {
            viewMode: 'edit',
            choreId: 1,
        }
    })

    const store = useAppStore()

    wrapper.vm.chore.dueDate = ''
    wrapper.vm.chore.name = ''

    const spy = vi.spyOn(wrapper.vm, 'checkChore')
    await wrapper.find("#updateButton").trigger('click')
    expect(spy).toHaveBeenCalled()
})

test("CCT-13 and CET-13 - test cancel button", async () => {
    const wrapper = mount(Chore, {
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
                                        repeat: false,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: choreId,
                                        name: "new test name",
                                        description: "new test description",
                                        difficulty: 7,
                                        location: "Basement",
                                        estimatedTime: 20,
                                        dueDate: new Date('2025-12-30 EST'),
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
        },
        props: {
            viewMode: 'edit',
            choreId: 1,
        }
    })

    const store = useAppStore()

    const spy = vi.spyOn(wrapper.vm, 'cancel')
    await wrapper.find("#cancelButton").trigger('click')
    expect(spy).toHaveBeenCalled()
})

test("VCDT-3 - test edit button", async () => {
    const wrapper = mount(Chore, {
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
                                        repeat: false,
                                        householdId: 1,
                                        assigneeId: null,
                                    },
                                    {
                                        id: choreId,
                                        name: "new test name",
                                        description: "new test description",
                                        difficulty: 7,
                                        location: "Basement",
                                        estimatedTime: 20,
                                        dueDate: new Date('2025-12-30 EST'),
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
        },
        props: {
            viewMode: 'view',
            choreId: 1,
        }
    })

    const store = useAppStore()

    const spy = vi.spyOn(wrapper.vm, 'enterEdit')
    await wrapper.find("#editButton").trigger('click')
    expect(spy).toHaveBeenCalled()
})

test("NOFT - test the cancelDifficultyButton", async () => {
    const wrapper = mount(Chore, {
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
                                        difficulty: 3
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
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
            stubs: {
                VDialog: {
                    name: "VDialog",
                    template: '<div class="v-dialog-stub"><slot /></div>',
                    props: ['modelValue'],
                }
            },
        },
        props: {
            viewMode: 'create',
            choreId: 1,
        }
    })

    wrapper.vm.difficultyDialogOpen = true;

    await nextTick()

    const spy = vi.spyOn(wrapper.vm, 'cancelDifficulty')
    await wrapper.find("#cancelDifficultyButton").trigger('click')
    expect(spy).toHaveBeenCalled()
})

test("NOFT - test the leaveUnassignedButton", async () => {
    const wrapper = mount(Chore, {
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
                                        difficulty: 3
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
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
            stubs: {
                VDialog: {
                    name: "VDialog",
                    template: '<div class="v-dialog-stub"><slot /></div>',
                    props: ['modelValue'],
                }
            },
        },
        props: {
            viewMode: 'create',
            choreId: 1,
        }
    })

    wrapper.vm.chore = {
        name: '',
        description: '',
        difficulty: -10,
        location: "",
        estimatedTime: -20,
        dueDate: '',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    }

    wrapper.vm.difficultyDialogOpen = true;

    await nextTick()

    const spy = vi.spyOn(wrapper.vm, 'leaveUnassigned')
    await wrapper.find("#leaveUnassignedButton").trigger('click')
    expect(spy).toHaveBeenCalled()
})

test("NOFT - test the assignAnywayButton", async () => {
    const wrapper = mount(Chore, {
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
                                        difficulty: 3
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
                                        dueDate: new Date('2025-12-25 EST'),
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
                                        dueDate: new Date('2025-12-25 EST'),
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
            stubs: {
                VDialog: {
                    name: "VDialog",
                    template: '<div class="v-dialog-stub"><slot /></div>',
                    props: ['modelValue'],
                }
            },
        },
        props: {
            viewMode: 'create',
            choreId: 1,
        }
    })

    wrapper.vm.chore = {
        name: '',
        description: '',
        difficulty: -10,
        location: "",
        estimatedTime: -20,
        dueDate: '',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    }

    wrapper.vm.difficultyDialogOpen = true;

    await nextTick()

    const spy = vi.spyOn(wrapper.vm, 'assignChoreAnyway')
    await wrapper.find("#assignAnywayButton").trigger('click')
    expect(spy).toHaveBeenCalled()
})