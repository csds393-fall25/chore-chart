import Login from "@/components/Login.vue";
import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { useAppStore } from '@/stores/app.js';


test("temp test", () => {

    expect (1+1).toBe(2)
}) 

test("loggedIn changes correctly", () => {
    const wrapper = mount(Login)
    expect(wrapper.text()).toContain("Login")

    


})