import NavigationBar from "@/components/NavigationBar.vue"
import { expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { useAppStore } from "@/stores/app.js";

// need this at the top
const vuetify = createVuetify({
    components,
    directives,
})

vi.stubGlobal('visualViewport', new EventTarget())

test("nav bar renders correctly", () => {
    const wrapper = mount(NavigationBar, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})

expect(wrapper.text()).toContain('Store')
})