<script setup>
const { data, locale } = useHfm()
const site = computed(() => data.value.site)
const sitemap = computed(() => data.value.sitemap)

useHead(() => ({
  title: `${locale.value === 'zh' ? '網站地圖' : 'Sitemap'} | ${site.value.name}`,
  meta: [
    {
      name: 'description',
      content: locale.value === 'zh'
        ? '賀民網站地圖，包含首頁、產品設備、應用服務、關於賀民與聯絡資訊。'
        : 'HFM sitemap including home, products, applications, about and contact information.'
    }
  ]
}))
</script>

<template>
  <div>
    <PageHero
      eyebrow="Sitemap"
      :title="locale === 'zh' ? '網站地圖' : 'Sitemap'"
      :description="locale === 'zh'
        ? '完整列出網站主要入口、產品分類與產品頁，強化使用者導覽與搜尋引擎索引。'
        : 'A complete list of site entries for user navigation and search engine indexing.'"
    />

    <section class="section-pad">
      <div class="container-shell grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <article v-for="group in sitemap" :key="group.title" class="rounded-sm border border-hfm-mist bg-white p-6 shadow-sm">
          <h2 class="text-xl font-black text-hfm-graphite">{{ group.title }}</h2>
          <ul class="mt-5 space-y-3">
            <li v-for="link in group.links" :key="link.to">
              <NuxtLink class="focus-ring rounded-sm text-sm font-semibold text-hfm-steel transition hover:text-hfm-teal" :to="link.to">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </article>
      </div>
    </section>
  </div>
</template>
