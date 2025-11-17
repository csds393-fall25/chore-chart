import Login from "@/components/Login.vue";
import { expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Household from "@/components/Household.vue";
import FetchService from "@/FetchService";
import ValidateLogin from "@/components/Login.vue"
import { useAppStore } from "@/stores/app.js";
import { nextTick } from "vue";

const vuetify = createVuetify({
  components,
  directives,
})

// example test format
test("temp test", () => {

    expect (1+1).toBe(2)
}) 

test("VHT-1 View Household", () => {
    const wrapper = mount(Household, {
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
                                 {
                                id: 482,
                                name: "test2",
                                householdId: 1,
                                role: "leader",
                            },
                                ],
                            },
                        },
                    },
                }),
                [vuetify],
            
            ],
        },
       
    })

    const store = useAppStore()

store.household = 1;

expect(wrapper.text()).toContain(wrapper.vm.members[0].name)
expect(wrapper.text()).toContain(wrapper.vm.members[1].name)

})

test("LH-1 Leave as not last member and provide valid input (create new household)", async () => {
    const wrapper = mount(Household, {
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
                                        id: 0,
                                        name: "test",
                                        role: "member",
                                    },
                                 {
                                id: 482,
                                name: "test2",
                                householdId: 1,
                                role: "leader",
                            },
                                ],
                            },
                        },
                    },
                }),
                [vuetify],
            
            ],

             stubs: {
    VDialog: {
      name: "VDialog",
      template: '<div class="v-dialog-stub"><slot /></div>',
      props: ['modelValue',
      ]
    }
  }
        },
       
    })

    const store = useAppStore()
    wrapper.vm.showDialog = true
    wrapper.vm.householdName = "THouse"
    await wrapper.vm.createNewHousehold()
    await nextTick()
    const houseResult = await FetchService.fetchHouseholdByJoin(store.household.joinCode)
    expect(store.household.id).toBe(houseResult.id)

})

test("LH-1 Leave as not last member and provide valid input (join an existing household)", async () => {
    const wrapper = mount(Household, {
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
                                        id: 0,
                                        name: "test",
                                        role: "member",
                                    },
                                 {
                                id: 482,
                                name: "test2",
                                householdId: 1,
                                role: "leader",
                            },
                                ],
                            },
                        },
                    },
                }),
                [vuetify],
            
            ],

             stubs: {
    VDialog: {
      name: "VDialog",
      template: '<div class="v-dialog-stub"><slot /></div>',
      props: ['modelValue',
      ]
    }
  }
        },
       
    })

    const store = useAppStore()
    wrapper.vm.showDialog = true
    wrapper.vm.householdName = "Codorado1234"
    await wrapper.vm.joinNewHousehold()
    await nextTick()
    const houseResult = await FetchService.fetchHouseholdByJoin(store.household.joinCode)
    expect(store.household.id).toBe(houseResult.id)

})

test("createNewHousehold is run when button is pressed ", async () => {
    const wrapper = mount(Household, {
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
                                        id: 0,
                                        name: "test",
                                        role: "member",
                                    },
                                 {
                                id: 482,
                                name: "test2",
                                householdId: 1,
                                role: "leader",
                            },
                                ],
                            },
                        },
                    },
                }),
                [vuetify],
            
            ],

             stubs: {
    VDialog: {
      name: "VDialog",
      template: '<div class="v-dialog-stub"><slot /></div>',
      props: ['modelValue',
      ]
    }
  }
        },
       
    })

    const store = useAppStore()
    wrapper.vm.showDialog = true
    wrapper.vm.householdName = "THouse"
 const spy = vi.spyOn(wrapper.vm, "createNewHousehold");
    await wrapper.find("#newHouse").trigger("click")
    await nextTick()
    expect(spy).toHaveBeenCalled();
})

test("joinNewHousehold is run when button is pressed ", async () => {
    const wrapper = mount(Household, {
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
                                        id: 0,
                                        name: "test",
                                        role: "member",
                                    },
                                 {
                                id: 482,
                                name: "test2",
                                householdId: 1,
                                role: "leader",
                            },
                                ],
                            },
                        },
                    },
                }),
                [vuetify],
            
            ],

             stubs: {
    VDialog: {
      name: "VDialog",
      template: '<div class="v-dialog-stub"><slot /></div>',
      props: ['modelValue',
      ]
    }
  }
        },
       
    })

    const store = useAppStore()
    wrapper.vm.showDialog = true
 const spy = vi.spyOn(wrapper.vm, "joinNewHousehold");
    await wrapper.find("#existingHouse").trigger("click")
    await nextTick()
    expect(spy).toHaveBeenCalled();
})


test("LH-3 Invalid input (create new household)", async () => {
    const wrapper = mount(Household, {
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
                                        id: 0,
                                        name: "test",
                                        role: "member",
                                    },
                                 {
                                id: 482,
                                name: "test2",
                                householdId: 1,
                                role: "leader",
                            },
                                ],
                            },
                        },
                    },
                }),
                [vuetify],
            
            ],

             stubs: {
    VDialog: {
      name: "VDialog",
      template: '<div class="v-dialog-stub"><slot /></div>',
      props: ['modelValue',
      ]
    }
  }
        },
       
    })

    const store = useAppStore()
    wrapper.vm.showDialog = true
    wrapper.vm.householdName = ""
    await wrapper.vm.createNewHousehold()
    await nextTick()
    expect(wrapper.vm.errorMessages.household).toBe("Household name must be below 50 characters and have at least 1 letter")

})

test("LH-3 Invalid input (join an existing household)", async () => {
    const wrapper = mount(Household, {
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
                                        id: 0,
                                        name: "test",
                                        role: "member",
                                    },
                                 {
                                id: 482,
                                name: "test2",
                                householdId: 1,
                                role: "leader",
                            },
                                ],
                            },
                        },
                    },
                }),
                [vuetify],
            
            ],

             stubs: {
    VDialog: {
      name: "VDialog",
      template: '<div class="v-dialog-stub"><slot /></div>',
      props: ['modelValue',
      ]
    }
  }
        },
       
    })

    const store = useAppStore()
    wrapper.vm.showDialog = true
    wrapper.vm.householdName = ""
    await wrapper.vm.joinNewHousehold()
    await nextTick()
    expect(wrapper.vm.errorMessages.household).toBe("Join code does not exist" )
})




