import { expect, test, vi } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import createPinia from "@/stores/index"
const vuetify = createVuetify({
  components,
  directives,
})

vi.stubGlobal("visualViewport", new EventTarget())

// example test format
test("temp test", () => {
    expect (1+1).toBe(2)
}) 

test("No errors in Pinia exporting", () => {
    expect(createPinia).toBeTruthy()
})
