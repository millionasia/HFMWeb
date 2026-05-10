<script setup>
const { data, locale } = useHfm()
const site = computed(() => data.value.site)
const about = computed(() => data.value.about)

useHead(() => ({
  title: `${locale.value === 'zh' ? '關於賀民' : 'About'} | ${site.value.name}`,
  meta: [
    { name: 'description', content: site.value.seoDescription }
  ]
}))
</script>

<template>
  <div>
    <PageHero
      eyebrow="About HFM"
      :title="locale === 'zh' ? '關於賀民' : 'About HFM'"
      :description="site.summary"
    />

    <section class="section-pad">
      <div class="container-shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <aside class="rounded-sm border border-hfm-mist bg-white p-6 shadow-sm">
          <dl class="grid gap-5">
            <div>
              <dt class="text-sm font-bold text-hfm-steel">{{ locale === 'zh' ? '創立年份' : 'Founded' }}</dt>
              <dd class="mt-1 text-3xl font-black text-hfm-teal">{{ site.founded }}</dd>
            </div>
            <div>
              <dt class="text-sm font-bold text-hfm-steel">{{ locale === 'zh' ? '公司名稱' : 'Company' }}</dt>
              <dd class="mt-1 text-lg font-black text-hfm-graphite">{{ site.legalName }}</dd>
            </div>
            <div>
              <dt class="text-sm font-bold text-hfm-steel">{{ locale === 'zh' ? '核心能力' : 'Core Capability' }}</dt>
              <dd class="mt-1 text-base leading-7 text-hfm-charcoal">
                {{ locale === 'zh'
                  ? '高週波設備設計製造、特殊專用機客製、整廠設備承包、安裝訓練與售後服務。'
                  : 'High-frequency equipment design and manufacturing, custom-built machines, turnkey systems, installation training and after-sales service.' }}
              </dd>
            </div>
          </dl>
        </aside>

        <div class="space-y-10">
          <section class="rounded-sm border border-hfm-mist bg-white p-6 shadow-sm">
            <p class="eyebrow">{{ about.profile.title }}</p>
            <h2 class="mt-3 text-3xl font-black text-hfm-graphite">
              {{ locale === 'zh' ? '專業高週波機械製造與出口經驗' : 'Professional RF machinery manufacturing and export experience' }}
            </h2>
            <div class="mt-5 space-y-4 text-base leading-8 text-hfm-steel">
              <p v-for="paragraph in about.profile.paragraphs" :key="paragraph">{{ paragraph }}</p>
            </div>
          </section>

          <section class="rounded-sm border border-hfm-mist bg-white p-6 shadow-sm">
            <p class="eyebrow">{{ about.history.title }}</p>
            <div class="mt-5 space-y-4 text-base leading-8 text-hfm-steel">
              <p v-for="paragraph in about.history.paragraphs" :key="paragraph">{{ paragraph }}</p>
            </div>
          </section>

          <section class="rounded-sm border border-hfm-mist bg-white p-6 shadow-sm">
            <p class="eyebrow">{{ about.business.title }}</p>
            <p class="mt-4 text-base leading-8 text-hfm-steel">{{ about.business.intro }}</p>
            <ul class="mt-6 grid gap-3 sm:grid-cols-2">
              <li v-for="item in about.business.items" :key="item" class="rounded-sm border border-hfm-mist bg-hfm-porcelain px-4 py-3 text-sm font-semibold leading-6 text-hfm-charcoal">
                {{ item }}
              </li>
            </ul>
          </section>

          <section class="rounded-sm border border-hfm-mist bg-white p-6 shadow-sm">
            <p class="eyebrow">{{ about.customers.title }}</p>
            <p class="mt-4 text-base leading-8 text-hfm-steel">{{ about.customers.intro }}</p>
            <ul class="mt-6 grid gap-3 sm:grid-cols-2">
              <li v-for="item in about.customers.items" :key="item" class="border-b border-hfm-mist pb-3 text-sm font-bold leading-6 text-hfm-graphite">
                {{ item }}
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>
