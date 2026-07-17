<script setup>
import { Mail, MapPin, PackageSearch, Phone, Printer, UserRound } from 'lucide-vue-next'

const route = useRoute()
const { data, locale } = useHfm()
const site = computed(() => data.value.site)
const selectedProduct = computed(() => route.query.product || '')

const contact = computed(() => {
  const isZh = locale.value === 'zh'

  return {
    title: isZh ? '聯絡我們' : 'Contact HFM',
    description: isZh
      ? '如需高週波設備、塑膠熔接、金屬加熱或整廠設備規劃，歡迎直接與賀民業務部聯繫。'
      : 'Contact HFM for high-frequency equipment, plastic welding, metal heating and turnkey equipment planning.',
    company: isZh
      ? '賀民企業有限公司'
      : 'Min High Frequency Preheating Machine Co., Ltd.',
    companyAddressLabel: isZh ? '公司地址' : 'COMPANY',
    companyAddress: isZh
      ? '238新北市樹林區三俊街 159 巷 13 號'
      : 'NO.13, LANE 159, SANJUN ST. SHULIN DIST., NEW TAIPEI CITY 238, TAIWAN. (R.O.C.)',
    addressLabel: isZh ? '工廠地址' : 'FACTORY ADDRESS',
    address: isZh
      ? '333 桃園市龜山區豐榮街一巷161之13號'
      : 'No.161-13, Ln. 1, Fengrong St., Guishan Township, Taoyuan County 333, Taiwan (R.O.C.)',
    telLabel: 'TEL NO',
    tel: isZh
      ? '03-349-1067 or 03-349-1068'
      : '886-3-349-1067 or 886-3-349-1068',
    faxLabel: 'FAX NO',
    fax: isZh ? '03-349-8823' : '886-3-349-8823',
    contactLabel: isZh ? '業務部' : 'Contact with',
    contactName: isZh ? '黃寶萱(Paul)' : 'Paul Huang',
    emailLabel: isZh ? '電子信箱' : 'Email',
    noteTitle: isZh ? '來信時可提供' : 'Helpful Details',
    noteItems: isZh
      ? ['產品或材料類型', '預計尺寸、產能或工件照片', '目前製程問題或希望改善的地方']
      : ['Product or material type', 'Target size, capacity or workpiece photos', 'Current process issue or improvement target'],
    selectedProductLabel: isZh ? '詢問機型' : 'Selected Machine'
  }
})

const emails = computed(() => site.value.emails?.length ? site.value.emails : [site.value.email])

useHead(() => ({
  title: `${contact.value.title} | ${site.value.name}`,
  meta: [
    {
      name: 'description',
      content: contact.value.description
    }
  ]
}))
</script>

<template>
  <div>
    <PageHero
      eyebrow="Contact"
      :title="contact.title"
      :description="contact.description"
    />

    <section id="inquiry" class="section-pad scroll-mt-28">
      <div class="container-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <article class="rounded-sm border border-hfm-mist bg-white p-6 shadow-sm sm:p-8">
          <p class="text-xs font-black uppercase tracking-[0.18em] text-hfm-teal">
            {{ locale === 'zh' ? '聯絡資訊' : 'Contact Information' }}
          </p>
          <h2 class="mt-3 text-2xl font-black text-hfm-graphite sm:text-3xl">
            {{ contact.company }}
          </h2>

          <dl class="mt-8 grid gap-6 text-sm text-hfm-charcoal">
            <div class="grid gap-3 sm:grid-cols-[1.75rem_8rem_1fr]">
              <MapPin class="h-5 w-5 text-hfm-teal" />
              <dt class="font-black text-hfm-graphite">{{ contact.companyAddressLabel }}</dt>
              <dd class="leading-7">{{ contact.companyAddress }}</dd>
            </div>

            <div class="grid gap-3 sm:grid-cols-[1.75rem_8rem_1fr]">
              <MapPin class="h-5 w-5 text-hfm-teal" />
              <dt class="font-black text-hfm-graphite">{{ contact.addressLabel }}</dt>
              <dd class="leading-7">{{ contact.address }}</dd>
            </div>

            <div class="grid gap-3 sm:grid-cols-[1.75rem_8rem_1fr]">
              <Phone class="h-5 w-5 text-hfm-teal" />
              <dt class="font-black text-hfm-graphite">{{ contact.telLabel }}</dt>
              <dd class="leading-7">{{ contact.tel }}</dd>
            </div>

            <div class="grid gap-3 sm:grid-cols-[1.75rem_8rem_1fr]">
              <Printer class="h-5 w-5 text-hfm-teal" />
              <dt class="font-black text-hfm-graphite">{{ contact.faxLabel }}</dt>
              <dd class="leading-7">{{ contact.fax }}</dd>
            </div>

            <div class="grid gap-3 sm:grid-cols-[1.75rem_8rem_1fr]">
              <UserRound class="h-5 w-5 text-hfm-teal" />
              <dt class="font-black text-hfm-graphite">{{ contact.contactLabel }}</dt>
              <dd class="leading-7">{{ contact.contactName }}</dd>
            </div>

            <div class="grid gap-3 sm:grid-cols-[1.75rem_8rem_1fr]">
              <Mail class="h-5 w-5 text-hfm-teal" />
              <dt class="font-black text-hfm-graphite">{{ contact.emailLabel }}</dt>
              <dd class="grid gap-2 leading-7">
                <a
                  v-for="email in emails"
                  :key="email"
                  class="focus-ring w-fit rounded-sm transition hover:text-hfm-teal"
                  :href="`mailto:${email}`"
                >
                  {{ email }}
                </a>
              </dd>
            </div>
          </dl>
        </article>

        <aside class="rounded-sm border border-hfm-mist bg-hfm-graphite p-6 text-white shadow-sm sm:p-8">
          <div v-if="selectedProduct" class="mb-8 rounded-sm border border-white/15 bg-white/8 p-4">
            <div class="flex items-start gap-3">
              <PackageSearch class="mt-0.5 h-5 w-5 flex-none text-hfm-cyan" />
              <div>
                <p class="text-xs font-black uppercase tracking-[0.18em] text-white/60">
                  {{ contact.selectedProductLabel }}
                </p>
                <p class="mt-2 text-lg font-black text-white">{{ selectedProduct }}</p>
              </div>
            </div>
          </div>

          <h2 class="text-2xl font-black">{{ contact.noteTitle }}</h2>
          <ul class="mt-6 grid gap-4 text-sm leading-7 text-white/78">
            <li
              v-for="item in contact.noteItems"
              :key="item"
              class="border-l-2 border-hfm-cyan pl-4"
            >
              {{ item }}
            </li>
          </ul>

          <div class="mt-8 border-t border-white/10 pt-6">
            <a
              class="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-sm bg-white px-5 py-3 text-sm font-black text-hfm-graphite transition hover:bg-hfm-mist"
              :href="`mailto:${emails[0]}`"
            >
              <Mail class="h-4 w-4" />
              {{ locale === 'zh' ? '寄信聯絡' : 'Send Email' }}
            </a>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>
