<script setup>
import { Menu, X } from 'lucide-vue-next'

const route = useRoute()
const { data, locale, setLocale } = useHfm()
const isOpen = ref(false)

const site = computed(() => data.value.site)
const navItems = computed(() => data.value.navigation)

const isActive = (path) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

watch(() => route.fullPath, () => {
  isOpen.value = false
})
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-hfm-mist/80 bg-white/94 backdrop-blur-xl">
    <div class="container-shell">
      <div class="flex h-[4.75rem] items-center justify-between gap-4">
        <NuxtLink to="/" class="focus-ring flex min-w-0 items-center rounded-sm" :aria-label="site.name">
          <img
            :src="site.logo"
            :alt="site.logoAlt"
            class="h-12 w-[14.5rem] max-w-[58vw] object-contain object-left sm:h-14 sm:w-[20rem]"
          >
        </NuxtLink>

        <nav class="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="focus-ring rounded-sm px-3 py-2 text-sm font-semibold transition"
            :class="isActive(item.to) ? 'bg-hfm-mist text-hfm-graphite' : 'text-hfm-charcoal hover:bg-hfm-mist/70 hover:text-hfm-graphite'"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-3">
          <div class="hidden items-center rounded-sm border border-hfm-mist bg-white px-1.5 py-1 text-sm font-semibold text-hfm-charcoal sm:flex">
            <button
              type="button"
              class="focus-ring rounded-sm px-2 py-1 transition"
              :class="locale === 'zh' ? 'bg-hfm-graphite text-white' : 'hover:bg-hfm-mist'"
              aria-label="切換為中文"
              @click="setLocale('zh')"
            >
              中
            </button>
            <span class="px-1 text-hfm-steel/60">|</span>
            <button
              type="button"
              class="focus-ring rounded-sm px-2 py-1 transition"
              :class="locale === 'en' ? 'bg-hfm-graphite text-white' : 'hover:bg-hfm-mist'"
              aria-label="Switch to English"
              @click="setLocale('en')"
            >
              EN
            </button>
          </div>

          <NuxtLink
            to="/contact"
            class="focus-ring hidden rounded-sm bg-hfm-teal px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-hfm-graphite md:inline-flex"
          >
            {{ locale === 'zh' ? '設備諮詢' : 'Inquiry' }}
          </NuxtLink>

          <button
            type="button"
            class="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-sm border border-hfm-mist text-hfm-graphite lg:hidden"
            :aria-label="isOpen ? 'Close menu' : 'Open menu'"
            @click="isOpen = !isOpen"
          >
            <X v-if="isOpen" class="h-5 w-5" />
            <Menu v-else class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>

    <div v-if="isOpen" class="border-t border-white/10 bg-hfm-graphite text-white lg:hidden">
      <div class="container-shell py-4">
        <nav class="grid gap-2" aria-label="Mobile navigation">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="focus-ring rounded-sm px-3 py-3 text-base font-semibold transition"
            :class="isActive(item.to) ? 'bg-white/14 text-white' : 'text-white hover:bg-white/10'"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
        <div class="mt-4 flex items-center justify-between border-t border-white/12 pt-4">
          <span class="text-sm font-semibold text-white">語言</span>
          <div class="flex items-center rounded-sm border border-white/24 bg-white/8 px-1.5 py-1 text-sm font-semibold text-white">
            <button
              type="button"
              class="focus-ring rounded-sm px-2 py-1 transition"
              :class="locale === 'zh' ? 'bg-white text-hfm-graphite' : 'hover:bg-white/10'"
              @click="setLocale('zh')"
            >
              中
            </button>
            <span class="px-1 text-white/55">|</span>
            <button
              type="button"
              class="focus-ring rounded-sm px-2 py-1 transition"
              :class="locale === 'en' ? 'bg-white text-hfm-graphite' : 'hover:bg-white/10'"
              @click="setLocale('en')"
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
