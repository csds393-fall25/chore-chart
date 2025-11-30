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
import FetchService from '../FetchService.js'

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
            stubs: {
                VTabs: {
                    name: "VTabs",
                    template: '<div class="v-tabs-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTab: {
                    name: "VTab",
                    template: '<div class="v-tab-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTabsWindow: {
                    name: "VTabsWindow",
                    template: '<div class="v-tabs-window-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTabsWindowItem: {
                    name: "VTabsWindowItem",
                    template: '<div class="v-tabs-window-item-stub"><slot /></div>',
                    props: ['modelValue'],
                }
            }
        }
    })

    //flushPromises wouldn't work for some reason so I need to wait for a state to change at the end of onMounted manually
    while(!wrapper.vm.mounted) {
        await new Promise(resolve => setTimeout(resolve, 50))
    }
    
    await nextTick()

    expect(wrapper.text()).toContain('Store')

    expect(wrapper.text()).toContain("Equipped")

    expect(wrapper.text()).toContain("pts")
})

//isOwned
test("ST-3 - isOwned returns correctly", async () => {
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
            stubs: {
                VTabs: {
                    name: "VTabs",
                    template: '<div class="v-tabs-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTab: {
                    name: "VTab",
                    template: '<div class="v-tab-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTabsWindow: {
                    name: "VTabsWindow",
                    template: '<div class="v-tabs-window-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTabsWindowItem: {
                    name: "VTabsWindowItem",
                    template: '<div class="v-tabs-window-item-stub"><slot /></div>',
                    props: ['modelValue'],
                }
            }
        }
    })

    const store = useAppStore()

    //flushPromises wouldn't work for some reason so I need to wait for a state to change at the end of onMounted manually
    while(!wrapper.vm.mounted) {
        await new Promise(resolve => setTimeout(resolve, 50))
    }

    expect(wrapper.vm.isOwned(store.allProps.find((prop) => prop.id == 7))).toBe(true)
    expect(wrapper.vm.isOwned(store.allProps.find((prop) => prop.id == 15))).toBe(false)
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
            stubs: {
                VTabs: {
                    name: "VTabs",
                    template: '<div class="v-tabs-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTab: {
                    name: "VTab",
                    template: '<div class="v-tab-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTabsWindow: {
                    name: "VTabsWindow",
                    template: '<div class="v-tabs-window-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTabsWindowItem: {
                    name: "VTabsWindowItem",
                    template: '<div class="v-tabs-window-item-stub"><slot /></div>',
                    props: ['modelValue'],
                }
            }
        }
    })

    const store = useAppStore()

    //flushPromises wouldn't work for some reason so I need to wait for a state to change at the end of onMounted manually
    while(!wrapper.vm.mounted) {
        await new Promise(resolve => setTimeout(resolve, 50))
    }

    let result = await wrapper.vm.buyProp(store.allProps.find((prop) => prop.id == 10))

    expect(result).toBe(true)
    expect(wrapper.vm.ownedProps.some((prop) => prop == 10)).toBe(true)
    expect(store.user.currentPoints).toBe(20)

    await FetchService.unbuyProp(6, 10)
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
            stubs: {
                VTabs: {
                    name: "VTabs",
                    template: '<div class="v-tabs-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTab: {
                    name: "VTab",
                    template: '<div class="v-tab-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTabsWindow: {
                    name: "VTabsWindow",
                    template: '<div class="v-tabs-window-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTabsWindowItem: {
                    name: "VTabsWindowItem",
                    template: '<div class="v-tabs-window-item-stub"><slot /></div>',
                    props: ['modelValue'],
                }
            }
        }
    })

    const store = useAppStore()

    //flushPromises wouldn't work for some reason so I need to wait for a state to change at the end of onMounted manually
    while(!wrapper.vm.mounted) {
        await new Promise(resolve => setTimeout(resolve, 50))
    }

    let result = await wrapper.vm.buyProp(store.allProps.find((prop) => prop.id == 9))

    expect(wrapper.vm.tooExpensiveDialogOpen).toBe(true)
    expect(result).toBe(false)
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
            stubs: {
                VTabs: {
                    name: "VTabs",
                    template: '<div class="v-tabs-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTab: {
                    name: "VTab",
                    template: '<div class="v-tab-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTabsWindow: {
                    name: "VTabsWindow",
                    template: '<div class="v-tabs-window-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTabsWindowItem: {
                    name: "VTabsWindowItem",
                    template: '<div class="v-tabs-window-item-stub"><slot /></div>',
                    props: ['modelValue'],
                }
            }
        }
    })

    const store = useAppStore()

    //flushPromises wouldn't work for some reason so I need to wait for a state to change at the end of onMounted manually
    while(!wrapper.vm.mounted) {
        await new Promise(resolve => setTimeout(resolve, 50))
    }

    await wrapper.vm.equipProp(store.allProps.find((prop) => prop.id == 8))

    expect(wrapper.vm.usersAvatar.hat.id).toEqual(8)
    expect(store.avatars.find((avatar) => avatar.userId == 6).hat.id).toBe(8)

    await wrapper.vm.equipProp(store.allProps.find((prop) => prop.id == 2))
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
                                    skinTone: {
                                        url: "skinToneURL",
                                        id: 7
                                    },
                                    hat: {
                                        url: "hatURL",
                                        id: 2
                                    },
                                    hair: {
                                        url: "hairURL",
                                        id: 4,
                                    },
                                    shirt: {
                                        url: "shirtURL",
                                        id: 3
                                    },
                                    background: {
                                        url: "backgroundURL",
                                        id: 5
                                    },
                                    handProp: {
                                        url: "handPropURL",
                                        id: 1
                                    }
                                }
                            ]
                        },
                    },
                }),
                [vuetify],
                routes,
            ],
            stubs: {
                VTabs: {
                    name: "VTabs",
                    template: '<div class="v-tabs-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTab: {
                    name: "VTab",
                    template: '<div class="v-tab-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTabsWindow: {
                    name: "VTabsWindow",
                    template: '<div class="v-tabs-window-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTabsWindowItem: {
                    name: "VTabsWindowItem",
                    template: '<div class="v-tabs-window-item-stub"><slot /></div>',
                    props: ['modelValue'],
                }
            }
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
                                    skinTone: {
                                        url: "skinToneURL",
                                        id: 7
                                    },
                                    hat: {
                                        url: "hatURL",
                                        id: 2
                                    },
                                    hair: {
                                        url: "hairURL",
                                        id: 4,
                                    },
                                    shirt: {
                                        url: "shirtURL",
                                        id: 3
                                    },
                                    background: {
                                        url: "backgroundURL",
                                        id: 5
                                    },
                                    handProp: {
                                        url: "handPropURL",
                                        id: 1
                                    }
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
                },
                VTabs: {
                    name: "VTabs",
                    template: '<div class="v-tabs-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTab: {
                    name: "VTab",
                    template: '<div class="v-tab-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTabsWindow: {
                    name: "VTabsWindow",
                    template: '<div class="v-tabs-window-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTabsWindowItem: {
                    name: "VTabsWindowItem",
                    template: '<div class="v-tabs-window-item-stub"><slot /></div>',
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

test("NOFT - tabs v-model works correctly", async () => {
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
                                    skinTone: {
                                        url: "skinToneURL",
                                        id: 7
                                    },
                                    hat: {
                                        url: "hatURL",
                                        id: 2
                                    },
                                    hair: {
                                        url: "hairURL",
                                        id: 4,
                                    },
                                    shirt: {
                                        url: "shirtURL",
                                        id: 3
                                    },
                                    background: {
                                        url: "backgroundURL",
                                        id: 5
                                    },
                                    handProp: {
                                        url: "handPropURL",
                                        id: 1
                                    }
                                }
                            ]
                        },
                    },
                }),
                [vuetify],
                routes,
            ],
            stubs: {
                VTabs: {
                    name: "VTabs",
                    template: '<div class="v-tabs-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTab: {
                    name: "VTab",
                    template: '<div class="v-tab-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTabsWindow: {
                    name: "VTabsWindow",
                    template: '<div class="v-tabs-window-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTabsWindowItem: {
                    name: "VTabsWindowItem",
                    template: '<div class="v-tabs-window-item-stub"><slot /></div>',
                    props: ['modelValue'],
                }
            },
        }
    })

    wrapper.vm.tab = 'shirt';

    await nextTick()

    const tabMenu = wrapper.findComponent('[data-testid="tabMenu"]')
    const tabWindow = wrapper.findComponent('[data-testid="tabWindow"]')

    await tabMenu.setValue('skinTone')

    await nextTick()

    expect(wrapper.vm.tab).toBe('skinTone');

    await tabWindow.setValue('background')

    expect(wrapper.vm.tab).toBe('background');
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
                                    skinTone: {
                                        url: "skinToneURL",
                                        id: 7
                                    },
                                    hat: {
                                        url: "hatURL",
                                        id: 2
                                    },
                                    hair: {
                                        url: "hairURL",
                                        id: 4,
                                    },
                                    shirt: {
                                        url: "shirtURL",
                                        id: 3
                                    },
                                    background: {
                                        url: "backgroundURL",
                                        id: 5
                                    },
                                    handProp: {
                                        url: "handPropURL",
                                        id: 1
                                    }
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
                },
                VTabs: {
                    name: "VTabs",
                    template: '<div class="v-tabs-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTab: {
                    name: "VTab",
                    template: '<div class="v-tab-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTabsWindow: {
                    name: "VTabsWindow",
                    template: '<div class="v-tabs-window-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTabsWindowItem: {
                    name: "VTabsWindowItem",
                    template: '<div class="v-tabs-window-item-stub"><slot /></div>',
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
                                    skinTone: {
                                        url: "skinToneURL",
                                        id: 7
                                    },
                                    hat: {
                                        url: "hatURL",
                                        id: 2
                                    },
                                    hair: {
                                        url: "hairURL",
                                        id: 4,
                                    },
                                    shirt: {
                                        url: "shirtURL",
                                        id: 3
                                    },
                                    background: {
                                        url: "backgroundURL",
                                        id: 5
                                    },
                                    handProp: {
                                        url: "handPropURL",
                                        id: 1
                                    }
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
                },
                VTabs: {
                    name: "VTabs",
                    template: '<div class="v-tabs-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTab: {
                    name: "VTab",
                    template: '<div class="v-tab-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTabsWindow: {
                    name: "VTabsWindow",
                    template: '<div class="v-tabs-window-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTabsWindowItem: {
                    name: "VTabsWindowItem",
                    template: '<div class="v-tabs-window-item-stub"><slot /></div>',
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
                },
                VTabs: {
                    name: "VTabs",
                    template: '<div class="v-tabs-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTab: {
                    name: "VTab",
                    template: '<div class="v-tab-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTabsWindow: {
                    name: "VTabsWindow",
                    template: '<div class="v-tabs-window-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTabsWindowItem: {
                    name: "VTabsWindowItem",
                    template: '<div class="v-tabs-window-item-stub"><slot /></div>',
                    props: ['modelValue'],
                }
            },
        }
    })

    //flushPromises wouldn't work for some reason so I need to wait for a state to change at the end of onMounted manually
    while(!wrapper.vm.mounted) {
        await new Promise(resolve => setTimeout(resolve, 50))
    }

    const spy = vi.spyOn(wrapper.vm, 'equipProp').mockImplementation((prop) => true);

    await wrapper.find('#equipButton').trigger("click")
    expect(spy).toHaveBeenCalled();
})

