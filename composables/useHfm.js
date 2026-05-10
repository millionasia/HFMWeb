import { computed, onMounted, watch } from 'vue'
import { createMillionAsia } from '~/data/millionasia'

export const useHfm = () => {
  const locale = useState('hfm-locale', () => 'zh')

  const setLocale = (value) => {
    locale.value = value === 'en' ? 'en' : 'zh'
  }

  const detectLocale = () => {
    if (!process.client) return

    const saved = window.localStorage.getItem('hfm-locale')
    if (saved === 'zh' || saved === 'en') {
      setLocale(saved)
      return
    }

    const browserLocale = window.navigator.language || ''
    setLocale(browserLocale.toLowerCase().startsWith('zh') ? 'zh' : 'en')
  }

  onMounted(detectLocale)

  if (process.client) {
    watch(locale, (value) => {
      window.localStorage.setItem('hfm-locale', value)
      document.documentElement.lang = value === 'zh' ? 'zh-Hant' : 'en'
    }, { immediate: true })
  }

  const data = computed(() => createMillionAsia(locale.value))
  const isEnglish = computed(() => locale.value === 'en')

  return {
    data,
    detectLocale,
    isEnglish,
    locale,
    setLocale
  }
}
