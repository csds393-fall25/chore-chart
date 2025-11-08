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

// need this at the top
const vuetify = createVuetify({
  components,
  directives,
})

// example test format
test("temp test", () => {
    expect (1+1).toBe(2)
}) 

test("udates user information", async () => {
    const wrapper = mount(Profile, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
    // using the store
    const store = useAppStore()
    const randomdiff = Math.floor(Math.random()*10)
    const randomtime = Math.floor(Math.random()*100)

    store.user.id = 219
    wrapper.vm.name = "x"
    wrapper.vm.username = "x"
    wrapper.vm.maxDifficulty = randomdiff
    wrapper.vm.estimatedTime = randomtime

    //call a function from component

    await wrapper.vm.updateProfile()

    // access the store like normal
    expect(store.user.difficulty).toBe(randomdiff)
    expect(store.user.maxChoreTime).toBe(randomtime)
})

test("delete user information", async () => {
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
    const method = await wrapperProfile.vm.deleteProfile(result.id)
    expect (method.deleted).toBe(true)

})