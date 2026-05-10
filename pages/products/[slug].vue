<script setup>
import { ArrowLeft, CheckCircle2 } from 'lucide-vue-next'

const route = useRoute()
const { data, locale } = useHfm()

const product = computed(() => data.value.getProduct(String(route.params.slug)))
const category = computed(() => product.value ? data.value.getCategory(product.value.category) : null)
const site = computed(() => data.value.site)

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}

useHead(() => ({
  title: `${product.value.name} | ${site.value.name}`,
  meta: [
    { name: 'description', content: product.value.intro }
  ]
}))
</script>

<template>
  <div>
    <section class="bg-white">
      <div class="container-shell py-10">
        <NuxtLink
          to="/products"
          class="focus-ring inline-flex items-center gap-2 rounded-sm text-sm font-bold text-hfm-teal transition hover:text-hfm-graphite"
        >
          <ArrowLeft class="h-4 w-4" />
          {{ locale === 'zh' ? '返回產品設備' : 'Back to Products' }}
        </NuxtLink>
      </div>
      <div class="container-shell grid gap-10 pb-16 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p class="eyebrow">{{ category?.name }}</p>
          <p v-if="product.model" class="mt-4 text-sm font-black uppercase tracking-[0.18em] text-hfm-teal">
            {{ product.model }}
          </p>
          <h1 class="mt-4 text-4xl font-black leading-tight text-hfm-graphite sm:text-5xl">
            {{ product.name }}
          </h1>
          <p class="mt-5 text-lg leading-8 text-hfm-steel">
            {{ product.intro }}
          </p>
        </div>
        <img
          :src="product.image"
          :alt="product.name"
          class="aspect-[16/10] w-full rounded-sm border border-hfm-mist object-contain bg-white p-4 shadow-machine"
        >
      </div>
    </section>

    <section class="section-pad">
      <div class="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p class="eyebrow">{{ locale === 'zh' ? '設備特色' : 'Key Features' }}</p>
          <h2 class="mt-4 text-3xl font-black text-hfm-graphite">
            {{ locale === 'zh' ? '適合現場製程的設備重點' : 'Equipment Focus for Production Use' }}
          </h2>
          <ul class="mt-7 grid gap-4">
            <li v-for="feature in product.features" :key="feature" class="flex gap-3 rounded-sm border border-hfm-mist bg-white p-4">
              <CheckCircle2 class="mt-0.5 h-5 w-5 flex-none text-hfm-teal" />
              <span class="text-sm font-semibold leading-7 text-hfm-charcoal">{{ feature }}</span>
            </li>
          </ul>
        </div>

        <div class="rounded-sm border border-hfm-mist bg-white p-6 shadow-sm">
          <h2 class="text-2xl font-black text-hfm-graphite">
            {{ locale === 'zh' ? '規格方向' : 'Specification Direction' }}
          </h2>
          <dl class="mt-6 divide-y divide-hfm-mist">
            <div v-for="specItem in product.specs" :key="specItem.label" class="grid gap-2 py-4 sm:grid-cols-[10rem_1fr]">
              <dt class="text-sm font-bold text-hfm-steel">{{ specItem.label }}</dt>
              <dd class="text-base font-semibold text-hfm-graphite">{{ specItem.value }}</dd>
            </div>
          </dl>
          <NuxtLink
            :to="`/contact?product=${product.model || product.slug}#inquiry`"
            class="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-sm bg-hfm-graphite px-5 py-3 text-sm font-black text-white transition hover:bg-hfm-teal sm:w-auto"
          >
            {{ locale === 'zh' ? '詢問此設備' : 'Inquire About This Machine' }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
