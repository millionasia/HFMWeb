const productRoutes = [
  'microcomputer-slicer',
  'multi-knife-slitter',
  'pipe-making-machine',
  'screw-planting-machine',
  'rolling-heat-paste-bonding-machine',
  'auto-lutestring-heat-paste-bonding-machine',
  'simultaneous-weld-cut-machine',
  'plastic-welding-machine',
  'large-plastic-welding-machine',
  'foot-pedal-plastic-welding-machine',
  'dvd-plastic-membrane-package-machine',
  'auto-feeding-welding-machine',
  'shuttle-table-plastic-welding-machine',
  'auto-canvas-bonding-machine',
  'canvas-bonding-machine',
  'treadling-weld-cut-machine',
  'blister-package-sealing-machine',
  'auto-round-rotary-plate-plastic-welding-machine',
  'rf-fiber-drying-machine'
].map((slug) => `/products/${slug}`)

const appBaseURL = process.env.NUXT_APP_BASE_URL || '/'

const withBaseURL = (path) => {
  const base = appBaseURL.endsWith('/') ? appBaseURL : `${appBaseURL}/`
  return `${base}${path.replace(/^\/+/, '')}`
}

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
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/products',
        '/applications',
        '/about',
        '/contact',
        '/sitemap',
        ...productRoutes
      ]
    }
  },
  app: {
    baseURL: appBaseURL,
    head: {
      htmlAttrs: {
        lang: 'zh-Hant'
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0f2f33' }
      ],
      link: [
        { rel: 'icon', href: withBaseURL('/favicon.ico'), sizes: 'any' },
        { rel: 'icon', href: withBaseURL('/favicon.svg'), type: 'image/svg+xml' }
      ]
    }
  }
})
