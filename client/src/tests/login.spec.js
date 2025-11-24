import Login from "@/components/Login.vue";
import { expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { useAppStore } from '@/stores/app.js';
import { createTestingPinia } from '@pinia/testing'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { useAppStore } from "@/stores/app.js";
import FetchService from "@/FetchService";
import { nextTick } from "vue";
// need this at the top
const vuetify = createVuetify({
  components,
  directives,
})

vi.stubGlobal("visualViewport", new EventTarget())

// example test format
test("temp test", () => {

    expect (1+1).toBe(2)
}) 

test("Login renders correctly", () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})

expect(wrapper.text()).toContain('Login')
})

test("PCT-10 Switch to profile creation user inteface", () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
wrapper.vm.switchCreate()
expect(wrapper.vm.isCreate).toBe(true)
expect(wrapper.vm.isIncorrect).toBe(false)
expect(wrapper.vm.username).toBe("")
expect(wrapper.vm.password).toBe("")
})


test("switchLogin changes values correctly", () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}


})
wrapper.vm.switchLogin()
expect(wrapper.vm.isCreate).toBe(false)
expect(wrapper.vm.username).toBe("")
expect(wrapper.vm.password).toBe("")

})

test("switchCreate works correctly", () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})
wrapper.vm.switchCreate()
expect(wrapper.vm.isCreate).toBe(true)
expect(wrapper.vm.username).toBe("")
expect(wrapper.vm.password).toBe("")
})

test("LT-1 Successful login to account", async () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
const store = useAppStore()
wrapper.vm.username = 'x'
wrapper.vm.password = '12345678B'

await wrapper.vm.validateLogin()
expect(store.loggedIn).toBe(true)
})

test("PCT-1, HCT-1 All valid fields for creating profile with valid household name for household creation", async () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})
const store = useAppStore()
    wrapper.vm.displayedName = "Mollietest"
    wrapper.vm.username = "validateProfile12@q.com" 
    wrapper.vm.password = "Mtest1234"
    wrapper.vm.maxDifficulty = 3
    wrapper.vm.estimatedTime = 27
    wrapper.vm.repeatedPassword = "Mtest1234"
    wrapper.vm.householdName = "TESTHOUSEHOLD"
    wrapper.vm.isJoin = false
    const result = await wrapper.vm.createProfile()
    const houseResult = await FetchService.fetchHouseholdByJoin(store.household.joinCode)
    expect(result.email).toBe("validateProfile12@q.com")
    expect(result.name).toBe("Mollietest")
    expect(result.password_hash).toBe("Mtest1234")
    expect(result.difficulty).toBe(3)
    expect(result.maxChoreTime).toBe(27)
    expect(houseResult.name).toBe("TESTHOUSEHOLD")
    await FetchService.deleteUser(result.id)
    await FetchService.deleteHousehold(result.householdId)
})

test("HJT-1 Valid household join code", async () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})
const store = useAppStore()
    wrapper.vm.displayedName = "Mollietest"
    wrapper.vm.username = "validateProfile@test.com" 
    wrapper.vm.password = "Mtest"
    wrapper.vm.maxDifficulty = 3
    wrapper.vm.estimatedTime = 27
    wrapper.vm.repeatedPassword = "Mtest"
    wrapper.vm.householdName = "TESTHOUSEHOLD"
    wrapper.vm.isJoin = false
    const result = await wrapper.vm.createProfile()
    const houseResult = await FetchService.fetchHouseholdByJoin(store.household.joinCode)
    expect(result.email).toBe("validateProfile@test.com")
    expect(result.name).toBe("Mollietest")
    expect(result.password_hash).toBe("Mtest")
    expect(result.difficulty).toBe(3)
    expect(result.maxChoreTime).toBe(27)
    expect(houseResult.name).toBe("TESTHOUSEHOLD")
    wrapper.vm.displayedName = "Mollietest2"
    wrapper.vm.username = "validateProfile2" 
    wrapper.vm.password = "Mtest1234"
    wrapper.vm.maxDifficulty = 3
    wrapper.vm.estimatedTime = 27
    wrapper.vm.repeatedPassword = "Mtest1234"
    wrapper.vm.isJoin = true
    wrapper.vm.householdName = store.household.joinCode
    const result2 = await wrapper.vm.createProfile()
    const houseResult2 = await FetchService.fetchHouseholdByJoin(store.household.joinCode)
    expect(result2.email).toBe("validateProfile2")
    expect(result2.name).toBe("Mollietest2")
    expect(result2.password_hash).toBe("Mtest1234")
    expect(result2.difficulty).toBe(3)
    expect(result2.maxChoreTime).toBe(27)
    expect(houseResult2.name).toBe("TESTHOUSEHOLD")
    await FetchService.deleteUser(result.id)
    await FetchService.deleteUser(result2.id)
    await FetchService.deleteHousehold(result.householdId)
})


