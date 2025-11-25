import Help from '../pages/Help.vue'
import { expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import routes from '../router/router.js'


// need this at the top
const vuetify = createVuetify({
    components,
    directives,
})

test("NOFT - Help renders correctly", () => {
    const wrapper = mount(Help, {
        global: {
            plugins: [
                createTestingPinia({
                    createSpy: vi.fn,
                }),
                [vuetify],
                routes,
            ],
        },
    })

    expect(wrapper.text()).toContain('Welcome to ChoreChart!')
})