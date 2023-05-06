import path from 'path'
import baseConfig from 'base-project/nuxt.config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig(
  Object.assign({}, baseConfig, {
    alias: {
      'base-project': path.join(__dirname, `node_modules/base-project/dist`),
    },

    modules: baseConfig.modules.concat(['base-project/module']),
  })
)
