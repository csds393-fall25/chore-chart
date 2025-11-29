import Avatar from '@/components/Avatar.vue';
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

const vuetify = createVuetify({
    components,
    directives,
})

vi.stubGlobal('visualViewport', new EventTarget())


test("User cancels out of the profile dialog", async () => {
    const wrapper = mount(Avatar, {
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
test("testing profileDialog v-model", async () => {
    const wrapper = mount(Avatar, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
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
}
})

wrapper.vm.isUpdate = true
    await nextTick()

const select = wrapper.findComponent('[data-testid="profileDialog"]');
    await nextTick()
    await select.setValue("true")
    await nextTick()
    expect(wrapper.vm.profileDialog).toBe("true")
})

test("profile() works as expected", async () => {
    const wrapper = mount(Avatar, {
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

         props: {
            userID: 0,
            dis: false
            
        }
       
    })

    const store = useAppStore()
    console.log(store.household.users)
    wrapper.vm.profile()
    await nextTick()
    expect(wrapper.vm.profileDialog).toBe(true)
   
   
    
})


test("profile() works as expected", async () => {
    const wrapper = mount(Avatar, {
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

         props: {
            userID: 0,
            dis: true
            
        }
       
    })

    const store = useAppStore()
    wrapper.vm.profile()
    await nextTick()
    expect(wrapper.vm.profileDialog).toBe(false)
   
   
    
})

