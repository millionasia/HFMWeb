<script setup>
import { ArrowRight, CheckCircle2 } from 'lucide-vue-next'

const { data, locale } = useHfm()

const site = computed(() => data.value.site)
const highlights = computed(() => data.value.highlights)
const categories = computed(() => data.value.productCategories)
const processSteps = computed(() => data.value.process)

useHead(() => ({
  title: `${site.value.name} | ${site.value.tagline}`,
  meta: [
    { name: 'description', content: site.value.seoDescription },
    { property: 'og:title', content: `${site.value.name} | ${site.value.tagline}` },
    { property: 'og:description', content: site.value.seoDescription },
    { property: 'og:image', content: site.value.heroImage }
  ]
}))
</script>

<template>
  <div>
    <section class="relative isolate min-h-[76vh] overflow-hidden bg-hfm-graphite">
      <img
        :src="site.heroImage"
        :alt="site.tagline"
        class="absolute inset-0 h-full w-full object-cover"
      >
      <div class="absolute inset-0 bg-gradient-to-r from-hfm-graphite via-hfm-graphite/76 to-hfm-graphite/20" />
      <div class="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-hfm-porcelain to-transparent" />

      <div class="container-shell relative z-10 flex min-h-[76vh] items-center py-16">
        <div class="max-w-3xl text-white">
          <p class="text-xs font-bold uppercase tracking-[0.28em] text-hfm-cyan">
            High Frequency Machinery
          </p>
          <h1 class="mt-5 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            {{ site.name }}
          </h1>
          <p class="mt-5 text-xl font-semibold leading-8 text-white/90 sm:text-2xl">
            {{ site.tagline }}
          </p>
          <p class="mt-6 max-w-2xl text-base leading-8 text-white/74 sm:text-lg">
            {{ site.summary }}
          </p>
          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <NuxtLink
              to="/products"
              class="focus-ring inline-flex items-center justify-center gap-2 rounded-sm bg-hfm-cyan px-5 py-3 text-sm font-black text-hfm-graphite transition hover:bg-white"
            >
              {{ locale === 'zh' ? '查看產品設備' : 'View Products' }}
              <ArrowRight class="h-4 w-4" />
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="focus-ring inline-flex items-center justify-center gap-2 rounded-sm border border-white/40 px-5 py-3 text-sm font-black text-white transition hover:bg-white/10"
            >
              {{ locale === 'zh' ? '聯絡賀民' : 'Start Inquiry' }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="relative -mt-10">
      <div class="container-shell">
        <div class="grid overflow-hidden rounded-sm border border-hfm-mist bg-white shadow-machine md:grid-cols-3">
          <article v-for="item in highlights" :key="item.label" class="border-b border-hfm-mist p-6 md:border-b-0 md:border-r last:border-0">
            <p class="text-4xl font-black text-hfm-teal">{{ item.value }}</p>
            <h2 class="mt-3 text-base font-black text-hfm-graphite">{{ item.label }}</h2>
            <p class="mt-2 text-sm leading-7 text-hfm-steel">{{ item.detail }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container-shell">
        <div class="max-w-3xl">
          <p class="eyebrow">{{ locale === 'zh' ? '設備分類' : 'Equipment Fields' }}</p>
          <h2 class="mt-4 text-3xl font-black leading-tight text-hfm-graphite sm:text-4xl">
            {{ locale === 'zh' ? '以真實製程需求規劃高週波設備與整廠系統。' : 'Plan high-frequency equipment and turnkey systems around real production needs.' }}
          </h2>
        </div>
        <div class="mt-10 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
          <ProductCard
            v-for="category in categories"
            :key="category.slug"
            :item="category"
            :to="`/products#${category.slug}`"
          />
        </div>
      </div>
    </section>

    <section class="bg-white section-pad">
      <div class="container-shell">
        <div class="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p class="eyebrow">{{ locale === 'zh' ? '工程流程' : 'Engineering Flow' }}</p>
            <h2 class="mt-4 text-3xl font-black leading-tight text-hfm-graphite sm:text-4xl">
              {{ locale === 'zh' ? '從需求盤點、測試到驗收，讓專用機更貼近現場。' : 'From discovery and testing to acceptance, custom equipment stays close to shop-floor reality.' }}
            </h2>
            <p class="mt-5 text-base leading-8 text-hfm-steel">
              {{ locale === 'zh'
                ? '賀民以需求盤點、製程測試、設備設計、製造組裝到試車驗收作為資訊主線，讓客戶先理解賀民如何把材料、產能與現場條件轉成專用機規格，再進入產品與聯絡流程。'
                : 'The redesigned structure follows discovery, process testing, engineering, build and acceptance, helping buyers see how HFM turns material, capacity and site conditions into custom machine specifications before moving into products and inquiry.' }}
            </p>
          </div>
          <ol class="grid gap-3">
            <li
              v-for="(step, index) in processSteps"
              :key="step"
              class="flex items-center gap-4 rounded-sm border border-hfm-mist bg-hfm-porcelain p-4"
            >
              <span class="grid h-10 w-10 flex-none place-items-center rounded-sm bg-hfm-graphite text-sm font-black text-hfm-cyan">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <span class="font-bold text-hfm-graphite">{{ step }}</span>
              <CheckCircle2 class="ml-auto h-5 w-5 text-hfm-teal" />
            </li>
          </ol>
        </div>
      </div>
    </section>

    <InquiryPanel />
  </div>
</template>
