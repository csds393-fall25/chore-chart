import { expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { useAppStore } from "@/stores/app.js";
import Leaderboard from "@/pages/Leaderboard.vue";
import { nextTick } from 'vue'
import Bulletin from '@/pages/Bulletin.vue'
import FetchService from '@/FetchService'
const vuetify = createVuetify({
  components,
  directives,
})

// example test format
test("temp test", () => {

    expect (1+1).toBe(2)
}) 

test("NOFT - contentLines returns a list of the lines in the content ", async () => {
    const wrapper = mount(Bulletin, {
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
                                    },
                                ],
                            },
                            bulletin: {
                                items: [
                                    {
                                        id: 40,
                                        text: "doNotDeletePost",
                                        authorId: 0,
                                        likeCount: 0
                                    }
                                ]
                            }
                        },
                    },
                }),
                [vuetify],
            ],
            stubs: {
                VDialog: {
                    name: "VDialog",
                    template: '<div class="v-dialog-stub"><slot /></div>',
                    props: ['modelValue']
                }
            }
        },
    })
    
    expect(wrapper.vm.contentLines("this\nis\nmultiple\nlines")).toEqual([
        {key: 0, line: "this"}, 
        {key: 1, line: "is"}, 
        {key: 2, line: "multiple"}, 
        {key: 3, line: "lines"}
    ])
})

test(" View bulletin board ", async () => {
    const wrapper = mount(Bulletin, {
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
                                        },
                                     
                                  
                                    ],
                                },
                                bulletin: {
                                    items: [
                                        {
                                            id: 40,
                                            text: "doNotDeletePost",
                                            authorId: 0,
                                            likeCount: 0
                                        }
                                    ]
                                        
                                    
                                }
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
        console.log(store.bulletin.items)
        await nextTick()
    expect(wrapper.text()).toContain("Add")
    
})

test(" ABB-1 User makes a post on the bulletin board successfully", async () => {
    const wrapper = mount(Bulletin, {
            global: {
                plugins: [
                    createTestingPinia({
                        createSpy: vi.fn,
                        initialState: {
                            app: {
                                user: {
                                    id: 8,
                                    householdId: 1,
                                    role: "leader",
                                },
                                household: {
    
                                    users: [
    
                                             {
                                            id: 8,
                                        },
                                     
                                  
                                    ],
                                },
                                bulletin: {
                                    items: [
                                        {
                                            id: 40,
                                            text: "doNotDeletePost",
                                            authorId: 0,
                                            likeCount: 0
                                        }
                                    ]
                                        
                                    
                                }
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
           store.user.id = 8
           wrapper.vm.text = "hello"
       let result = await wrapper.vm.post()
        await nextTick()
        console.log(result)
    expect(result.content).toBe("hello")
    expect(result.authorId).toBe(8)
    
})

test("ABB-3 User makes a post unsuccessfully", async () => {
    const wrapper = mount(Bulletin, {
            global: {
                plugins: [
                    createTestingPinia({
                        createSpy: vi.fn,
                        initialState: {
                            app: {
                                user: {
                                    id: 8,
                                    householdId: 1,
                                    role: "leader",
                                },
                                household: {
    
                                    users: [
    
                                             {
                                            id: 8,
                                        },
                                     
                                  
                                    ],
                                },
                                bulletin: {
                                    items: [
                                        {
                                            id: 40,
                                            text: "doNotDeletePost",
                                            authorId: 0,
                                            likeCount: 0
                                        }
                                    ]
                                        
                                    
                                }
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
           store.user.id = 8
           wrapper.vm.text = ""
       let result = await wrapper.vm.post()
        await nextTick()
        console.log(result)
    expect(wrapper.vm.errorMessages.text).toBe("Post must have a message")
    
})

test("DBBI-1 User deletes post/poll successfully", async () => {
    const wrapper = mount(Bulletin, {
            global: {
                plugins: [
                    createTestingPinia({
                        createSpy: vi.fn,
                        initialState: {
                            app: {
                                user: {
                                    id: 8,
                                    householdId: 1,
                                    role: "leader",
                                },
                                household: {
    
                                    users: [
    
                                             {
                                            id: 8,
                                        },
                                     
                                  
                                    ],
                                },
                                bulletin: {
                                    items: [
                                        {
                                            id: 40,
                                            text: "doNotDeletePost",
                                            authorId: 0,
                                            likeCount: 0
                                        }
                                    ]
                                        
                                    
                                }
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
           store.user.id = 8
           wrapper.vm.text = "hello"
       let result = await wrapper.vm.post()
        await nextTick()
        console.log(result)
    expect(result.content).toBe("hello")
    expect(result.authorId).toBe(8)

         
           store.user.id = 8
           wrapper.vm.text = ""
       let result2 = await wrapper.vm.delete()
        await nextTick()
        console.log(result2.authorId).toBe(8)
    
})