test("LT-2 Invalid login to account", async () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
const store = useAppStore()
wrapper.vm.username = 'x'
wrapper.vm.password = 'y'
await wrapper.vm.validateLogin()
expect(store.loggedIn).toBe(false)
})

test("PCT-3 Name is not inputted", () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})

wrapper.vm.username = "m@m.case.edu"
wrapper.vm.password = "12345678M"
wrapper.vm.repeatedPassword = "12345678M"
wrapper.vm.estimatedTime = 30
wrapper.vm.maxDifficulty = 5
wrapper.vm.validateProfile()
expect(wrapper.vm.errorMessages.name).toBe("name must exist")
})

test("PCT-2 Email is not valid", () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
wrapper.vm.displayedName = "Mollie"
wrapper.vm.username = "mcase.edu"
wrapper.vm.password = "12345678M"
wrapper.vm.repeatedPassword = "12345678M"
wrapper.vm.estimatedTime = 30
wrapper.vm.maxDifficulty = 5
wrapper.vm.validateProfile()
expect(wrapper.vm.errorMessages.email).toBe("Email must follow format xxx@xxx.xxx")
})


test("PCT-4 Password is not of the correct format", () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
wrapper.vm.displayedName = "Mollie"
wrapper.vm.username = "m@case.edu"
wrapper.vm.password = "12345678"
wrapper.vm.repeatedPassword = "12345678"
wrapper.vm.estimatedTime = 30
wrapper.vm.maxDifficulty = 5
wrapper.vm.validateProfile()
expect(wrapper.vm.errorMessages.password).toBe("Password must be 8-25 characters and include at least one capital letter and one number"
)

})


test("PCT-5 Verified password does not match the original password", () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})
wrapper.vm.displayedName = "Mollie"
wrapper.vm.username = "m@case.edu"
wrapper.vm.password = "12345678M"
wrapper.vm.repeatedPassword = "123456789M"
wrapper.vm.estimatedTime = 30
wrapper.vm.maxDifficulty = 5
wrapper.vm.validateProfile()
expect(wrapper.vm.errorMessages.repeatedPassword).toBe("Passwords do not match")
})


test("PCT-6 Invalid estimated time field", () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})
wrapper.vm.displayedName = "Mollie"
wrapper.vm.username = "m@case.edu"
wrapper.vm.password = "12345678M"
wrapper.vm.repeatedPassword = "123456789M"
wrapper.vm.estimatedTime = -1
wrapper.vm.maxDifficulty = 5
wrapper.vm.validateProfile()
expect(wrapper.vm.errorMessages.estTime).toBe("Estimated time must be greater than 0")
})

test("PCT-7 Invalid maximum difficulty", () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
wrapper.vm.displayedName = "Mollie"
wrapper.vm.username = "m@case.edu"
wrapper.vm.password = "12345678M"
wrapper.vm.repeatedPassword = "123456789M"
wrapper.vm.estimatedTime = 1
wrapper.vm.maxDifficulty = 25
wrapper.vm.validateProfile()
expect(wrapper.vm.errorMessages.maxDiff).toBe("Maximum difficulty must be between 1 and 10")
})

