<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <section class="border-b border-hfm-mist bg-white">
    <div class="container-shell py-14 sm:py-[4.5rem] lg:py-20">
      <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
      <h1 class="mt-4 max-w-4xl text-4xl font-black leading-tight text-hfm-graphite sm:text-5xl">
        {{ title }}
      </h1>
      <p v-if="description" class="mt-5 max-w-3xl text-base leading-8 text-hfm-steel sm:text-lg">
        {{ description }}
      </p>
    </div>
  </section>
</template>
