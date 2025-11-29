import NavigationBar from "@/components/NavigationBar.vue"
import { expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { useAppStore } from "@/stores/app.js";
import { nextTick } from 'vue';

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

test("PT-1 User's number of points can be viewed from the nav bar", () => {
  const wrapper = mount(NavigationBar, {
      global: {
      plugins: [
        createTestingPinia({createSpy: vi.fn}),
      [vuetify],
      ],
    }
  })
  const store = useAppStore()
  expect(wrapper.text()).toContain(store.user.totalPoints + " pts")
})

test("NOFT - test v-model on navigation drawer", async () => {
  const wrapper = mount(NavigationBar, {
    global: {
      plugins: [
        createTestingPinia({createSpy: vi.fn}),
        [vuetify],
      ],
      stubs: {
                VNavigationDrawer: {
                    name: "VNavigationDrawer",
                    template: '<div class="v-navigation-drawer-stub"><slot /></div>',
                    props: ['modelValue'],
                },
                VAppBar: {
                  name: "VAppBar",
                  template: '<div class="v-app-bar-stub"><slot /></div>'
                }
            },
      
    }
  })

  wrapper.vm.smAndDown = true;
  
  await nextTick();

  wrapper.vm.drawer = true;
  
  await nextTick()
  
  const drawer = wrapper.findComponent('[data-testid="nav-drawer"]')

  await drawer.setValue(false)

  await nextTick()

  expect(wrapper.vm.drawer).toBe(false);
})