test("PCT-8 Error removed when information is correct", () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
// two errors
wrapper.vm.username = "m@case.edu"
wrapper.vm.password = "12345678M"
wrapper.vm.repeatedPassword = "123456789M"
wrapper.vm.estimatedTime = 1
wrapper.vm.maxDifficulty = 25
wrapper.vm.validateProfile()
expect(wrapper.vm.errorMessages.name).toBe("name must exist")
expect(wrapper.vm.errorMessages.maxDiff).toBe("Maximum difficulty must be between 1 and 10")
// max difficulty error fixed
wrapper.vm.username = "m@case.edu"
wrapper.vm.password = "12345678M"
wrapper.vm.repeatedPassword = "123456789M"
wrapper.vm.estimatedTime = 1
wrapper.vm.maxDifficulty = 5
wrapper.vm.validateProfile()
expect(wrapper.vm.errorMessages.name).toBe("name must exist")
expect(wrapper.vm.errorMessages.maxDiff).toBe("")
})


test("PCT-9 Email already exists in the database.", async () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
wrapper.vm.displayedName = "Mollie"
wrapper.vm.username = "msa@chorechart.com"
wrapper.vm.password = "12345678M"
wrapper.vm.repeatedPassword = "12345678M"
wrapper.vm.estimatedTime = 30
wrapper.vm.maxDifficulty = 5
wrapper.vm.householdName = "TESTHOUSEHOLD"
wrapper.vm.IsJoin = false
await wrapper.vm.createProfile()
expect(wrapper.vm.errorMessages.email).toBe("There already exists an account for this email")
})

test("HCT-2 Household name not provided", async () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
wrapper.vm.displayedName = "Mollie"
wrapper.vm.username = "m@case.edu"
wrapper.vm.password = "12345678M"
wrapper.vm.repeatedPassword = "123456789M"
wrapper.vm.estimatedTime = 1
wrapper.vm.maxDifficulty = 8
await wrapper.vm.createProfile()
expect(wrapper.vm.errorMessages.houseName).toBe("Household name must be below 50 characters and have at least 1 letter")
})
test("HCT-3 invalid household name", async () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
wrapper.vm.displayedName = "Mollie"
wrapper.vm.username = "m@case.edu"
wrapper.vm.password = "12345678M"
wrapper.vm.repeatedPassword = "123456789M"
wrapper.vm.estimatedTime = 1
wrapper.vm.maxDifficulty = 8
wrapper.vm.householdName = "1234"
await wrapper.vm.createProfile()
expect(wrapper.vm.errorMessages.houseName).toBe("Household name must be below 50 characters and have at least 1 letter")

})

test("HCT-4, HJT-3 cancel household creation/joining", async () => {
    const wrapper = mount(Login, {
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
wrapper.vm.isCreate = true;
wrapper.vm.displayedName = "Mollie"
wrapper.vm.username = "m@case.edu"
wrapper.vm.password = "123456789M"
wrapper.vm.repeatedPassword = "123456789M"
wrapper.vm.estimatedTime = 1
wrapper.vm.maxDifficulty = 8
wrapper.vm.householdName = "HI"
wrapper.vm.showDialog = true;
await nextTick();
const cancelButton = wrapper.find("#test")
cancelButton.trigger("click")
await nextTick();
expect(wrapper.vm.showDialog).toBe(false)
})

test("PCT-11 cancel profile creation", async () => {
    const wrapper = mount(Login, {
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
wrapper.vm.isCreate = true
await nextTick();
const cancelButton = wrapper.findComponent('[data-testid="cancelLogin"]')
cancelButton.trigger("click")
await nextTick();
expect(wrapper.vm.isCreate).toBe(false)
})


test("create household button tested not valid", async () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
wrapper.vm.displayedName = "Mollie"
wrapper.vm.username = "m@case.edu"
wrapper.vm.password = "12345678M"
wrapper.vm.repeatedPassword = "123456789M"
wrapper.vm.estimatedTime = 1
wrapper.vm.maxDifficulty = 8
await wrapper.vm.CreateButtonSwitches()
expect(wrapper.vm.isJoin).toBe(false)
})

test("join household button tested not valid", async () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
wrapper.vm.displayedName = "Mollie"
wrapper.vm.username = "m@case.edu"
wrapper.vm.password = "12345678M"
wrapper.vm.repeatedPassword = "123456789M"
wrapper.vm.estimatedTime = 1
wrapper.vm.maxDifficulty = 8
await wrapper.vm.joinButtonSwitches()
expect(wrapper.vm.isJoin).toBe(true)
})

test("create household button tested  valid", async () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
wrapper.vm.displayedName = "Mollie"
wrapper.vm.username = "m@case.edu"
wrapper.vm.password = "123456789M"
wrapper.vm.repeatedPassword = "123456789M"
wrapper.vm.estimatedTime = 1
wrapper.vm.maxDifficulty = 8
await wrapper.vm.CreateButtonSwitches()
expect(wrapper.vm.showDialog).toBe(true)
})

test("join household button tested valid", async () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
wrapper.vm.displayedName = "Mollie"
wrapper.vm.username = "m@case.edu"
wrapper.vm.password = "123456789M"
wrapper.vm.repeatedPassword = "123456789M"
wrapper.vm.estimatedTime = 1
wrapper.vm.maxDifficulty = 8
await wrapper.vm.joinButtonSwitches()
expect(wrapper.vm.showDialog).toBe(true)
})


