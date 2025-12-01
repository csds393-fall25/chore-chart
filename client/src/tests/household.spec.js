import Login from "@/components/Login.vue";
import { describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Household from "@/pages/Household.vue";
import FetchService from "@/FetchService";
import ValidateLogin from "@/components/Login.vue"
import { useAppStore } from "@/stores/app.js";
import { nextTick } from "vue";

const vuetify = createVuetify({
  components,
  directives,
})
describe("Test edit and delete - no household.users set", () => {
    test("createNewHousehold deletes household if the last user leaves", async () => {
    let result = await FetchService.createHousehold({name: "delete"})
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 219,
                                householdId: result.id,
                                name: "x",
                                role: "leader",
                            },
                            household: {
                                id: result.id,

                                users: [
                                      {
                                id: 219,
                                householdId: result.id,
                                name: "x",
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
    wrapper.vm.lastFlag = true
    wrapper.vm.householdName = "efgh"
    await wrapper.vm.createNewHousehold()
    expect(wrapper.vm.lastFlag).toBe(false)
    let house = await FetchService.fetchHouseholdByJoin(wrapper.vm.joinCode)
    await nextTick()
    await FetchService.deleteHousehold(house.id)
})

test("changeRoles changeToLeader runs ", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 219,
                                householdId: 137,
                                name: "x",
                                role: "leader",
                            },
                            household: {
                                id: 137,

                                users: [
                                      {
                                id: 219,
                                householdId: 137,
                                name: "x",
                                role: "leader",
                            },  
                                      {
                                id: 457,
                                householdId: 137,
                                name: "y",
                                role: "member",
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
    wrapper.vm.roleChanging = "leader"
    wrapper.vm.roleChangingID = 457
  
    await wrapper.vm.changeRoles()
    const spy = vi.spyOn(wrapper.vm, "changeToLeader");
    expect(store.household.users[1].role).toBe("leader")




    

    
})
})

// example test format
test("temp test", () => {

    expect (1+1).toBe(2)
}) 

test("VHT-1 and VHT-2 - View Household", () => {
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
expect(wrapper.text()).toContain(wrapper.vm.leaders[0].name)

})

describe("join", async () => {
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
    wrapper.vm.householdName = "THouse1"
    await wrapper.vm.createNewHousehold()
    await nextTick()
    const houseResult = await FetchService.fetchHouseholdByJoin(store.household.joinCode)
    expect(store.household.id).toBe(houseResult.id)
    FetchService.deleteHousehold(houseResult.id)

})
})

describe("join 2", async () => {
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
    wrapper.vm.householdName = "household"
    await wrapper.vm.joinNewHousehold()
    await nextTick()
    while (!wrapper.vm.methodComplete) {
        await new Promise(resolve => setTimeout(resolve, 50));
    }
    const houseResult = await FetchService.fetchHouseholdByJoin(store.household.joinCode)
    expect(store.household.id).toBe(houseResult.id)
    wrapper.vm.showDialog = true
    wrapper.vm.householdName = "doNotEditExceptWithUnitTests"
    await wrapper.vm.joinNewHousehold()    
})
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
                                householdId: 137,
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
    wrapper.vm.householdName = "THouse2"
    const household = {
      name: wrapper.vm.householdName
    }
 const spy = vi.spyOn(wrapper.vm, "createNewHousehold");
    await wrapper.find("#newHouse").trigger("click")
    await nextTick()
    expect(spy).toHaveBeenCalled();
    // const spyOn = vi.spyOn(wrapper.vm.FetchService, "createHousehold").mockImplementation((household) => household)
    while (!wrapper.vm.methodComplete) {
        await new Promise(resolve => setTimeout(resolve, 50));
    }
    const houseResult = await FetchService.fetchHouseholdByJoin(store.household.joinCode)
    FetchService.deleteHousehold(houseResult.id)
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
                                householdId: 137,
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
    wrapper.vm.householdName = "A very long household name"
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
                                householdId: 137,
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
                                householdId: 137,
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

test("LH-2 Last member leaving", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 0,
                                householdId: 137,
                                role: "leader",
                            },
                            household: {

                                users: [
                                  
                                     {
                                        id: 457,
                                        name: "y",
                                        role: "member",
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
    wrapper.vm.showLastToLeaveDialog = false

    const store = useAppStore()
    wrapper.vm.householdName = ""
    wrapper.vm.leaveHousehold()
    expect(wrapper.vm.showLastToLeaveDialog).toBe(true)
})

test("LH-4 The user cancels the leave household operation", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 0,
                                householdId: 137,
                                role: "leader",
                            },
                            household: {

                                users: [
                                    {
                                        id: 0,
                                        name: "test",
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
     const spy = vi.spyOn(wrapper.vm, "cancel");
    await wrapper.find("#cancel").trigger("click")
    await nextTick()
    expect(spy).toHaveBeenCalled();
    
})


test("HRET-1 A household is attempted to be edited and the resulting change contains at least 1 leader. ", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 219,
                                householdId: 137,
                                role: "leader",
                            },
                            household: {

                                users: [

                                         {
                                        id: 457,
                                        name: "y",
                                        role: "member",
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
    await wrapper.vm.changeToLeader(457)

    const store = useAppStore()
    // const spy = vi.spyOn(wrapper.vm, "changeToLeader");
    // await wrapper.find("#makeLeader").trigger("click")
    await nextTick()
    //expect(spy).toHaveBeenCalled();
    expect(store.household.users[0].role).toBe("leader")

    await wrapper.vm.changeToMember(457)
   // const spy2 = vi.spyOn(wrapper.vm, "changeToMember");
    //await wrapper.find("#makeMember").trigger("click")
   // expect(spy2).toHaveBeenCalled();
    expect(store.household.users[0].role).toBe("member")
    
})

test("HRET-2 Cancel household roles changes", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 0,
                                householdId: 137,
                                role: "leader",
                            },
                            household: {

                                users: [
                                    {
                                        id: 0,
                                        name: "test",
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
     const spy = vi.spyOn(wrapper.vm, "cancel");
    await wrapper.find("#cancel").trigger("click")
    await nextTick()
    expect(spy).toHaveBeenCalled();
    
})


test("HET-1 Valid name", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 0,
                                householdId: 137,
                                role: "leader",
                            },
                            household: {
                                id: 137,

                                users: [
                                    {
                                        id: 0,
                                        name: "test",
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
    wrapper.vm.householdName = "HI"
     const spy = vi.spyOn(wrapper.vm, "editHouseholdData");
    await wrapper.find("#editHouse").trigger("click")
    await nextTick()
    expect(spy).toHaveBeenCalled();
    await nextTick()
    let result = await FetchService.fetchHousehold(137)
    expect(result.name).toBe("HI")

    
})


test("HET-2 Missing name", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 0,
                                householdId: 137,
                                role: "leader",
                            },
                            household: {
                                id: 137,

                                users: [
                                    {
                                        id: 0,
                                        name: "test",
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
    wrapper.vm.householdName = ""
     const spy = vi.spyOn(wrapper.vm, "editHouseholdData");
    await wrapper.find("#editHouse").trigger("click")
    await nextTick()
    expect(spy).toHaveBeenCalled();
    await nextTick()
    expect(wrapper.vm.errorMessages.household).toBe("Household name must be below 50 characters and have at least 1 letter")
    

    
})
test("HET-3 Invalid Name", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 0,
                                householdId: 137,
                                role: "leader",
                            },
                            household: {
                                id: 137,

                                users: [
                                    {
                                        id: 0,
                                        name: "test",
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
    wrapper.vm.householdName = "hfewugiygwetyigeyirgtiesyghregtyeigyfegryfgefhgygeyrigryiegiygsgkjlrjioreuuoigheghdgyigdiuygpiojgioehrouih"
     const spy = vi.spyOn(wrapper.vm, "editHouseholdData");
    await wrapper.find("#editHouse").trigger("click")
    await nextTick()
    expect(spy).toHaveBeenCalled();
    await nextTick()
    expect(wrapper.vm.errorMessages.household).toBe("Household name must be below 50 characters and have at least 1 letter")
    

    
})

test("HET-4 Cancel household edit", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 0,
                                householdId: 137,
                                role: "leader",
                            },
                            household: {
                                id: 137,

                                users: [
                                    {
                                        id: 0,
                                        name: "test",
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
     const spy = vi.spyOn(wrapper.vm, "cancel");
    await wrapper.find("#cancelEdit").trigger("click")
    await nextTick()
    expect(spy).toHaveBeenCalled();
    await nextTick()
    expect(wrapper.vm.showEditDialog).toBe(false)
    

    
})

test("leave household button works", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 0,
                                householdId: 137,
                                role: "leader",
                            },
                            household: {
                                id: 137,

                                users: [
                                    {
                                        id: 0,
                                        name: "test",
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
     const spy = vi.spyOn(wrapper.vm, "leaveHousehold");
    await wrapper.find("#leave").trigger("click")
    await nextTick()
    expect(spy).toHaveBeenCalled();
    await nextTick()
    expect(wrapper.vm.showEditDialog).toBe(false)
    

    
})

test("edit household button works", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 0,
                                householdId: 137,
                                role: "leader",
                            },
                            household: {
                                id: 137,

                                users: [
                                    {
                                        id: 0,
                                        name: "test",
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
     const spy = vi.spyOn(wrapper.vm, "editHousehold");
    await wrapper.find("#edit").trigger("click")
    await nextTick()
    expect(spy).toHaveBeenCalled();
    await nextTick()
})

test("showDialog v-model works", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 0,
                                householdId: 137,
                                role: "leader",
                            },
                            household: {
                                id: 137,

                                users: [
                                    {
                                        id: 0,
                                        name: "test",
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

  

  const select = wrapper.findComponent('[data-testid="dialog"]');
  await select.setValue(true)
  await nextTick()
  expect(wrapper.vm.showDialog).toBe(true)
})

test("showLastToLeaveDialog v-model works", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 0,
                                householdId: 137,
                                role: "leader",
                            },
                            household: {
                                id: 137,

                                users: [
                                    {
                                        id: 0,
                                        name: "test",
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

  

  const select = wrapper.findComponent('[data-testid="lastToLeaveDialog"]');
  await select.setValue(true)
  await nextTick()
  expect(wrapper.vm.showLastToLeaveDialog).toBe(true)
})

test("cancel last to leave button function runs", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 0,
                                householdId: 137,
                                role: "leader",
                            },
                            household: {
                                id: 137,

                                users: [
                                    {
                                        id: 0,
                                        name: "test",
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
     const spy = vi.spyOn(wrapper.vm, "cancel");
    await wrapper.find("#cancelLast").trigger("click")
    await nextTick()
    expect(spy).toHaveBeenCalled();
    

    
})

test("showConfirmation v-model works", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 0,
                                householdId: 137,
                                role: "leader",
                            },
                            household: {
                                id: 137,

                                users: [
                                    {
                                        id: 0,
                                        name: "test",
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

  

  const select = wrapper.findComponent('[data-testid="confirmation"]');
  await select.setValue(true)
  await nextTick()
  expect(wrapper.vm.showConfirmation).toBe(true)
})

test("cancel confirmation runs", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 0,
                                householdId: 137,
                                role: "leader",
                            },
                            household: {
                                id: 137,

                                users: [
                                    {
                                        id: 0,
                                        name: "test",
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
     const spy = vi.spyOn(wrapper.vm, "cancel");
    await wrapper.find("#confirmationCancel").trigger("click")
    await nextTick()
    expect(spy).toHaveBeenCalled();
    

    
})

test("changeRoles runs", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 0,
                                householdId: 137,
                                role: "leader",
                            },
                            household: {
                                id: 137,

                                users: [
                                    {
                                        id: 0,
                                        name: "test",
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
     const spy = vi.spyOn(wrapper.vm, "changeRoles");
    await wrapper.find("#changeRoles").trigger("click")
    await nextTick()
    expect(spy).toHaveBeenCalled();
    

    
})


test("showEditDialog v-model works", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 0,
                                householdId: 137,
                                role: "leader",
                            },
                            household: {
                                id: 137,

                                users: [
                                    {
                                        id: 0,
                                        name: "test",
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

  

  const select = wrapper.findComponent('[data-testid="ShowEditdialog"]');
  await select.setValue(true)
  await nextTick()
  expect(wrapper.vm.showEditDialog).toBe(true)
})

test("showLastLeaderDialog v-model works", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 0,
                                householdId: 137,
                                role: "leader",
                            },
                            household: {
                                id: 137,

                                users: [
                                    {
                                        id: 0,
                                        name: "test",
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

  

  const select = wrapper.findComponent('[data-testid="lastLeaderDialog"]');
  await select.setValue(true)
  await nextTick()
  expect(wrapper.vm.showLastLeaderDialog).toBe(true)
})


test("cancel last leader runs", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 0,
                                householdId: 137,
                                role: "leader",
                            },
                            household: {
                                id: 137,

                                users: [
                                    {
                                        id: 0,
                                        name: "test",
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
     const spy = vi.spyOn(wrapper.vm, "cancel");
    await wrapper.find("#lastLeaderCancel").trigger("click")
    await nextTick()
    expect(spy).toHaveBeenCalled();
    

    
})


test("confirmation runs on click", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 0,
                                householdId: 137,
                                role: "leader",
                            },
                            household: {
                                id: 137,

                                users: [
                                     {
                                        id: 457,
                                        name: "y",
                                        role: "member",
                                    },

                                    {
                                        id: 1,
                                        name: "unitTest",
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
     const spy = vi.spyOn(wrapper.vm, "confirmation");
    await wrapper.find("#makeMember").trigger("click")
    await nextTick()
    expect(spy).toHaveBeenCalled();
    

    
})

test("confirmation runs on click", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 0,
                                householdId: 137,
                                role: "leader",
                            },
                            household: {
                                id: 137,

                                users: [
                                     {
                                        id: 457,
                                        name: "y",
                                        role: "member",
                                    },

                                    {
                                        id: 1,
                                        name: "unitTest",
                                        role: "member",
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
     const spy = vi.spyOn(wrapper.vm, "confirmation");
    await wrapper.find("#makeLeader").trigger("click")
    await nextTick()
    expect(spy).toHaveBeenCalled();
    

    
})

test("leaveHousehold shows warning if user leaving is the last leader", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 219,
                                householdId: 137,
                                name: "x",
                                role: "leader",
                            },
                            household: {
                                id: 137,

                                users: [
                                      {
                                id: 219,
                                householdId: 137,
                                name: "x",
                                role: "leader",
                            },
                                     {
                                        id: 457,
                                        name: "y",
                                        role: "member",
                                    },

                                    {
                                        id: 1,
                                        name: "unitTest",
                                        role: "member",
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
     const spy = vi.spyOn(wrapper.vm, "leaveHousehold");
    await wrapper.find("#leave").trigger("click")
    await nextTick()
    expect(spy).toHaveBeenCalled();
    await nextTick()
    expect(wrapper.vm.showLastLeaderDialog).toBe(true)

    

    
})

test("leaveHousehold prceeds if user can leave without warnings", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 219,
                                householdId: 137,
                                name: "x",
                                role: "leader",
                            },
                            household: {
                                id: 137,

                                users: [
                                      {
                                id: 219,
                                householdId: 137,
                                name: "x",
                                role: "leader",
                            },
                                     {
                                        id: 457,
                                        name: "y",
                                        role: "leader",
                                    },

                                    {
                                        id: 1,
                                        name: "unitTest",
                                        role: "member",
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
     const spy = vi.spyOn(wrapper.vm, "leaveHousehold");
    await wrapper.find("#leave").trigger("click")
    await nextTick()
    expect(spy).toHaveBeenCalled();
    await nextTick()
    expect(wrapper.vm.showDialog).toBe(true)

    

    
})

test("JoinNewHousehold deletes household if the last user leaves", async () => {
    let result = await FetchService.createHousehold({name: "delete"})
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 219,
                                householdId: result.id,
                                name: "x",
                                role: "leader",
                            },
                            household: {
                                id: result.id,

                                users: [
                                      {
                                id: 219,
                                householdId: result.id,
                                name: "x",
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
    wrapper.vm.lastFlag = true
    wrapper.vm.householdName = "efgh"
    await wrapper.vm.joinNewHousehold()
    expect(wrapper.vm.lastFlag).toBe(false)




    

    
})

test("SwitchDialogs works correctly", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 219,
                                householdId: 137,
                                name: "x",
                                role: "leader",
                            },
                            household: {
                                id: 137,

                                users: [
                                      {
                                id: 219,
                                householdId: 137,
                                name: "x",
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
    wrapper.vm.switchDialogs()
    expect(wrapper.vm.showLastToLeaveDialog).toBe(false)
    expect(wrapper.vm.showDialog).toBe(true)



    

    
})

test("householdName v-model works", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 0,
                                householdId: 137,
                                role: "leader",
                            },
                            household: {
                                id: 137,

                                users: [
                                    {
                                        id: 0,
                                        name: "test",
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

  

  const select = wrapper.findComponent('[data-testid="houseName"]');
  await select.setValue("HI")
  await nextTick()
  expect(wrapper.vm.householdName).toBe("HI")
})

test("second householdName v-model works", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 0,
                                householdId: 137,
                                role: "leader",
                            },
                            household: {
                                id: 137,

                                users: [
                                    {
                                        id: 0,
                                        name: "test",
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

  

  const select = wrapper.findComponent('[data-testid="houseEditName"]');
  await select.setValue("HI")
  await nextTick()
  expect(wrapper.vm.householdName).toBe("HI")
})

test("A household is attempted to be edited with a name that doesn't have letters", async () => {
    const wrapper = mount(Household, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                    initialState: {
                        app: {
                            user: {
                                id: 219,
                                householdId: 137,
                                role: "leader",
                            },
                            household: {

                                users: [

                                         {
                                        id: 457,
                                        name: "y",
                                        role: "member",
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
    await wrapper.vm.changeToLeader(457)

    const store = useAppStore()
    wrapper.vm.householdName = "123"
    
    await wrapper.vm.editHouseholdData(137)

    expect(wrapper.vm.errorMessages.household).toBe("Household name must be below 50 characters and have at least 1 letter")
     wrapper.vm.householdName = "HI"
    
    await wrapper.vm.editHouseholdData(137)
    
})



