test("NOFT - test don't update all props if already have them", async () => {
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
                                    skinTone: {
                                        url: "skinToneURL",
                                        id: 7
                                    },
                                    hat: {
                                        url: "hatURL",
                                        id: 2
                                    },
                                    hair: {
                                        url: "hairURL",
                                        id: 4,
                                    },
                                    shirt: {
                                        url: "shirtURL",
                                        id: 3
                                    },
                                    background: {
                                        url: "backgroundURL",
                                        id: 5
                                    },
                                    handProp: {
                                        url: "handPropURL",
                                        id: 1
                                    }
                                }
                            ],
                            allProps: [
                                {
                                    id: 1,
                                    name: 'BlueBook',
                                    type: 'handProp',
                                    cost: 150,
                                    url: 'https://chore-chart-s3.s3.us-east-1.amazonaws.com/avatar-props/BlueBook.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA5SLACB4XQIT5NCIR%2F20251124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251124T015043Z&X-Amz-Expires=3600&X-Amz-Signature=7321c9975e8d826832e0596baecdb58fb5a43bcfbc92dadc16869ce16d08d832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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
                },
                VTabs: {
                    name: "VTabs",
                    template: '<div class="v-tabs-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTab: {
                    name: "VTab",
                    template: '<div class="v-tab-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTabsWindow: {
                    name: "VTabsWindow",
                    template: '<div class="v-tabs-window-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VTabsWindowItem: {
                    name: "VTabsWindowItem",
                    template: '<div class="v-tabs-window-item-stub"><slot /></div>',
                    props: ['modelValue'],
                }
            },
        }
    })

    //flushPromises wouldn't work for some reason so I need to wait for a state to change at the end of onMounted manually
    while(!wrapper.vm.mounted) {
        await new Promise(resolve => setTimeout(resolve, 50))
    }

    const spy = vi.spyOn(wrapper.vm.FetchService, 'getAvatarProps')
    expect(spy).not.toHaveBeenCalled();
})