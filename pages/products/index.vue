<script setup>
const { data, locale } = useHfm()
const { assetPath } = useAssetPath()

const site = computed(() => data.value.site)
const categories = computed(() => data.value.productCategories)
const products = computed(() => data.value.products)

const productsFor = (slug) => products.value.filter((product) => product.category === slug)

useHead(() => ({
  title: `${locale.value === 'zh' ? '產品設備' : 'Products'} | ${site.value.name}`,
  meta: [
    {
      name: 'description',
      content: locale.value === 'zh'
        ? '賀民產品設備包含整廠設備系列、金屬熱處理機類、塑膠熔接機類與高週波乾燥機類。'
        : 'HFM product equipment includes turnkey systems, metal heating machines, plastic welding machines and RF drying machines.'
    }
  ]
}))
</script>

<template>
  <div>
    <PageHero
      eyebrow="Products"
      :title="locale === 'zh' ? '產品設備' : 'Products'"
      :description="locale === 'zh'
        ? '依設備類別整理實機照片、型號與應用方向，方便客戶從製程需求找到合適機型。'
        : 'Real machine photos, models and applications are organized by equipment category so buyers can quickly find the right direction.'"
    />

    <section class="border-b border-hfm-mist bg-white py-10">
      <div class="container-shell">
        <div class="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
          <ProductCard
            v-for="category in categories"
            :key="category.slug"
            :item="category"
            :to="`/products#${category.slug}`"
          />
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container-shell space-y-16">
        <section
          v-for="category in categories"
          :id="category.slug"
          :key="category.slug"
          class="scroll-mt-28"
        >
          <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div class="lg:sticky lg:top-28">
              <img
                :src="assetPath(category.image)"
                :alt="category.name"
                class="aspect-[16/10] w-full rounded-sm border border-hfm-mist object-cover shadow-sm"
                loading="lazy"
              >
              <h2 class="mt-6 text-3xl font-black text-hfm-graphite">{{ category.name }}</h2>
              <p class="mt-4 text-base leading-8 text-hfm-steel">{{ category.summary }}</p>
            </div>
            <div class="grid auto-rows-fr gap-5 md:grid-cols-2">
              <ProductCard
                v-for="product in productsFor(category.slug)"
                :key="product.slug"
                :item="product"
                :to="`/products/${product.slug}`"
              />
            </div>
          </div>
        </section>
      </div>
    </section>

    <InquiryPanel />
  </div>
</template>
