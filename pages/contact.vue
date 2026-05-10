<script setup>
import { Mail, MapPin, Phone, Printer } from 'lucide-vue-next'

const route = useRoute()
const { data, locale } = useHfm()
const site = computed(() => data.value.site)
const selectedProduct = computed(() => route.query.product || '')

useHead(() => ({
  title: `${locale.value === 'zh' ? '聯絡我們' : 'Contact'} | ${site.value.name}`,
  meta: [
    {
      name: 'description',
      content: locale.value === 'zh'
        ? '聯絡賀民企業有限公司，洽詢高週波塑膠熔接、金屬熱處理、乾燥與整廠設備。'
        : 'Contact HFM for RF plastic welding, metal heat treatment, drying and turnkey equipment.'
    }
  ]
}))
</script>

<template>
  <div>
    <PageHero
      eyebrow="Contact"
      :title="locale === 'zh' ? '聯絡我們' : 'Contact HFM'"
      :description="locale === 'zh'
        ? '提供材料、產品尺寸、產能與場地條件，賀民可協助判斷合適的高週波設備方向。'
        : 'Share material, product size, capacity and site conditions so HFM can help identify the right RF equipment direction.'"
    />

    <section id="inquiry" class="section-pad scroll-mt-28">
      <div class="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <aside class="rounded-sm border border-hfm-mist bg-white p-6 shadow-sm">
          <h2 class="text-2xl font-black text-hfm-graphite">{{ site.legalName }}</h2>
          <dl class="mt-6 grid gap-5 text-sm text-hfm-charcoal">
            <div class="flex gap-3">
              <MapPin class="mt-0.5 h-5 w-5 flex-none text-hfm-teal" />
              <dd>{{ site.address }}</dd>
            </div>
            <div class="flex gap-3">
              <Phone class="mt-0.5 h-5 w-5 flex-none text-hfm-teal" />
              <dd>{{ site.phone }}</dd>
            </div>
            <div class="flex gap-3">
              <Printer class="mt-0.5 h-5 w-5 flex-none text-hfm-teal" />
              <dd>{{ site.fax }}</dd>
            </div>
            <div class="flex gap-3">
              <Mail class="mt-0.5 h-5 w-5 flex-none text-hfm-teal" />
              <dd>
                <a class="focus-ring rounded-sm transition hover:text-hfm-teal" :href="`mailto:${site.email}`">
                  {{ site.email }}
                </a>
              </dd>
            </div>
          </dl>
        </aside>

        <form class="rounded-sm border border-hfm-mist bg-white p-6 shadow-sm" @submit.prevent>
          <div class="grid gap-5 sm:grid-cols-2">
            <label class="grid gap-2 text-sm font-bold text-hfm-graphite">
              {{ locale === 'zh' ? '姓名' : 'Name' }}
              <input class="focus-ring rounded-sm border border-hfm-mist px-4 py-3 font-medium text-hfm-charcoal" type="text" autocomplete="name">
            </label>
            <label class="grid gap-2 text-sm font-bold text-hfm-graphite">
              {{ locale === 'zh' ? '公司' : 'Company' }}
              <input class="focus-ring rounded-sm border border-hfm-mist px-4 py-3 font-medium text-hfm-charcoal" type="text" autocomplete="organization">
            </label>
            <label class="grid gap-2 text-sm font-bold text-hfm-graphite">
              Email
              <input class="focus-ring rounded-sm border border-hfm-mist px-4 py-3 font-medium text-hfm-charcoal" type="email" autocomplete="email">
            </label>
            <label class="grid gap-2 text-sm font-bold text-hfm-graphite">
              {{ locale === 'zh' ? '詢問設備' : 'Equipment' }}
              <input
                class="focus-ring rounded-sm border border-hfm-mist px-4 py-3 font-medium text-hfm-charcoal"
                type="text"
                :value="selectedProduct"
              >
            </label>
            <label class="grid gap-2 text-sm font-bold text-hfm-graphite sm:col-span-2">
              {{ locale === 'zh' ? '需求內容' : 'Message' }}
              <textarea class="focus-ring min-h-40 rounded-sm border border-hfm-mist px-4 py-3 font-medium text-hfm-charcoal" />
            </label>
          </div>
          <button
            type="submit"
            class="focus-ring mt-6 inline-flex w-full justify-center rounded-sm bg-hfm-teal px-5 py-3 text-sm font-black text-white transition hover:bg-hfm-graphite sm:w-auto"
          >
            {{ locale === 'zh' ? '送出諮詢' : 'Send Inquiry' }}
          </button>
          <p class="mt-4 text-xs leading-6 text-hfm-steel">
            {{ locale === 'zh' ? '此表單為前端 Mock，正式版可串接 Email、CRM 或後台系統。' : 'This is a frontend mock form. Production can connect to email, CRM or a CMS.' }}
          </p>
        </form>
      </div>
    </section>
  </div>
</template>
