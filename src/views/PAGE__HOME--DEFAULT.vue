<script setup>
import { useData } from '@/composables/useData'
import ComponentHero from '@/components/COMPONENT__HERO--PAGE.vue'
import ComponentLoadingState from '@/components/COMPONENT__LOADING--STATE.vue'
import ComponentErrorState from '@/components/COMPONENT__ERROR--STATE.vue'

const { data, isLoading, error } = useData()
</script>

<template>
  <ComponentLoadingState v-if="isLoading" />
  <ComponentErrorState v-else-if="error" />
  <div v-else>
    <section class="page-home">
      <ComponentHero :title="data.pages.home.hero.title" :subtitle="data.pages.home.hero.subtitle"
        :image="data.pages.home.hero.image" />
      <!-- Rest of home page content using data -->
    </section>
  </div>
</template>
