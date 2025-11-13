import { expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { useAppStore } from '@/stores/app.js';
import { createTestingPinia } from '@pinia/testing'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { useAppStore } from "@/stores/app.js";
import Profile from "@/components/Profile.vue";
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
    await wrapper.find("#cancel").trigger("click")
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
