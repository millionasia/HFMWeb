<script setup>
import { ArrowRight, Mail, Phone } from 'lucide-vue-next'

const { data, locale } = useHfm()
const site = computed(() => data.value.site)
</script>

<template>
  <section class="bg-hfm-teal text-white">
    <div class="container-shell py-12">
      <div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
            {{ locale === 'zh' ? '設備諮詢' : 'Project Inquiry' }}
          </p>
          <h2 class="mt-3 text-3xl font-black sm:text-4xl">
            {{ locale === 'zh' ? '讓設備規格從製程需求開始。' : 'Let equipment specs start from the process.' }}
          </h2>
          <p class="mt-4 max-w-3xl text-sm leading-7 text-white/78 sm:text-base">
            {{ locale === 'zh'
              ? '提供材料、尺寸、產能、場地限制或目前遇到的瓶頸，賀民可協助評估高週波設備方向。'
              : 'Share your material, size, capacity, site limits or bottleneck, and HFM can map the right high-frequency equipment direction.' }}
          </p>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            :href="`mailto:${site.email}`"
            class="focus-ring inline-flex items-center justify-center gap-2 rounded-sm bg-white px-5 py-3 text-sm font-bold text-hfm-graphite transition hover:bg-hfm-mist"
          >
            <Mail class="h-4 w-4" />
            {{ site.email }}
          </a>
          <a
            :href="`tel:${site.telLinks?.[0]}`"
            class="focus-ring inline-flex items-center justify-center gap-2 rounded-sm border border-white/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            <Phone class="h-4 w-4" />
            {{ site.phone }}
            <ArrowRight class="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