test("HJT-2 Invalid household join code ", async () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})
const store = useAppStore()
  wrapper.vm.displayedName = "Mollietest"
  wrapper.vm.username = "validateProfile@test2.com" 
  wrapper.vm.password = "Mtest"
  wrapper.vm.maxDifficulty = 3
  wrapper.vm.estimatedTime = 27
  wrapper.vm.repeatedPassword = "Mtest"
  wrapper.vm.householdName = "TESTHOUSEHOLD"
  wrapper.vm.isJoin = false
  const result = await wrapper.vm.createProfile()
  const houseResult = await FetchService.fetchHouseholdByJoin(store.household.joinCode)
  expect(result.email).toBe("validateProfile@test2.com")
  expect(result.name).toBe("Mollietest")
  expect(result.password_hash).toBe("Mtest")
  expect(result.difficulty).toBe(3)
  expect(result.maxChoreTime).toBe(27)
  expect(houseResult.name).toBe("TESTHOUSEHOLD")
  wrapper.vm.displayedName = "Mollietest2"
  wrapper.vm.username = "validateProfile2" 
  wrapper.vm.password = "Mtest1234"
  wrapper.vm.maxDifficulty = 3
  wrapper.vm.estimatedTime = 27
  wrapper.vm.repeatedPassword = "Mtest1234"
  wrapper.vm.isJoin = true
  wrapper.vm.householdName = "HI"
  const result2 = await wrapper.vm.createProfile()
  expect(wrapper.vm.errorMessages.jc = "Join code does not exist")
  await FetchService.deleteUser(result.id)
  await FetchService.deleteUser(result2.id)
  await FetchService.deleteHousehold(result.householdId)
})

test("profile creation failed due to error", async () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})
  wrapper.vm.username = "validateProfile12@q.com" 
  wrapper.vm.password = "Mtest1234"
  wrapper.vm.maxDifficulty = 3
  wrapper.vm.estimatedTime = 27
  wrapper.vm.repeatedPassword = "Mtest1234"
  wrapper.vm.householdName = "TESTHOUSEHOLD"
  wrapper.vm.isJoin = false
  const result = await wrapper.vm.createProfile()
  expect(result).toBe(500)
})


test("testing name v-model", async () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})
const store = useAppStore()
wrapper.vm.isCreate = true
await nextTick()

const select = wrapper.findComponent('[data-testid="name"]');
await select.setValue('Mollie')
await nextTick()
expect(wrapper.vm.displayedName).toBe("Mollie")



  
    
})

test("testing email v-model", async () => {
  const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})
  wrapper.vm.isCreate = true
  await nextTick()
  const select = wrapper.findComponent('[data-testid="email"]');
  await select.setValue('Mollie')
  await nextTick()
  expect(wrapper.vm.username).toBe("Mollie")
})

test("testing password v-model", async () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})

  wrapper.vm.isCreate = true
  await nextTick()
  const select = wrapper.findComponent('[data-testid="password"]');
  await select.setValue('Mollie')
  await nextTick()
  expect(wrapper.vm.password).toBe("Mollie") 
})

test("testing repeated password v-model", async () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})
  const store = useAppStore()
  wrapper.vm.isCreate = true
  await nextTick()
  const select = wrapper.findComponent('[data-testid="repeated"]');
  await select.setValue('Mollie')
  await nextTick()
  expect(wrapper.vm.repeatedPassword).toBe("Mollie")
})

