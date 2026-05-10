<script setup>
import { Factory, Gauge, ShieldCheck } from 'lucide-vue-next'

const { data, locale } = useHfm()
const site = computed(() => data.value.site)
const applications = computed(() => data.value.applications)
const processSteps = computed(() => data.value.process)
const icons = [Factory, Gauge, ShieldCheck]

useHead(() => ({
  title: `${locale.value === 'zh' ? '應用服務' : 'Applications'} | ${site.value.name}`,
  meta: [
    {
      name: 'description',
      content: locale.value === 'zh'
        ? '賀民應用服務包含製程診斷、設備工程與整廠承包。'
        : 'HFM applications include process diagnosis, equipment engineering and turnkey delivery.'
    }
  ]
}))
</script>

<template>
  <div>
    <PageHero
      eyebrow="Applications"
      :title="locale === 'zh' ? '應用服務' : 'Applications'"
      :description="locale === 'zh'
        ? '高週波設備不是單一規格表，而是由材料特性、產能目標、現場安全與維修條件共同決定的工程解法。'
        : 'RF equipment is not only a specification sheet. It is an engineering solution shaped by material behavior, capacity goals, site safety and maintenance reality.'"
    />

    <section class="section-pad">
      <div class="container-shell">
        <div class="grid gap-5 lg:grid-cols-3">
          <article
            v-for="(item, index) in applications"
            :key="item.title"
            class="rounded-sm border border-hfm-mist bg-white p-6 shadow-sm"
          >
            <component :is="icons[index]" class="h-8 w-8 text-hfm-teal" />
            <h2 class="mt-6 text-2xl font-black text-hfm-graphite">{{ item.title }}</h2>
            <p class="mt-4 text-sm leading-7 text-hfm-steel">{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-white section-pad">
      <div class="container-shell">
        <div class="max-w-3xl">
          <p class="eyebrow">{{ locale === 'zh' ? '交付流程' : 'Delivery Path' }}</p>
          <h2 class="mt-4 text-3xl font-black text-hfm-graphite sm:text-4xl">
            {{ locale === 'zh' ? '把測試、設計、製造與驗收串成可追蹤的路徑。' : 'Connect trials, design, build and acceptance into one traceable path.' }}
          </h2>
        </div>
        <ol class="mt-10 grid gap-4 md:grid-cols-5">
          <li
            v-for="(step, index) in processSteps"
            :key="step"
            class="rounded-sm border border-hfm-mist bg-hfm-porcelain p-5"
          >
            <span class="text-sm font-black text-hfm-teal">{{ String(index + 1).padStart(2, '0') }}</span>
            <p class="mt-3 text-base font-black text-hfm-graphite">{{ step }}</p>
          </li>
        </ol>
      </div>
    </section>

    <InquiryPanel />
  </div>
</template>
