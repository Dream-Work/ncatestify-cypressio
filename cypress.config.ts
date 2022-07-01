import { defineConfig } from 'cypress'

export default defineConfig({
  env: {
    startUrl: 'https://testify.team/de',
    waitForStartpage: 5000,
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 15000,
  videoCompression: false,
  chromeWebSecurity: false,
  scrollBehavior: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
