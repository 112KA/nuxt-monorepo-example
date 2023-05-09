import { addPlugin, addLayout, addRouteMiddleware, extendPages, createResolver, defineNuxtModule } from '@nuxt/kit'
import type { NuxtModule } from '@nuxt/schema'

const module: NuxtModule = defineNuxtModule({
  setup(_, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // ----- 共通components
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: resolve('components'),
      })
    })

    // ----- 共通pages
    extendPages((pages) => {
      pages.unshift({ name: 'second', path: '/second/', file: resolve('pages/second.vue') })
    })

    // ----- 共通middleware
    addRouteMiddleware({ name: 'name', path: resolve('middleware/redirect.global.js'), global: true })

    // ----- 共通plugin
    addPlugin(resolve('plugins/examplePlugin.js'))

    // ----- 共通css
    //NOTE: nuxt.config.tsで未定義だったらファイル追加
    if (nuxt.options.css.length === 0) {
      nuxt.options.css.push(resolve('css/global.scss'))
    }

    // ----- 共通layout
    addLayout({ src: resolve('layouts/default.vue') }, 'default')

    // ----- public
    nuxt.options.nitro.publicAssets = nuxt.options.nitro.publicAssets ?? []
    nuxt.options.nitro.publicAssets.push({
      baseURL: '',
      dir: resolve('../public'),
    })
  },
})

export default module
