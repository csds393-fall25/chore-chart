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
                                    id: 1,
    
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
                                    id: 1,
    
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
    expect(result.content).toBe("hello")
    expect(result.authorId).toBe(8)

         
           store.user.id = 8
           wrapper.vm.text = ""
       let result2 = await wrapper.vm.deletePost(result.id)
        await nextTick()
        expect(result2.deleted).toBe(true)
    
})

test("DBBI-2 User deletes post/poll unsuccessfully due to not being the author of it.", async () => {
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
                                    id: 1,
    
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

        expect(wrapper.text()).not.toContain("Delete")
   
})

test("DBBI-3 User cancels deletion on dialog for post/poll", async () => {
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
                                    id: 1,
    
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
     const spy = vi.spyOn(wrapper.vm, "cancel");
    await wrapper.find("#cancelButton").trigger("click")
    await nextTick()
    expect(spy).toHaveBeenCalled();
    expect(wrapper.vm.showDialog).toBe(false)


   
})

test("RBBI-3 Like a post", async () => {
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
                                    id: 1,
    
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
    expect(result.content).toBe("hello")
    expect(result.authorId).toBe(8)

         
           store.user.id = 8
           wrapper.vm.text = ""
       let result2 = await wrapper.vm.likePost(result.id, 0)
        await nextTick()
        expect(result2.likeCount).toBe(1)


   
})


test("Add button calls add function", async () => {
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
                                    id: 1,
    
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
     const spy = vi.spyOn(wrapper.vm, "addPost");
    await wrapper.find("#addButton").trigger("click")
    await nextTick()
    expect(spy).toHaveBeenCalled();
    expect(wrapper.vm.showDialog).toBe(true)
})

test("like button calls like function and delete button deletes post", async () => {
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
                                    id: 1,
    
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
    expect(result.content).toBe("hello")
    expect(result.authorId).toBe(8)
    const spy = vi.spyOn(wrapper.vm, "likePost");
    await wrapper.find("#like").trigger("click")
    await nextTick()
    expect(spy).toHaveBeenCalled();
    const spy2 = vi.spyOn(wrapper.vm, "deletePost");
    await wrapper.find("#delete").trigger("click")
    await nextTick()
    expect(spy2).toHaveBeenCalled();

})

test("showDialog v-model works", async () => {
    const wrapper = mount(Bulletin, {
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


test("text v-model works", async () => {
    const wrapper = mount(Bulletin, {
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

  

  const select = wrapper.findComponent('[data-testid="text"]');
  await select.setValue("hi")
  await nextTick()
  expect(wrapper.vm.text).toBe("hi")
})

test("post button calls post function", async () => {
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
                                    id: 1,
    
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
     const spy = vi.spyOn(wrapper.vm, "post");
    await wrapper.find("#PostButton").trigger("click")
    await nextTick()
    expect(spy).toHaveBeenCalled();
})
