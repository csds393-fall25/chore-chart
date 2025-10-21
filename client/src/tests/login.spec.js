import Login from "@/components/Login.vue";
import { expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { useAppStore } from '@/stores/app.js';
import { createTestingPinia } from '@pinia/testing'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

test("temp test", () => {

    expect (1+1).toBe(2)
}) 

test("loggedIn changes correctly", () => {
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