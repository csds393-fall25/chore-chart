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
import Loading from '@/components/Loading.vue';

const vuetify = createVuetify({
  components,
  directives,
})

test("Login renders correctly", () => {
    const wrapper = mount(Loading, {
        global: {
  plugins: [
    createTestingPinia({createSpy: vi.fn}),
  [vuetify],
  ],
}
})

expect(wrapper.text()).toContain('Loading')
})