<script setup>
import { homePage } from '@/data/pages/homePage.js'
import ComponentHero from '@/components/COMPONENT__HERO--PAGE.vue'
</script>

<template>
  <section class="page-home">
    <ComponentHero :title="homePage.hero.title" :subtitle="homePage.hero.subtitle" :image="homePage.hero.image" />
    <div class="page-home__content max-w-4xl mx-auto py-8 px-6">
      <div class="page-home__body">
        <div v-for="(block, index) in homePage.blocks" :key="index" class="page-home__block mb-6">
          <!-- Content Block -->
          <div v-if="block.type === 'content'" class="page-home__content-block">
            <h2 v-if="block.title" class="text-2xl font-bold text-gray-900 mb-4">{{ block.title }}</h2>
            <div v-if="block.text" class="prose max-w-none" v-html="block.text"></div>
            <img v-if="block.image" :src="block.image" :alt="block.title" class="mt-4 rounded-lg shadow-md" />
          </div>
          <!-- Features Block -->
          <div v-else-if="block.features" class="page-home__features">
            <h2 v-if="block.features.title" class="text-2xl font-bold text-gray-900 mb-6">{{ block.features.title }}
            </h2>
            <div v-if="block.features.features && block.features.features.length > 0" class="grid md:grid-cols-2 gap-6">
              <div v-for="(feature, featureIndex) in block.features.features" :key="featureIndex"
                class="page-home__feature">
                <h3 class="text-lg font-semibold mb-2 text-blue-600">{{ feature.title }}</h3>
                <p class="text-gray-600">{{ feature.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