test("testing estimated time v-model", async () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})

  wrapper.vm.isCreate = true
  await nextTick()
  const select = wrapper.findComponent('[data-testid="estTime"]');
  await select.setValue(8)
  await nextTick()
  expect(wrapper.vm.estimatedTime).toBe(8) 
})

test("testing max difficulty v-model", async () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})
  wrapper.vm.isCreate = true
  await nextTick()
  const select = wrapper.findComponent('[data-testid="maxDiff"]');
  await select.setValue(8)
  await nextTick()
  expect(wrapper.vm.maxDifficulty).toBe(8)   
})

test("testing showDialog v-model", async () => {
    const wrapper = mount(Login, {
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
  wrapper.vm.isCreate = true
  await nextTick()

  const select = wrapper.findComponent('[data-testid="dialog"]');
  await select.setValue(true)
  await nextTick()
  expect(wrapper.vm.showDialog).toBe(true)
})

test("testing householdName v-model", async () => {
    const wrapper = mount(Login, {
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

  wrapper.vm.isCreate = true
  wrapper.vm.showDialog = true
  await nextTick()
  const select = wrapper.findComponent('[data-testid="houseName"]');
  await select.setValue("HI")
  await nextTick()
  expect(wrapper.vm.householdName).toBe("HI")
})

test("createButtonSwitches is called", async () => {
    const wrapper = mount(Login, {
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
 wrapper.vm.username = "validateProfile12@q.com" 
  wrapper.vm.password = "Mtest1234"
  wrapper.vm.maxDifficulty = 3
  wrapper.vm.estimatedTime = 27
  wrapper.vm.repeatedPassword = "Mtest1234"
  wrapper.vm.isJoin = false
  wrapper.vm.isCreate = true
  await nextTick()
  const spy = vi.spyOn(wrapper.vm, "CreateButtonSwitches");
  await wrapper.find("#createH").trigger("click")
  expect(spy).toHaveBeenCalled();
})

test("joinButtonSwitches is called", async () => {
    const wrapper = mount(Login, {
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
  wrapper.vm.isCreate = true
  wrapper.vm.username = "validateProfile12@q.com" 
  wrapper.vm.password = "Mtest1234"
  wrapper.vm.maxDifficulty = 3
  wrapper.vm.estimatedTime = 27
  wrapper.vm.repeatedPassword = "Mtest1234"
  wrapper.vm.householdName = "TESTHOUSEHOLD"
  wrapper.vm.isJoin = false
  await nextTick()
  const spy = vi.spyOn(wrapper.vm, "joinButtonSwitches");
  await wrapper.find("#joinH").trigger("click")
  expect(spy).toHaveBeenCalled();
})

test("switchCreate is called", async () => {
    const wrapper = mount(Login, {
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
  wrapper.vm.username = "validateProfile12@q.com" 
  wrapper.vm.password = "Mtest1234"
  wrapper.vm.maxDifficulty = 3
  wrapper.vm.estimatedTime = 27
  wrapper.vm.repeatedPassword = "Mtest1234"
  wrapper.vm.householdName = "TESTHOUSEHOLD"
  wrapper.vm.isJoin = false
  await nextTick()
  const spy = vi.spyOn(wrapper.vm, "switchCreate");
  await wrapper.find("#switchC").trigger("click")
  expect(spy).toHaveBeenCalled();
})

test("login button is pressed", async () => {
    const wrapper = mount(Login, {
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
  wrapper.vm.username = "validateProfile12@q.com" 
  wrapper.vm.password = "Mtest1234"
  await nextTick()
  const spy = vi.spyOn(wrapper.vm, "validateLogin");
  await wrapper.find("#loginButton").trigger("click")
  expect(spy).toHaveBeenCalled();
})

test("create button is pressed on dialog", async () => {
    const wrapper = mount(Login, {
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
  wrapper.vm.isCreate = true
  await nextTick()
  const spy = vi.spyOn(wrapper.vm, "createProfile");
  await wrapper.find("#createDialog").trigger("click")
  await nextTick()
  expect(spy).toHaveBeenCalled();

})