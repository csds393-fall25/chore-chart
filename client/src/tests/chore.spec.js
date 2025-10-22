import Chore from '../pages/Chore.vue'
import { expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { useAppStore } from '@/stores/app.js';
import { createTestingPinia } from '@pinia/testing'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { useAppStore } from "@/stores/app.js";
import routes from '../router/router.js'
import FetchService from '../FetchService.js'


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

    expect(wrapper.text()).toContain('Name')
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

test("retrieveChore uses the correct value for view (chore present)", () => {
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
        dueDate: '2025-10-30',
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
        dueDate: "2025-10-30T05:00:00.000Z",
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
        dueDate: new Date('2025-10-30 EST'),
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
    
//enterEdit()