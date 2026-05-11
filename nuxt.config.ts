export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
  experimental: {
    appManifest: false
  },
  modules: ['@nuxtjs/tailwindcss', '@vercel/analytics'],
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-Hant'
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0f2f33' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }
      ]
    }
  }
})
