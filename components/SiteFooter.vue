<script setup>
import { Mail, MapPin, Phone } from 'lucide-vue-next'

const { data, locale } = useHfm()
const { assetPath } = useAssetPath()
const site = computed(() => data.value.site)
const sitemap = computed(() => data.value.sitemap)
</script>

<template>
  <footer class="border-t border-hfm-mist bg-hfm-graphite text-white">
    <div class="container-shell py-12">
      <div class="grid gap-10 lg:grid-cols-[1.05fr_1.95fr]">
        <div>
          <NuxtLink to="/" class="focus-ring inline-flex rounded-sm bg-white p-2" :aria-label="site.name">
            <img :src="assetPath(site.logo)" :alt="site.logoAlt" class="h-14 w-72 object-contain object-left">
          </NuxtLink>
          <p class="mt-5 max-w-xl text-sm leading-7 text-white/72">
            {{ site.summary }}
          </p>
          <dl class="mt-6 grid gap-3 text-sm text-white/76">
            <div class="flex gap-3">
              <MapPin class="mt-0.5 h-4 w-4 flex-none text-hfm-cyan" />
              <dd>{{ site.companyAddressLabel }}: {{ site.companyAddress }}</dd>
            </div>
            <div class="flex gap-3">
              <Phone class="mt-0.5 h-4 w-4 flex-none text-hfm-cyan" />
              <dd>{{ site.phone }}</dd>
            </div>
            <div class="flex gap-3">
              <Mail class="mt-0.5 h-4 w-4 flex-none text-hfm-cyan" />
              <dd>{{ site.email }}</dd>
            </div>
          </dl>
        </div>

        <div class="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          <div v-for="group in sitemap" :key="group.title">
            <ul class="space-y-3">
              <li v-for="link in group.links" :key="link.to">
                <NuxtLink
                  :to="link.to"
                  class="focus-ring rounded-sm text-sm text-white/68 transition hover:text-hfm-cyan"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright © {{ new Date().getFullYear() }} {{ site.legalName }}</p>
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2 sm:justify-end">
          <NuxtLink to="/sitemap" class="focus-ring rounded-sm transition hover:text-hfm-cyan">
            {{ locale === 'zh' ? '網站地圖' : 'Sitemap' }}
          </NuxtLink>
          <span class="inline-flex flex-wrap items-baseline gap-x-1 gap-y-0.5">
            <span>{{ site.designedBy.prefix }}</span>
            <a
              :href="site.designedBy.url"
              target="_blank"
              rel="noopener noreferrer"
              class="focus-ring rounded-sm font-medium text-white transition hover:text-hfm-cyan"
              :title="site.designedBy.tagline"
            >
              {{ site.designedBy.name }}
            </a>
            <span class="basis-full text-xs text-white/45 sm:basis-auto sm:pl-1">
              {{ site.designedBy.tagline }}
            </span>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>
