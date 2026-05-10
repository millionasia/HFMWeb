<script setup>
import { ArrowUpRight } from 'lucide-vue-next'

defineProps({
  item: {
    type: Object,
    required: true
  },
  to: {
    type: String,
    required: true
  }
})
</script>

<template>
  <NuxtLink
    :to="to"
    class="focus-ring group grid h-full grid-rows-[auto_1fr] overflow-hidden rounded-sm border border-hfm-mist bg-white shadow-sm transition hover:-translate-y-1 hover:border-hfm-cyan hover:shadow-machine"
  >
    <div class="aspect-[16/10] overflow-hidden bg-hfm-mist">
      <img
        :src="item.image"
        :alt="item.name"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      >
    </div>
    <div class="flex min-h-48 flex-col p-5">
      <div class="flex items-start justify-between gap-4">
        <h2 class="text-xl font-black text-hfm-graphite">{{ item.name }}</h2>
        <ArrowUpRight class="mt-1 h-5 w-5 flex-none text-hfm-teal transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
      <p class="mt-3 line-clamp-3 text-sm leading-7 text-hfm-steel">{{ item.summary || item.intro }}</p>
      <p v-if="item.model" class="mt-auto pt-5 text-xs font-black uppercase tracking-[0.16em] text-hfm-teal">
        {{ item.model }}
      </p>
    </div>
  </NuxtLink>
</template>
