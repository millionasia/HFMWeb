import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './composables/**/*.{js,ts}',
    './data/**/*.{js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        hfm: {
          graphite: '#172022',
          charcoal: '#243033',
          steel: '#6f7f85',
          mist: '#e9f0ef',
          porcelain: '#f7faf8',
          teal: '#0e7f81',
          cyan: '#4fb7bb',
          amber: '#d7932d',
          copper: '#b96d36'
        }
      },
      boxShadow: {
        machine: '0 24px 70px rgba(23, 32, 34, 0.16)'
      },
      fontFamily: {
        sans: [
          'Inter',
          'Noto Sans TC',
          'ui-sans-serif',
          'system-ui',
          'sans-serif'
        ]
      }
    }
  },
  plugins: []
}
