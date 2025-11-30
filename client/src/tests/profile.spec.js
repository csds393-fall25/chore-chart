import { expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { useAppStore } from '@/stores/app.js';
import { createTestingPinia } from '@pinia/testing'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { useAppStore } from "@/stores/app.js";
import Profile from "@/pages/Profile.vue";
import Login from '@/components/Login.vue';
import FetchService from '@/FetchService';
import { nextTick } from "vue";
const vuetify = createVuetify({
  components,
  directives,
})

// example test format
test("temp test", () => {
    expect (1+1).toBe(2)
}) 

test("PET-1 Edited fields are all valid", async () => {
    const wrapper = mount(Profile, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
    const store = useAppStore()
    const randomdiff = 5
    const randomtime = 50
    store.user.id = 219
    wrapper.vm.name = "y"
    wrapper.vm.username = "x"
    wrapper.vm.maxDifficulty = randomdiff
    wrapper.vm.estimatedTime = randomtime
    wrapper.vm.isUpdate = true
    await nextTick()
    const spy = vi.spyOn(wrapper.vm, "updateProfile");
     await wrapper.find("#update").trigger("click")
    await nextTick()
    expect(spy).toHaveBeenCalled();
    await wrapper.vm.updateProfile()
    expect(store.user.name).toBe("y")
    expect(store.user.difficulty).toBe(randomdiff)
    expect(store.user.maxChoreTime).toBe(randomtime)
})

test("PET-2 Name field is updated without a name.", async () => {
    const wrapper = mount(Profile, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
    const store = useAppStore()
    const randomdiff = Math.floor(Math.random()*10)
    const randomtime = Math.floor(Math.random()*100)
    store.user.id = 219
    wrapper.vm.name = ""
    wrapper.vm.username = "x"
    wrapper.vm.maxDifficulty = randomdiff
    wrapper.vm.estimatedTime = randomtime
    await wrapper.vm.updateProfile()
    expect(wrapper.vm.errorMessages.name).toBe("name must exist")
})

test("PET-4 Maximum difficulty is updated without a value", async () => {
    const wrapper = mount(Profile, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
    const store = useAppStore()
    const randomtime = Math.floor(Math.random()*100)
    store.user.id = 219
    wrapper.vm.name = "x"
    wrapper.vm.username = "x"
    wrapper.vm.maxDifficulty = null
    wrapper.vm.estimatedTime = randomtime
    await wrapper.vm.updateProfile()
    expect(wrapper.vm.errorMessages.maxDiff).toBe("Maximum difficulty must be between 1 and 10")
})

test("PET-3 Estimated time is updated without a value", async () => {
    const wrapper = mount(Profile, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
    const store = useAppStore()
    const randomdiff = Math.floor(Math.random()*10)
    store.user.id = 219
    wrapper.vm.name = "x"
    wrapper.vm.username = "x"
    wrapper.vm.maxDifficulty = randomdiff
    wrapper.vm.estimatedTime = null
    await wrapper.vm.updateProfile()
    expect(wrapper.vm.errorMessages.estTime).toBe("Estimated time must be greater than 0")
   
})

test("PET-6 Error messages removed when information is correct.", async () => {
    const wrapper = mount(Profile, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
    const store = useAppStore()
    const randomdiff = Math.floor(Math.random()*10)
    const randomtime = Math.floor(Math.random()*100)
    store.user.id = 219
    wrapper.vm.name = "x"
    wrapper.vm.username = "x"
    wrapper.vm.maxDifficulty = randomdiff
    wrapper.vm.estimatedTime = null
    await wrapper.vm.updateProfile()
    expect(wrapper.vm.errorMessages.estTime).toBe("Estimated time must be greater than 0")
    wrapper.vm.estimatedTime = randomtime
    await wrapper.vm.updateProfile()
    expect(wrapper.vm.errorMessages.estTime).toBe("")

})

test("PVT-1 Profile information is viewed successfully", async () => {
    const wrapper = mount(Profile, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
    const store = useAppStore()
    store.user.id = 219
    wrapper.vm.name = "x"
    wrapper.vm.username = "x"
    wrapper.vm.maxDifficulty = 4
    wrapper.vm.estimatedTime = 40
    await wrapper.vm.updateProfile()
    expect(wrapper.text()).toContain('Name: x')
    expect(wrapper.text()).toContain('Email: x')
    expect(wrapper.text()).toContain("Estimated Time To Complete Chores (minutes): 40")
    expect(wrapper.text()).toContain("Maximum Difficulty: 4")

})

test("PDT-1 Profile is deleted", async () => {
  const wrapper = mount(Profile, {
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
  const store = useAppStore()
  store.user.id = -1
  wrapper.vm.displayedName = "Mollietest"
  wrapper.vm.username = "validateProfile12@qq.com" 
  wrapper.vm.password = "Mtest1234"
  wrapper.vm.maxDifficulty = 3
  wrapper.vm.estimatedTime = 27
  wrapper.vm.repeatedPassword = "Mtest1234"
  wrapper.vm.isJoin = false

  const user = {
    name:  wrapper.vm.displayedName,
    email:    wrapper.vm.username,
    password_hash: wrapper.vm.password,
    householdId: 2,
    totalPoints: 0,
    difficulty: wrapper.vm.maxDifficulty,
    maxChoreTime: wrapper.vm.estimatedTime,
  }
  await nextTick()
  await wrapper.find("#deleteButton").trigger("click")
  expect(wrapper.vm.showDialog).toBe(true);
  await nextTick()
  const spy = vi.spyOn(wrapper.vm, "deleteProfile");
  await wrapper.find("#delete").trigger("click")
  expect(spy).toHaveBeenCalled();
})

test("PDT-1 delete user information", async () => {
    const wrapperProfile = mount(Profile, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
   const wrapperLogin = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
    const store = useAppStore()
    wrapperLogin.vm.displayedName = "Mollietest"
    wrapperLogin.vm.username = "validateProfile" 
    wrapperLogin.vm.password = "Mtest"
    wrapperLogin.vm.maxDifficulty = 3
    wrapperLogin.vm.estimatedTime = 27
    wrapperLogin.vm.repeatedPassword = "Mtest"
    wrapperLogin.vm.householdName = "TESTHOUSEHOLD"
    wrapperLogin.vm.IsJoin = false
    const result = await wrapperLogin.vm.createProfile()
    store.user = result
    //call a function from component

    //TODO fails here sometimes
    const method = await wrapperProfile.vm.deleteProfile(result.id)
    expect (method.deleted).toBe(true)

})


test("PDT-2 Profile deletion is canceled", async () => {
    const wrapper = mount(Profile, {
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
    wrapper.vm.displayedName = "Mollietest"
    wrapper.vm.username = "validateProfile12@qc.com" 
    wrapper.vm.password = "Mtest1234"
    wrapper.vm.maxDifficulty = 3
    wrapper.vm.estimatedTime = 27
    wrapper.vm.repeatedPassword = "Mtest1234"
    wrapper.vm.isJoin = false
    wrapper.vm.showDialog = true
      const user = {
      name:  wrapper.vm.displayedName,
      email:    wrapper.vm.username,
      password_hash: wrapper.vm.password,
      householdId: 2,
      totalPoints: 0,
      difficulty: wrapper.vm.maxDifficulty,
      maxChoreTime: wrapper.vm.estimatedTime,
    }
    const result = await FetchService.signup(user)
    FetchService.deleteUser(result.id)
    await nextTick()
    await wrapper.find("#deleteCancel").trigger("click")
    expect(wrapper.vm.showDialog).toBe(false);
})



test("testing name v-model", async () => {
    const wrapper = mount(Profile, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})
const store = useAppStore()
wrapper.vm.isUpdate = true
    await nextTick()

const select = wrapper.findComponent('[data-testid="name"]');
    await nextTick()
    await select.setValue("x")
    await nextTick()
    expect(wrapper.vm.name).toBe("x")
})

test("testing email v-model", async () => {
    const wrapper = mount(Profile, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})
const store = useAppStore()
wrapper.vm.isUpdate = true
await nextTick()
const select = wrapper.findComponent('[data-testid="email"]');
await nextTick()
await select.setValue("x@x.com")
await nextTick()
expect(wrapper.vm.username).toBe("x@x.com")

})

test("testing estimated time v-model", async () => {
    const wrapper = mount(Profile, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})
const store = useAppStore()
wrapper.vm.isUpdate = true
await nextTick()
const select = wrapper.findComponent('[data-testid="estTime"]');
await nextTick()
await select.setValue(8)
await nextTick()
expect(wrapper.vm.estimatedTime).toBe(8)
})

test("testing showDialog v-model", async () => {
    const wrapper = mount(Profile, {
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
const store = useAppStore()
wrapper.vm.isCreate = true
await nextTick()
const select = wrapper.findComponent('[data-testid="dialog"]');
    await select.setValue(true)
    await nextTick()
    expect(wrapper.vm.showDialog).toBe(true)
})

test("testing updateButton method", async () => {
    const wrapper = mount(Profile, {
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
wrapper.vm.isCreate = false
await nextTick()
await wrapper.find("#update").trigger("click")
expect(wrapper.vm.isUpdate).toBe(true);
})

test("PT-1 User's number of points can be viewed from  profile", async () => {
    const wrapper = mount(Profile, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})
  expect(wrapper.text()).toContain('Points: 0')
})

test("PET-5 Password is updated but not valid", async () => {
    const wrapper = mount(Profile, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
    const store = useAppStore()
    store.user.id = 219
    wrapper.vm.name = "x"
    wrapper.vm.username = "x"
    wrapper.vm.maxDifficulty = 10
    wrapper.vm.estimatedTime = 50
    wrapper.vm.password = '12345678'
    wrapper.vm.confirmed = true
    await wrapper.vm.updateProfile()
    expect(wrapper.vm.errorMessages.password).toBe("Password must be 8-25 characters and include at least one capital letter and one number")
})

test("PET-5 Password is updated but not valid with repeated password", async () => {
    const wrapper = mount(Profile, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
    const store = useAppStore()
    store.user.id = 219
    wrapper.vm.name = "x"
    wrapper.vm.username = "x"
    wrapper.vm.maxDifficulty = 10
    wrapper.vm.estimatedTime = 50
    wrapper.vm.password = '12345678B'
    wrapper.vm.repeatedPassword = 'x'
    wrapper.vm.confirmed = true
    await wrapper.vm.updateProfile()
    expect(wrapper.vm.errorMessages.repeatedPassword).toBe("Passswords do not match")
})


test("PET-5 Password is updated but not valid with previous password", async () => {
    const wrapper = mount(Profile, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
    const store = useAppStore()
    store.user.id = 219
    wrapper.vm.name = "x"
    wrapper.vm.username = "x"
    store.user.email = "x"
    wrapper.vm.maxDifficulty = 10
    wrapper.vm.estimatedTime = 50
    wrapper.vm.password = '12345678B'
    wrapper.vm.repeatedPassword = '12345678B'
    wrapper.vm.previousPassword = 'y'
    wrapper.vm.confirmed = true
    await wrapper.vm.updateProfile()
    expect(wrapper.vm.errorMessages.previousPassword).toBe("Please enter correct password")
})

test("PET-1 Edited fields are all valid (including password)", async () => {
    const wrapper = mount(Profile, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
    const store = useAppStore()
    store.user.id = 219
    wrapper.vm.name = "x"
    store.user.email = "x"
    wrapper.vm.username = "x"
    wrapper.vm.maxDifficulty = 10
    wrapper.vm.estimatedTime = 50
    wrapper.vm.password = '12345678B'
    wrapper.vm.repeatedPassword = '12345678B'
    wrapper.vm.previousPassword = '12345678B'
    wrapper.vm.confirmed = true
    const result = await wrapper.vm.updateProfile()
    expect(result).toBe(true)
})

test("showPasswordDialog shows", async () => {
    const wrapper = mount(Profile, {
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
    const store = useAppStore()
    store.user.id = 219
    wrapper.vm.name = "x"
    store.user.email = "x"
    wrapper.vm.username = "x"
    wrapper.vm.maxDifficulty = 10
    wrapper.vm.estimatedTime = 50
    wrapper.vm.password = '12345678B'
    wrapper.vm.repeatedPassword = '12345678B'
    wrapper.vm.previousPassword = '12345678B'
    wrapper.vm.confirmed = false
    const result = await wrapper.vm.updateProfile()
    expect(wrapper.vm.showPasswordDialog).toBe(true)
})

test("cancel function works", async () => {
    const wrapper = mount(Profile, {
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
    const store = useAppStore()
    wrapper.vm.showPasswordDialog = true
    store.user.id = 219
    wrapper.vm.cancel()
    expect(wrapper.vm.showPasswordDialog).toBe(false)
})

test("confirm function works", async () => {
    const wrapper = mount(Profile, {
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
    const store = useAppStore()
    wrapper.vm.showPasswordDialog = true
    store.user.id = 219
    wrapper.vm.confirm()
    expect(wrapper.vm.confirmed).toBe(true)
})

test("testing password v-model", async () => {
    const wrapper = mount(Profile, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})
const store = useAppStore()
wrapper.vm.isUpdate = true
    await nextTick()

const select = wrapper.findComponent('[data-testid="password"]');
    await nextTick()
    await select.setValue("x")
    await nextTick()
    expect(wrapper.vm.password).toBe("x")
})
test("testing repeatedPassword v-model", async () => {
    const wrapper = mount(Profile, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})
const store = useAppStore()
wrapper.vm.isUpdate = true
    await nextTick()

const select = wrapper.findComponent('[data-testid="repeatedPassword"]');
    await nextTick()
    await select.setValue("x")
    await nextTick()
    expect(wrapper.vm.repeatedPassword).toBe("x")
})

test("testing showPasswordDialog v-model", async () => {
    const wrapper = mount(Profile, {
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
const store = useAppStore()
wrapper.vm.isUpdate = true
    await nextTick()

const select = wrapper.findComponent('[data-testid="passwordDialog"]');
    await nextTick()
    await select.setValue(false)
    await nextTick()
    expect(wrapper.vm.showPasswordDialog).toBe(false)
})

test("testing previousPassword v-model", async () => {
    const wrapper = mount(Profile, {
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
const store = useAppStore()
wrapper.vm.isUpdate = true
    await nextTick()

const select = wrapper.findComponent('[data-testid="prevPass"]');
    await nextTick()
    await select.setValue("1234")
    await nextTick()
    expect(wrapper.vm.previousPassword).toBe("1234")
})

test("testing logout button", async () => {
    const wrapper = mount(Profile, {
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
    const store = useAppStore()
    store.user.id=3765
    await wrapper.find("#logout").trigger("click")
    expect(store.loggedIn).toBe(false)
})