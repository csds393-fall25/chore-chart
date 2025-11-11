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

test("Chore renders correctly", () => {
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

test("Chore reroutes to view if a member opens it in edit", async () => {
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
test("retrieveChore uses the correct value for create", () => {
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

test("retrieveChore uses the correct value for update (chore not present)", () => {
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

test("retrieveChore uses the correct value for update (chore present)", () => {
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

test("retrieveChore uses the correct value for view (chore not present)", () => {
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

test("retrieveChore uses the correct value for view (chore present and unassigned)", () => {
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

test("retrieveChore uses the correct value for view (chore present and assigned)", () => {
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

test("retrieveChore reroutes when the chore is not in the household", async () => {
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
test("validateChore returns correctly for missing name", () => {
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
        estimatedTime: "20",
        dueDate: '2025-12-25',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    }

    const result = wrapper.vm.validateChore()
    expect(result).toBe(false)
})

test("validateChore returns correctly for missing difficulty", () => {
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
        estimatedTime: "20",
        dueDate: '2025-12-25',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    }

    const result = wrapper.vm.validateChore()
    expect(result).toBe(false)
})

test("validateChore returns correctly for missing location", () => {
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
        estimatedTime: "20",
        dueDate: '2025-12-25',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    }

    const result = wrapper.vm.validateChore()
    expect(result).toBe(false)
})

test("validateChore returns correctly for missing estimated time", () => {
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

test("validateChore returns correctly for negative estimated time", () => {
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

test("validateChore returns correctly for missing due date", () => {
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
        estimatedTime: "20",
        dueDate: '',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    }

    const result = wrapper.vm.validateChore()
    expect(result).toBe(false)
})

test("validateChore returns correctly for due date before current date", () => {
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
        estimatedTime: "20",
        dueDate: '2025-10-10',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    }

    const result = wrapper.vm.validateChore()
    expect(result).toBe(false)
})

test("validateChore returns correctly for correct chore", () => {
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
        estimatedTime: "20",
        dueDate: '2025-12-30',
        repeat: false,
        householdId: 1,
        assigneeId: null,
    }

    const result = wrapper.vm.validateChore()
    expect(result).toBe(true)
})

//The id of the chore we create so that we can edit it in the update method and then delete it
let choreId = 0;

//createChore()
test("createChore returns correctly", async () => {
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
        estimatedTime: "20",
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
test("updateChore returns correctly", async () => {
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
test("cancel when chore is in edit mode", async () => {
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

test("cancel when chore is not in edit mode", async () => {
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
test("enter edit reroutes properly", async () => {
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

//Test v-models
test("test v-model chore.name", async () => {
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

test("test v-model chore.description", async () => {
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

test("test v-model chore.difficulty", async () => {
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

test("test v-model chore.location", async () => {
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

test("test v-model chore.estimatedTime", async () => {
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

    await wrapper.find("#estimatedTime").setValue('120');
    expect(wrapper.vm.chore.estimatedTime).toBe('120');
})

test("test v-model chore.dueDate", async () => {
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

test("test v-model chore.assigneeId", async () => {
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
test("test create button", async () => {
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

    const spy = vi.spyOn(wrapper.vm, 'createChore')
    await wrapper.find("#createButton").trigger('click')
    expect(spy).toHaveBeenCalled()
})

test("test update button", async () => {
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

    const spy = vi.spyOn(wrapper.vm, 'updateChore')
    await wrapper.find("#updateButton").trigger('click')
    expect(spy).toHaveBeenCalled()
})

test("test cancel button", async () => {
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

test("test edit button", async () => {
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

test("Chore reroutes properly if a member tries to reroute to edit mode", async () => {
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
            viewMode: 'view',
            choreId: 1,
        }
    })

    console.log("before expected call")

    router.push({
        name: 'editChore',
        params: { id: 1 }
    })

    nextTick()

    expect(spy).toHaveBeenCalledWith({
        name: 'viewChore',
        params: { id: 1 }
    });
})