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

test("PCT-10 Switch to profile creation user inteface", () => {
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

test("LT-1 Successful login to account", async () => {
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

test("PCT-1, HCT1 All valid fields for creating profile with valid household name for household creation", async () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})
const store = useAppStore()
// using the store
    wrapper.vm.displayedName = "Mollietest"
    wrapper.vm.username = "validateProfile" 
    wrapper.vm.password = "Mtest"
    wrapper.vm.maxDifficulty = 3
    wrapper.vm.estimatedTime = 27
    wrapper.vm.repeatedPassword = "Mtest"
    wrapper.vm.householdName = "TESTHOUSEHOLD"
    wrapper.vm.IsJoin = false
    const result = await wrapper.vm.createProfile()
    console.log("result")
    console.log(result)
    const houseResult = await FetchService.fetchHouseholdByJoin(store.household.joinCode)
    expect(result.email).toBe("validateProfile")
    expect(result.name).toBe("Mollietest")
    expect(result.password_hash).toBe("Mtest")
    expect(result.difficulty).toBe(3)
    expect(result.maxChoreTime).toBe(27)
    expect(houseResult.name).toBe("TESTHOUSEHOLD")
    await FetchService.deleteUser(result.id)
    await FetchService.deleteHousehold(result.householdid)
})

test("PCT-1 All valid fields for creating profile with joining household ", async () => {
    const wrapper = mount(Login, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})
const store = useAppStore()
// using the store
    wrapper.vm.displayedName = "Mollietest2"
    wrapper.vm.username = "validateProfile2" 
    wrapper.vm.password = "Mtest"
    wrapper.vm.maxDifficulty = 3
    wrapper.vm.estimatedTime = 27
    wrapper.vm.repeatedPassword = "Mtest"
    wrapper.vm.householdName = "TESTHOUSEHOLD"
    wrapper.vm.IsJoin = true
    const result = await wrapper.vm.createProfile()
    console.log("result")
    console.log(result)
    const houseResult = await FetchService.fetchHouseholdByJoin(store.household.joinCode)
    expect(result.email).toBe("validateProfile2")
    expect(result.name).toBe("Mollietest2")
    expect(result.password_hash).toBe("Mtest")
    expect(result.difficulty).toBe(3)
    expect(result.maxChoreTime).toBe(27)
    expect(houseResult.name).toBe("TESTHOUSEHOLD")
    await FetchService.deleteUser(result.id)
    await FetchService.deleteHousehold(result.householdid)
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
// using the store
const store = useAppStore()

wrapper.vm.username = 'x'
wrapper.vm.password = 'y'

//call a function from component
await wrapper.vm.validateLogin()

// access the store like normal
expect(store.loggedIn).toBe(false)

})


//validation tests

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
//call a function from component
wrapper.vm.validateProfile()
console.log(wrapper.vm.errorMessages)
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
//call a function from component
wrapper.vm.validateProfile()
console.log(wrapper.vm.errorMessages)
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
//call a function from component
wrapper.vm.validateProfile()
console.log(wrapper.vm.errorMessages)
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
//call a function from component
wrapper.vm.validateProfile()
console.log(wrapper.vm.errorMessages)
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
//call a function from component
wrapper.vm.validateProfile()
console.log(wrapper.vm.errorMessages)
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
//call a function from component
wrapper.vm.validateProfile()
console.log(wrapper.vm.errorMessages)
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
//call a function from component
wrapper.vm.validateProfile()
console.log(wrapper.vm.errorMessages)
expect(wrapper.vm.errorMessages.name).toBe("name must exist")
expect(wrapper.vm.errorMessages.maxDiff).toBe("Maximum difficulty must be between 1 and 10")
// max difficulty error fixed
wrapper.vm.username = "m@case.edu"
wrapper.vm.password = "12345678M"
wrapper.vm.repeatedPassword = "123456789M"
wrapper.vm.estimatedTime = 1
wrapper.vm.maxDifficulty = 5
//call a function from component
wrapper.vm.validateProfile()
console.log(wrapper.vm.errorMessages)
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
//call a function from component
wrapper.vm.IsJoin = false
await wrapper.vm.createProfile()
console.log(wrapper.vm.errorMessages)
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
//call a function from component
await wrapper.vm.createProfile()
console.log(wrapper.vm.errorMessages)
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
//call a function from component
await wrapper.vm.createProfile()
console.log(wrapper.vm.errorMessages)
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
//call a function from component

const cancelButton = wrapper.findComponent('[data-testid="cancelButton"]')
const button = wrapper.find("button")
console.log("KI")
console.log(button)
cancelButton.trigger("click")
await nextTick();
expect(wrapper.vm.showDialog).toBe(false)

//await wrapper.vm.createProfile()
//console.log(wrapper.vm.errorMessages)
//expect(wrapper.vm.errorMessages.houseName).toBe("Household name must be below 50 characters and have at least 1 letter")


})







