import { expect, test, vi } from 'vitest'
import customTheme from "@/plugins/vuetify"
import createVuetify from '@/plugins/vuetify'
import { registerPlugins } from '@/plugins/index'
import { createApp } from 'vue'
import App from '../App.vue'


vi.stubGlobal("visualViewport", new EventTarget())

// example test format
test("temp test", () => {
    expect (1+1).toBe(2)
}) 

test("custom theme exists", () => {
    expect(customTheme).toBeTruthy()
})

test("custom theme exists", () => {
    expect(createVuetify).toBeTruthy()
})

test("registerPlugins exists", () => {
    const app = createApp(App)
    expect(registerPlugins(app)).toBe(undefined)
})