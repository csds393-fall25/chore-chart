

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const customTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-light': '#EEEEEE',
    'on-surface': '#000000',
    'surface-variant': '#424242',
    'on-surface-variant': '#EEEEEE',
    primary: '#396496',
    'on-primary': '#FFFFFF',
    'primary-darken-1': '#192b40',
    'primary-lighten-1': '#cfe2f3',
    'on-primary-lighten-1': '#192b40',
    secondary: '#51d299',
    'on-secondary': '#000000',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    navy: '#192b40',
    'on-navy': '#FFFFFF',
    'medium-blue': '#396496',
    'on-medium-blue': '#FFFFFF',
    'light-blue': '#cfe2f3',
    'on-light-blue': '#192b40',
    teal: '#51d299',
    'on-teal': '#000000',
  },
  variables: {
    'border-color': '#000000',
    'border-opacity': 0.12,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': '#FFFFFF',
    'theme-code': '#F5F5F5',
    'theme-on-code': '#000000',
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme,
    },
  },
})
