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
// need this at the top
const vuetify = createVuetify({
  components,
  directives,
})

// example test format
test("temp test", () => {

    expect (1+1).toBe(2)
}) 

test("Login renders correctly", () => {
    // the wrapper creates a mock component that you can test with
    // I think this is all the same for every test besides the component name
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

test("SwitchCreate changes values correctly", () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})

const store = useAppStore()
//wrapper.vm allows you to be able to access things that are in the component (vars and functions)
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
//call a function from component
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


//call a function from component
wrapper.vm.switchCreate()
expect(wrapper.vm.isCreate).toBe(true)
expect(wrapper.vm.username).toBe("")
expect(wrapper.vm.password).toBe("")

})

test("validateLogin works correctly", async () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
// using the store
const store = useAppStore()
wrapper.vm.username = 'x'
wrapper.vm.password = 'x'

await wrapper.vm.validateLogin()

// access the store like normal
expect(store.loggedIn).toBe(true)
})

test("createProfile works correctly", async () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})
// using the store
    wrapper.vm.displayedName = "Mollietest"
    wrapper.vm.username = "validateProfile" 
    wrapper.vm.password = "Mtest"
    wrapper.vm.maxDifficulty = 3
    wrapper.vm.estimatedTime = 27
    wrapper.vm.repeatedPassword = "Mtest"
  
   
     

    const result = await wrapper.vm.createProfile()


    expect(result.email).toBe("validateProfile")
    expect(result.name).toBe("Mollietest")
    expect(result.password_hash).toBe("Mtest")
    expect(result.difficulty).toBe(3)
    expect(result.maxChoreTime).toBe(27)
    
    FetchService.deleteUser(result.id)
})

test("validateLogin works correctly with incorrect username and password", async () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}

})
// using the store
const store = useAppStore()

wrapper.vm.username = 'x'
wrapper.vm.password = 'y'

//call a function from component
await wrapper.vm.validateLogin()

// access the store like normal
expect(store.loggedIn).toBe(false)

})






